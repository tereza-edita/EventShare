<template>
  <div class="container">
    <h1 v-if="isEditable">Vytvořte novou událost:</h1>
    <form>
      <MyText label="Název události" :isEditable="isEditable" v-model="event.title" />
      <MyDate label="Datum" :isEditable="isEditable" v-model="event.date" />
      <MyTextarea label="Popis události" :isEditable="isEditable" v-model="event.description" />
      <MyMap label="Místo konání" :isEditable="isEditable" v-model="event.venue" />
      <MyText label="Heslo pro vstup" :isEditable="isEditable" v-model="event.password" />
      <div class="buttonDiv">
        <button class="create" type="submit" v-if="isEditable" @click="saveEvent">Vytvoř událost</button>
      </div>
    </form>
  </div>
</template>

<script>
import db from "../firebase/db";
import TextComponent from "../components/Text";
import DateComponent from "../components/Date";
import TextareaComponent from "../components/Textarea";
import MapComponent from "../components/Map";

export default {
  name: "FirstTemplate",
  data() {
    return {
      event: {
        date: "",
        title: "",
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
    date: String,
    title: String,
    description: String,
    venue: String,
    password: String
  },
  watch: {
    date(){
        this.event.date = this.date;
    },
    title(){
        this.event.title = this.title;
    },
    description(){
        this.event.description = this.description;
    },
    venue(){
        this.event.venue = this.venue;
    },
    password(){
        this.event.password = this.password;
    },
  },
  components: {
    MyText: TextComponent,
    MyDate: DateComponent,
    MyTextarea: TextareaComponent,
    MyMap: MapComponent
  },
  methods: {
    saveEvent() {
      db.collection("events")
        .add(this.event)
        .then(docRef => {
          docRef.update({ id: docRef.id });
        });

      this.$router.push("event");
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
  }
};
</script>
