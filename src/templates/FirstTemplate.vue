<template>
  <div class="container">
    <h1 v-if="isEditable">Vytvořte novou událost:</h1>
    <form @submit.prevent="saveEvent">
      <MyText label="Název události" :isEditable="isEditable" v-model="event.title" />
      <div class="datetime">
        <MyDate label="Datum" :isEditable="isEditable" v-model="event.date" />
        <MyTime label="Čas" :isEditable="isEditable" v-model="event.time" />
      </div>
      <MyTextarea label="Popis události" :isEditable="isEditable" v-model="event.description" />
      <MyMap label="Místo konání" :isEditable="isEditable" v-model="event.venue" />
      <MyText label="Heslo pro vstup" :isEditable="isEditable" v-model="event.password" />
      <div class="buttonDiv">
        <button class="create" type="submit" v-if="isEditable">Vytvoř událost</button>
      </div>
    </form>
  </div>
</template>

<script>
import db from "../firebase/db";
import TextComponent from "../components/Text";
import DateComponent from "../components/Date";
import TimeComponent from "../components/Time";
import TextareaComponent from "../components/Textarea";
import MapComponent from "../components/Map";

export default {
  name: "FirstTemplate",
  data() {
    return {
      event: {
        title: "",
        date: "",
        time: "",
        description: "",
        venue: "",
        password: ""
      }
    };
  },
  props: {
    isEditable: {
      type: Boolean,
      required: true
    },
    title: String,
    date: String,
    time: String,
    description: String,
    venue: String,
    password: String
  },
  watch: {
    title() {
      this.event.title = this.title;
    },
    date() {
      this.event.date = this.date;
    },
    time() {
      this.event.date = this.time;
    },
    description() {
      this.event.description = this.description;
    },
    venue() {
      this.event.venue = this.venue;
    },
    password() {
      this.event.password = this.password;
    }
  },
  components: {
    MyText: TextComponent,
    MyDate: DateComponent,
    MyTime: TimeComponent,
    MyTextarea: TextareaComponent,
    MyMap: MapComponent
  },
  methods: {
    saveEvent() {
      db.collection("events")
        .add(this.event)
        .then(docRef => {
          docRef.update({ id: docRef.id });
          this.$router.push(`event/${docRef.id}`);
        });
    }
  },
  mounted() {
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    const year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    const today = year + "-" + month + "-" + day;

    this.event.date = today;

    let hour = date.getHours();
    let minute = date.getMinutes();

    if (hour < 10) hour = "0" + hour;
    if (minute < 10) minute = "0" + minute;

    const now = hour + ":" + minute;

    this.event.time = now;
  }
};
</script>
