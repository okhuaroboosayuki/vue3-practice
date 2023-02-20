<template>
    <div class="form_wrapper">
        <!-- keyboard events; check https://vuejs.org/guide/essentials/event-handling.html#key-modifiers for more information-->
        <form @keyup.enter.prevent="validateForm()">
            <p v-if="errors.length > 0" class="error">
                <ul>
                    <li v-for="error in errors" :key="error">{{ error }}</li>
                </ul>
            </p>
            <span class="close" @click="$emit('close-form')">&#10060;</span>
            <div>
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="event.name" />
            </div>
            <div>
                <label for="details">Details</label>
                <input type="text" id="details" v-model="event.details" />
            </div>
            <div>
                <label for="date">Date</label>
                <input type="date" id="date" v-model="event.date" />
            </div>
            <div>
                <label for="background">Background</label>
                <select id="background" v-model="event.background">
                    <option value="#F34949">Red</option>
                    <option value="#f9f970">Yellow</option>
                    <option value="#7AD3F0">Blue</option>
                    <option value="#F07AEC">Pink</option>
                    <option value="#EB9A0F">Orange</option>
                    <option value="#68EE94">Green</option>
                    <option value="#997AF0">Purple</option>
                </select>
            </div>
            <div>
                <button v-if="currentEvent.id" @click.prevent="validateForm('update')" type="submit">Update</button>
                <button v-else @click.prevent="validateForm('add')" type="submit">Add Event</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "AddEvent",
    // props: ["currentEvent"],
    props: {
        currentEvent: {
            type: Object,
        }
    },
    emits: ["close-form", "add-new-event", "update-event"],
    mounted() {
        this.event = this.currentEvent;
    },
    data() {
        return {
            event: {},
            errors: [],
        };
    },

    methods: {
        addDataToEvent() {
            this.$emit("add-new-event", this.event);
            this.$emit("close-form");
        },
        updateEvent() {
            this.$emit("update-event", this.event);
            this.$emit("close-form");
        },
        validateForm(type) {
            this.errors = [];
            if (!this.event.name) {
                this.errors.push("Name is required.");
            }
            if (!this.event.details) {
                this.errors.push("Details is required.");
            }
            if (!this.event.date) {
                this.errors.push("Date is required.");
            }
            if (!this.event.background) {
                this.errors.push("Background is required.");
            }
            //has error, do not add event
            if (this.errors.length > 0) {
                return;
            }
            //no error, add event
            if (type === 'add')this.addDataToEvent();
            else this.updateEvent();
        },
    },
};
</script>

<style scoped>
.close {
    align-self: flex-end;
    cursor: pointer;
}

.error{
    color: red;
    font-size: .8rem;
}

.form_wrapper {
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 300;
    height: 170vh;
}

form {
    background-color: white;
    padding: 1.5rem;
    border-radius: 0.3rem;
    min-width: 60vw;
    min-height: 40vh;
    display: flex;
    margin-top: -30rem;
    flex-direction: column;
}

form>div {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    font-size: 1.6rem;
}

form input,
select {
    margin: 0.6rem 0;
    padding: 0.6rem 1rem;
    border: 1px solid lightgray;
    outline: none;
    border-radius: 0.3rem;
}

form input:focus {
    outline: 0.5px solid rgb(36, 36, 36);
}

form button {
    background-color: #000;
    color: #fff;
    width: 100px;
    border: 0.5px solid #000;
    padding: 0.6rem;
    border-radius: 0.3rem;
    font-size: 1rem;
}

form button:hover {
    color: #000;
    background-color: #fff;
    border: 0.5px solid #000;
}

label {
    color: darkslategrey;
}
</style>
