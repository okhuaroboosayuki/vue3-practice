<template>
  <teleport to="#modal">
    <AddEvent v-if="addEvent" @close-form="closeForm()" @add-new-event="addNewEvent($event)"
      @update-event="updateEvent($event)" :currentEvent="currrentEvent" />
  </teleport>

  <div class="options">
    <button class="show_events" @click="showPastEvents = !showPastEvents">
      {{ showPastEvents ? "Hide" : "Show" }} Past Events
    </button>
    <button class="set_theme" @click="grayModeSet = !grayModeSet">{{ grayModeSet ? '&#9788;' : '&#9789;' }}</button>
    <button class="add_event" @click="addEvent = !addEvent">&#43;</button>
  </div>

  <ul>
    <li v-for="event in orderEvents" :key="event.id" @click="editEventForm(event)">
    <!-- non-props attributes => :style -->
      <Event :style="grayModeSet ? grayMode : ''" :event="event" :daysLeft="daysLeft(event)" :showPastEvents="showPastEvents"
        @remove-event="removeEvent($event)" />
    </li>
  </ul>
</template>

<script>
const eventData = [
  {
    id: 1,
    name: "Certification",
    details: "I am a graduate!",
    date: "2016-06-30",
    background: "#F34949",
  },
  {
    id: 2,
    name: "Annual Leave Starts",
    details: "wooohoo!!!",
    date: "2023-02-15",
    background: "#f9f970",
  },
  {
    id: 3,
    name: "Annual Leave Ends",
    details: "It's been fun!",
    date: "2023-02-28",
    background: "#7AD3F0",
  },
  {
    id: 4,
    name: "Birthday",
    details: "My birthday party",
    date: "2023-12-29",
    background: "#F07AEC",
  },
  {
    id: 5,
    name: "Christmas",
    details: "It's not really Christmas",
    date: "2023-02-13",
    background: "#EB9A0F",
  },
  {
    id: 6,
    name: "Job Interview",
    details: "Top notch",
    date: "2023-03-06",
    background: "#68EE94",
  },
];

import Event from "./components/Event.vue";
import AddEvent from "./components/AddEvent.vue";

export default {
  name: "App",
  components: {
    Event,
    AddEvent,
  },

  data() {
    return {
      events: eventData,
      grayModeSet: false,
      grayMode: {
        background: 'lightslategray',
        color: '#454444'
      },
      showPastEvents: true,
      addEvent: false,
      currrentEvent: {},
    };
  },

  methods: {
    findEventIndex(id) {
      return this.events.findIndex((el) => el.id === id);
    },
    removeEvent(event) {
      this.events.splice(this.findEventIndex(event.id), 1);
    },
    closeForm() {
      this.addEvent = !this.addEvent;
      this.currrentEvent = {};
    },
    updateEvent(event) {
      this.events[this.findEventIndex(event.id)] = event;
    },
    editEventForm(event) {
      this.currrentEvent = event || {};
      this.addEvent = true;
    },
    addNewEvent(event) {
      event.id = this.events.length + 1;
      this.events.push(event);
      // this.addEvent = false;
    },
    daysLeft(event) {
      const Time = Date.parse(event.date) - Date.now();
      const Days = Math.ceil(Time / (1000 * 60 * 60 * 24));
      return Days;
    },
  },

  computed: {
    orderEvents() {
      const sortEvents = this.events;
      return sortEvents.sort((a, b) => (a.date > b.date ? 1 : -1));
    },
  },
  //use watch lifecycle hook to watch for changes in the app; the Watch hook takes in an option of deep and immediate both set to true, and a handler function that runs anytime what the watch hook is watching for changes. the deep option watches for changes in the object and the immediate option watches for changes in the object as soon as the app loads not just when the user reloads the page. the watch hook is useful for debugging and logging purposes. it can be used to directly mutate state or to perform asynchronous operations. it can be used for logging and debugging purposes.
  // watch: {
  //   events: {
  //     deep: true,
  //     immediate: true,
  //     handler(val) {
  //       console.log(val);
  //     },
  //   },
  // },
};
</script>

<style>
#app {
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 600px;
  margin: 0 auto;
}

.options {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1.2rem 0;
  padding: 1rem 0;
  border-bottom: 0.5px solid #000;
  position: sticky;
  top: 0;
  z-index: 300;
  background: #fff;
}

ul {
  padding: 0;
}

li {
  list-style: none;
}

button,
li {
  cursor: pointer;
}

.show_events, .set_theme{
  background: #fff;
  outline: none;
  border: .5px solid grey;
  border-radius: .5rem;
  font-size: 1.5rem;
  color: #000;
}

.show_events{
  padding: 1rem .5rem;
}

.set_theme{
  padding: 1rem 2rem;
}

.show_events:hover, .set_theme:hover{
  border: 1px solid #000;
}

.show_events:hover{
  font-size: 1.495rem;
  color: #242424;
}

.add_event{
  background: #fff;
  border: none;
  font-size: 2rem;
  color: #000;
}
</style>
