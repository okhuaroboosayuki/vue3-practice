<template>
  <nav>
    <ul>
      <li v-for="page in pages" :key="page">
        <!-- slot Props -->
        <!-- <slot :page="page"></slot> -->
        <a @click="changePage(page)">{{ page }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "SideBar",
  inject: ["changePage"],
  data() {
    return {
      pages: ["Overview", "Orders", "Best Sellers"],
    };
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 10px 0;
  cursor: pointer;
}

a{
  text-decoration: none;
}

a:hover {
  color: #000;
  border-bottom: 1px solid #585757;
}
</style>
