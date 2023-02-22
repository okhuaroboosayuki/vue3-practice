<template>
  <div class="app_wrapper">
    <header>
      <h1>Raymond's Dashboard</h1>
    </header>

    <div class="content">

      <aside>
        <side-bar>
          <!-- using slot props -->
          <!-- <template #default="slotProps">
            <a>{{ slotProps.page }}</a>
          </template> -->
          <!-- we can use javascript destructuring to also access slotProps -->
          <!-- <template #default="{ page }">
            <a @click="selectedPage = `${page}`">{{ page }}</a>
          </template> -->
        </side-bar>
      </aside>

      <main>
        <small><span class="blue">dashboard</span> / Overview</small>
        <!-- <Overview
          :quantityOfItemsSold="55"
          :totalSalesValue="900"
          bestSeller="Vue Hoodie-Medium"
        /> -->
        <!-- <orders>
          <template #total> -->
            <!-- <sales-total>
              <template #icon>
                <span>&#128176</span>
              </template>
              <template #default>
                <span class="light_text">$ {{ totalSalesValue }}</span>
              </template>
            </sales-total> -->
          <!-- </template> -->
          <!-- <template #default>
            
          </template> -->
        <!-- </orders> -->
        <!-- <best-sellers>
          <table>
            <thead>
              <th>quantity Sold</th>
              <th>Product Name</th>
              <th>Product Id</th>
              <th>Product Price</th>
            </thead>
            <tbody>
              <tr v-for="{id, quantity, name, price} in sortedItems" :key="id">
              <td>{{ quantity }}</td>
              <td>{{ name }}</td>
              <td>{{ id }}</td>
              <td>{{ price }}</td>
              </tr>
            </tbody>
          </table>
        </best-sellers> -->
        <component :is="selectedPage.replace(/\s/, '')"></component>

      </main>

    </div>

  </div>
</template>

<script>
import Overview from "./views/Overview.vue";
import SideBar from "./components/SideBar.vue";
import Orders from "./views/Orders.vue";
import BestSellers from "./views/BestSellers.vue";
import SalesTotal from "./components/SalesTotal.vue";
import { orders } from "./orders";
export default {
  name: "App",
  components: {
    Overview,
    SideBar,
    Orders,
    SalesTotal,
    BestSellers,
  },
  data() {
    return {
      orders,
      selectedPage: 'Overview'
    }
  },
  // provide is used to provide a property to the child component, it returns properties that can be injected into child components
  provide() {
    return {
      quantityOfItemsSold: this.quantityOfItemsSold,
      totalSalesValue: this.totalSalesValue,
      bestSeller: this.sortedItems[0].name,
      orders: this.orders,
      sortedItems: this.sortedItems,
      changePage: this.changePage,
    }
  },
  methods: {
    changePage(page) {
      this.selectedPage = page;
    }
  },
  computed: {
    sortedItems() {
      // create an empty array to store sorted items
      const sortedItems = [];
      // loop through orders
      this.orders.map((order) => {
        // loop through items in each orders
        order.items.map((item) => {
          // check if item is already in sortedItems
          const itemExists = sortedItems.find((sortedItem) => sortedItem.id === item.id)
          // if item exists, increment quantity
          if (itemExists) {
            itemExists.quantity++
            return
          }
          // if item does not exist, add it to sortedItems
          const newItem = {
            quantity: 1,
            // spread the item object to get all the properties
            ...item
          }
          sortedItems.sort((a, b) => a.quantity > b.quantity ? -1 : 1)
          sortedItems.push(newItem)
        })
      })

      return sortedItems;
    },

    quantityOfItemsSold() {
      let qtySold = 0;
      this.sortedItems.map((item) => {
        qtySold += item.quantity;
      })
      return qtySold;
    },

    totalSalesValue() {
      let total = 0;
      // this.sortedItems.map((item) => {
      //   total += item.price * item.quantity;
      // })
      this.orders.map((order) => {
        order.items.map((item) => {
          total += item.price;
        })
      })
      return total;
    }
  }
};
</script>

<style>
.app_wrapper {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

header {
  background-color: white;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}

header h1 {
  font-size: 1.4rem;
}

.content {
  display: flex;
}

aside {
  flex: 1;
  border-right: 1px solid #ddd;
  min-height: 100vh;
}

main {
  flex: 3;
  padding: 1rem;
}

.blue {
  color: rgb(25, 149, 243);
}

h4 {
  margin: 0;
  padding-bottom: 1.6rem;
}

.light_text {
  font-weight: 300;
}

.stats {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 1rem;
}
</style>
