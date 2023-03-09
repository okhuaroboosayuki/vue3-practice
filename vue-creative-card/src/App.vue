<template>
  <!-- <div id="nav">
    dynamic routing
    <router-link :to="{ name: 'Home' }">Home</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link> |
    <router-link :to="{ path: `/account/${user.id}` }">Account</router-link>

    <router-link :to="{ path: '/' }">Home</router-link> |
    <router-link :to="{ path: '/about' }">About</router-link>
    <router-link :to="`/user/${user.id}`">About</router-link>

    using params & query strings
    <router-link :to="{ name: 'Account', params: { userId: user.id } }">Account</router-link>
    <router-link :to="{ name: 'Home', params: { userId: user.id } }">Home</router-link> |
    <router-link :to="{ name: 'About', query: { name: user.name } }">About</router-link>

    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <AppHeader />
  <router-view />
</template>

<script>
// import Account from "./views/unused/Account.vue";
import AppHeader from "./components/AppHeader.vue";

export default {
  components: {
    AppHeader,
  },
  data() {
    return {
      // user: {
      //   id: 12334,
      //   name: "John Doe",
      // },
    };
  },
};
</script>

<style>
#app {
  font-family: "Merriweather", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

input,
textarea {
  font-family: "Merriweather", serif;
}

ul {
  margin: 0;
  padding: 0;
}

li,
li a {
  text-decoration: none;
  list-style: none;
  color: inherit;
}

@media (min-width: 600px) {
  .grid_wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }
}

@media (min-width: 1000px) {
  .grid_wrapper {
    grid-template-columns: repeat(3, 1fr);
  }
}

img {
  max-width: 100%;
}

button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-size: 14px;
}

button:hover,
li:hover {
  color: rgb(108, 108, 241);
}

.image_upload_wrapper,
.text_input_wrapper {
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: 1px 1px 2px 2px #ddd inset;
  border-radius: 3px;
}
</style>
