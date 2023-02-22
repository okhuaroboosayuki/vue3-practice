<template>
    <div>
        <h3 class="page_title">Best Sellers</h3>
        <!-- <slot></slot> -->
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
    </div>
</template>


<script>
export default {
    name: "BestSellers",
    inject: ["sortedItems"]
}
</script>

<style>
table {
    border: 1px solid #ddd;
    border-radius: 5px;
    text-align: center;
}

th, td{
    padding: 20px;
}
</style>