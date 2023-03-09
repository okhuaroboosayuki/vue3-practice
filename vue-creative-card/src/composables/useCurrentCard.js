import { onMounted, ref, watch } from "vue";
import useCards from "./useCards";
import { useRoute } from "vue-router";
import { v4 as uuid4 } from "uuid";

export default function useCurrentCard() {
  const { allCards } = useCards();
  const route = useRoute();

  const selectedCard = ref({});
  const selectedPage = ref({});

  function getPageIndex() {
    return selectedCard.value.pages.findIndex(
      (page) => page.name === route.params.page
    );
  }

  function getSelectedPage() {
    selectedPage.value = selectedCard.value.pages[getPageIndex()];
  }

  onMounted(getSelectedPage);

  watch(
    () => route.params.page,
    () => {
      getSelectedPage();
    }
  );

  function updateCard(sectionIndex, data) {
    selectedCard.value.pages[getPageIndex()].sections[sectionIndex] = data;
  }

  [selectedCard.value] = allCards.value.filter(
    (card) => card.id === Number(route.params.id)
  );

  // a click fn to add new sections to the card preview
  function addSection() {
    if (selectedPage.value.sections.length >= 4) return;

    const newSection = {
      // uuid creates a unique id for each section
      id: uuid4(),
      userInput: "Enter your text here...",
      height: 200,
      color: "#9f9f32",
      fontFamily: "Verdana",
      fontSize: "2.5rem",
      isItalic: true,
      isBold: false,
      justifyContent: "center",
      alignItems: "center",
    };

    selectedCard.value.pages[getPageIndex()].sections.push(newSection);
  }

  // to remove a section when editing cards
  function removeSection(sectionIndex) {
    selectedCard.value.pages[getPageIndex()].sections.splice(sectionIndex, 1);
  }

  // A fn to update the order in which the sections appear in the card preview
  function updateSectionOrder(sectionIndex, direction) {
    const arr = selectedCard.value.pages[getPageIndex()].sections;
    if (
      selectedCard.value.pages[getPageIndex()].sections[sectionIndex + direction] === undefined
    )
      return;
    [arr[sectionIndex], arr[sectionIndex + direction]] = [arr[sectionIndex + direction], arr[sectionIndex],];
  }

  // for updating image
  function updateImage(url) {
    selectedCard.value.pages[getPageIndex()].background = url;
    selectedCard.value.pages[getPageIndex()].backgroundPosition = 'center';
  }

  // to reposition images in cards
  function repositionImage(position) {
    selectedCard.value.pages[getPageIndex()].backgroundPosition = position;
  }

  // for removing image
  function removeImage() {
    selectedCard.value.pages[getPageIndex()].background = '';
  }

  return {
    selectedCard,
    selectedPage,
    updateCard,
    addSection,
    removeSection,
    updateSectionOrder,
    updateImage,
    repositionImage,
    removeImage,
  };
}
