<template>
  <article class="stats">
    <!-- <h4>Top selling item: <slot name="icon"></slot></h4> -->
    <!-- slot outlet The <slot> element is a slot outlet that indicates where the parent-provided slot content should be rendered-->
    <!-- <slot></slot> -->

    <!-- using provide and inject -->
    <h4>Top selling item: <span>&#128293</span></h4>
    <span class="light_text">{{ bestSeller }}</span>
  </article>
</template>

<script>
export default {
  name: "BestSeller",
  inject: ["bestSeller"],
};
</script>

<style scoped></style>
