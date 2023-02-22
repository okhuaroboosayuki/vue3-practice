<template>
  <article class="stats">
    <!-- <h4>Item Sold: <slot name="icon"></slot></h4> -->
    <!-- slot outlet The <slot> element is a slot outlet that indicates where the parent-provided slot content should be rendered-->
    <!-- <slot> -->
      <!-- slot fallback content in case there's no content available -->
      <!-- no content available -->
    <!-- </slot> -->
    <!-- when not using the defualt -->
    <!-- <slot name="quantity"> </slot> -->

    <!-- using provide and inject -->
    <h4>Item Sold: <span>&#128200</span></h4>
    <span class="light_text">{{ quantityOfItemsSold }}</span>
  </article>
</template>

<script>
export default {
  name: "ItemsSold",
  inject: ["quantityOfItemsSold"],
};
</script>

<style scoped></style>
