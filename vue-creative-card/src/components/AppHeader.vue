<template>
  <header>
    <h1 @click="this.$router.push('/')">Creative Cards</h1>
    <nav>
      <ul>
        <li><router-link to="/category/birthday">Birthday</router-link></li>
        <li><router-link to="/category/anniversary">Anniversary</router-link></li>
        <li><router-link to="/category/christmas">Christmas</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  font-family: "Itim", cursive;
  letter-spacing: 1px;
  font-size: 18px;
  border-bottom: 1px solid lightgray;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h1 {
  cursor: pointer;
  margin: 0;
}
ul {
  display: flex;
}
li {
  padding-left: 0.5rem;
}
li a:hover {
  text-decoration: underline;
}
</style>
