<template>
  <div
    class="text_input_wrapper"
    @mouseover="showOptions = true"
    @mouseout="showOptions = false"
  >
    <section class="text_input_header">
      <div>
        <button @click="updateSectionOrder(sectionIndex, -1)">
          <img src="../../assets/icons/arrow-up.svg" alt="Arrow up" />
        </button>

        <button @click="updateSectionOrder(sectionIndex, 1)">
          <img src="../../assets/icons/arrow-down.svg" alt="Arrow down" />
        </button>
      </div>
      <button @click="removeSection(sectionIndex)">x</button>
    </section>
    <textarea v-model="currentSection.userInput" cols="50" rows="4"></textarea>
    <div class="menu" v-show="showOptions">
      <div class="menu_top" @mouseleave="showOptions = true">
        <select v-model="currentSection.fontFamily">
          <option value="Times New Roman">Times New Roman</option>
          <option value="Georgia">Georgia</option>
          <option value="Arial">Arial</option>
          <option value="Comic Sans MS">Comic Sans MS</option>
          <option value="Verdana">Verdana</option>
          <option value="Courier New">Courier New</option>
        </select>

        <select v-model="currentSection.fontSize">
          <option value="1.6rem">Normal</option>
          <option value="2rem">Big</option>
          <option value="2.5rem">Bigger</option>
          <option value="3rem">Biggest</option>
        </select>

        <input type="color" v-model="currentSection.color" />

        <label>
          <input type="checkbox" v-model="currentSection.isBold" />
          <img src="../../assets/icons/bold.svg" alt="Bold icon" />
        </label>

        <label>
          <input type="checkbox" v-model="currentSection.isItalic" />
          <img src="../../assets/icons/italic.svg" alt="Italic icon" />
        </label>
      </div>

      <div class="menu_middle">
        <button @click="changeHeight(100)">
          <img src="../../assets/icons/arrow-up.svg" alt="Arrow up" />
        </button>

        <button @click="changeHeight(-100)">
          <img src="../../assets/icons/arrow-down.svg" alt="Arrow down" />
        </button>
      </div>

      <div class="menu_bottom">
        <label>
          <input
            type="radio"
            v-model="currentSection.justifyContent"
            value="flex-start"
            name="horizontal"
          />
          <img src="../../assets/icons/left.svg" alt="Left icon" />
        </label>

        <label>
          <input
            type="radio"
            v-model="currentSection.justifyContent"
            value="center"
            name="horizontal"
          />
          <img src="../../assets/icons/center.svg" alt="Center icon" />
        </label>

        <label>
          <input
            type="radio"
            v-model="currentSection.justifyContent"
            value="flex-end"
            name="horizontal"
          />
          <img src="../../assets/icons/right.svg" alt="Right icon" />
        </label>

        <label>
          <input
            type="radio"
            v-model="currentSection.alignItems"
            value="flex-start"
            name="vertical"
          />
          <img src="../../assets/icons/top.svg" alt="Top icon" />
        </label>

        <label>
          <input
            type="radio"
            v-model="currentSection.alignItems"
            value="center"
            name="vertical"
          />
          <img src="../../assets/icons/middle.svg" alt="Middle icon" />
        </label>

        <label>
          <input
            type="radio"
            v-model="currentSection.alignItems"
            value="flex-end"
            name="vertical"
          />
          <img src="../../assets/icons/bottom.svg" alt="Bottom icon" />
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import useCurrentCard from "../../composables/useCurrentCard";

export default {
  props: {
    section: Object,
    sectionIndex: Number,
  },
  setup(props) {
    const currentSection = ref({ ...props.section });
    const showOptions = ref(false);

    const { updateCard, removeSection, updateSectionOrder } = useCurrentCard();

    watch(currentSection.value, update);

    function update() {
      updateCard(props.sectionIndex, currentSection.value);
    }

    function changeHeight(value) {
      let currentHeight = currentSection.value.height;
      if (
        (currentHeight === 100 && value === -100) ||
        (currentHeight === 600 && value === 100)
      )
        return;
      currentSection.value.height = currentHeight + value;
    }

    return {
      currentSection,
      showOptions,
      removeSection,
      updateSectionOrder,
      changeHeight,
    };
  },
};
</script>

<style scoped>
img {
  max-width: 30px;
}

.menu {
  position: absolute;
  background: linear-gradient(30deg, rgb(253, 207, 207), rgb(140, 140, 236));
  padding: 10px;
  border-radius: 0 0 3px 3px;
}

.menu_top,
.menu_bottom {
  display: flex;
  align-items: center;
}

.menu_middle {
  display: flex;
}

.menu_middle img {
  height: 10px;
  padding: 10px 10px 10px 0;
}

input[type="radio"],
input[type="checkbox"] {
  opacity: 0;
  width: 0;
  height: 0;
}

input[type="radio"] + img,
input[type="checkbox"] + img {
  cursor: pointer;
}

input[type="radio"]:checked + img,
input[type="checkbox"]:checked + img,
input[type="radio"]:focus + img,
input[type="checkbox"]:focus + img {
  outline: 2px solid rgb(119, 123, 125);
}

textarea {
  border: none;
  border-radius: 3px;
  width: 100%;
  padding: 5px;
  font-weight: lighter;
  box-sizing: border-box;
}

select {
  margin-right: 5px;
}

.text_input_header {
  display: flex;
  justify-content: space-between;
  padding-bottom: 5px;
}

.text_input_header img {
  width: 15px;
  padding: 5px;
}
</style>
