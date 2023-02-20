<template>
  <article
    v-show="Math.sign(daysLeft) !== -1 || showPastEvents"
    :style="{
      background: event.background,
      color: changeContrast ? '#454444' : 'whitesmoke',
    }"
  >
    <div class="data">
      <h3 class="name">{{ event.name }}</h3>
      <p class="details">{{ event.details }}</p>
    </div>
    <div class="countdown">
      <div class="remove_btn_wrapper">
        <!-- .stop prevents event propagation -->
        <button class="remove_btn" @click.stop="removeEvent()">&#10060;</button>
      </div>
      <p v-if="daysLeft === 0">Today!</p>
      <p v-else>
        {{ Math.abs(daysLeft) }}
        <br />
        <small>{{ daysLeftString }}</small>
      </p>
    </div>
  </article>
</template>

<script>
export default {
  name: Event,
  // inheritAttrs is a boolean that determines if we want to pass all the attributes to a child component from the parent component
  inheritAttrs: false,
  // mounted() {
    // attrs is an object that contains all the attributes that are not props. this is useful when we want to pass all the attributes to a child component
  //   console.log(this.$attrs);
  // },
  // props: ["event", "daysLeft", "showPastEvents"],
  props: {
    event: {
      // PROPS VALIDATION
      // if we are validating a string or object
      type: Object,
      required: true,
      // validator: function(value) {
      //   return ["Birthday", "Christmas"].includes(value.name);
      // },
    },
    daysLeft: {
      type: Number,
      required: true,
      // default: funtion() {
      //   return {}
      // }
    },
    showPastEvents: {
      type: Boolean,
    },
  },
  emits: ["remove-event"],
  methods: {
    removeEvent() {
      this.$emit("remove-event", this.event);
    },
  },
  // initially used methods to set daysLeftString function, but it is not dynamic as it does not change except the user reloads the page; so computed was used instead. This is useful for reactive data like this.daysLeft. the computed lifecycle hook takes in a function that returns a value that is used in the template. the computed lifecycle hook is also cached, so it is only computed when the data it is watching for changes. the computed lifecycle hook should not be used to directly mutate state or to perform asynchronous operations. it can observe multiple data sources and return a new value based off other data. it is also useful for debugging and logging purposes.
  computed: {
    daysLeftString() {
      const dayOrDays = this.daysLeft === 1 ? "day" : "days";
      const leftOrAgo = Math.sign(this.daysLeft) !== -1 ? "left" : "ago";
      return dayOrDays + " " + leftOrAgo;
    },

    changeContrast() {
      const lowConstrast = ["#f9f970", "#68EE94"];
      return lowConstrast.includes(this.event.background);
    },
  },
};
</script>

<style scoped>
article {
  background-color: lightslategray;
  display: flex;
  align-items: center;
  border-radius: 1rem;
  margin: 1rem 0;
  padding: 0.2rem 1rem;
  color: whitesmoke;
  font-weight: 300;
}

.data {
  flex: 3;
}

.countdown {
  flex: 1;
  text-align: center;
  font-size: 1.6rem;
  border-left: 1px solid;
}

.name {
  font-size: 1.8rem;
}

.details {
  font-size: 1.6rem;
}

.remove_btn_wrapper {
  text-align: right;
}

.remove_btn {
  background-color: transparent;
  border: none;
  cursor: pointer;
}
</style>
