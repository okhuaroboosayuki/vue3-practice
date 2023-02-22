<template>
  <article class="stats">
    <!-- <h4>Total Sales: <slot name="icon"></slot></h4> -->
    <!-- slot outlet The <slot> element is a slot outlet that indicates where the parent-provided slot content should be rendered -->
    <!-- <slot></slot> -->

    <!-- using provide and inject -->
    <h4>Total Sales: <span>&#128176</span></h4>
    <span class="light_text">$ {{ totalSalesValue }}</span>
  </article>
</template>

<script>
export default {
  name: "SalesTotal",
  // inject is used to inject a property from the parent component
  inject: ["totalSalesValue"],
};
</script>

<style scoped></style>
