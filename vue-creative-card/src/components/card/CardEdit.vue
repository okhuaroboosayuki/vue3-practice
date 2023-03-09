<template>
  <ImageUpload />
  <div class="add_section_wrapper">
    <!-- (?) is called optional chaining The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error -->
    <button v-if="selectedPage.sections?.length < 4" @click="addSection()">
      Add new section
    </button>
  </div>
  <div v-for="(section, index) in selectedPage.sections" :key="section.id">
    <TextInput :section="section" :sectionIndex="index" />
  </div>
</template>

<script>
import TextInput from "./TextInput.vue";
import useCurrentCard from "../../composables/useCurrentCard";
import ImageUpload from "./ImageUpload.vue";

export default {
  components: {
    TextInput,
    ImageUpload,
  },
  props: {
    selectedPage: {
      type: Object,
    },
  },

  setup() {
    const { addSection } = useCurrentCard();
    return {
      addSection,
    };
  },
};
</script>

<style scoped>
.add_section_wrapper {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
}

button {
  border: 1px solid #aafe;
  padding: 10px;
  background-color: #2c3e50;
  color: #ddd;
}

button:hover {
  background-color: #ddd;
  color: #2c3e50;
}
</style>
