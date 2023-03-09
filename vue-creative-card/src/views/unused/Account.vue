<template>
  <h1>My Account</h1>
  <div>
    <router-link :to="{ name: 'UpdateProfile' }">Update Profile</router-link> |
    <router-link :to="{ name: 'UserOrders' }">Previous Orders</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Account",
};
</script>
