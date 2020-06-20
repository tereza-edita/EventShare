<template>
  <div class="container">
    <form>
      <MyText label="Název události" :isEditable="isEditable" v-model="event.title" />
      <MyDate label="Datum" :isEditable="isEditable" v-model="event.date" />
      <MyTextarea label="Popis události" :isEditable="isEditable" v-model="event.description" />
      <MyMap label="Místo konání" :isEditable="isEditable" v-model="event.venue" />
      <MyText label="Heslo pro vstup" :isEditable="isEditable" v-model="event.password" />
      <button class="create" type="submit" v-if="isEditable" @click="saveEvent">Vytvoř událost</button>
    </form>
  </div>
</template>

<script>
import db from "../db.js";
import TextComponent from "../components/Text";
import DateComponent from "../components/Date";
import TextareaComponent from "../components/Textarea";
import MapComponent from "../components/Map";

export default {
  name: "FirstTemplate",
  data() {
    return {
      event: {
        date: this.date,
        title: this.title,
        description: this.description,
        venue: this.venue,
        password: this.password
      }
    };
  },
  props: {
    isEditable: {
      type: Boolean,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    venue: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
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
  }
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

h1 {
  text-align: center;
}

.form-item {
  position: relative;
  margin-bottom: 45px;
}

input {
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
}

textarea {
  width: 100%;
  border: none;
}

textarea:focus {
  border: none;
  outline: none;
}

input:focus {
  outline: none;
}

/* LABEL ======================================= */
label {
  color: #999;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.5s ease all;
  -moz-transition: 0.5s ease all;
  -webkit-transition: 0.5s ease all;
}

/* active state */
input:focus ~ label,
input:valid ~ label,
textarea:focus ~ label,
textarea:valid ~ label {
  top: -20px;
  font-size: 14px;
  color: #5264ae;
}

/* BOTTOM BARS ================================= */
.bar {
  position: relative;
  display: block;
  width: 100%;
}

.date-bar {
  max-width: 200px;
}

.description-bar:before,
.description-bar:after {
  bottom: 1px !important;
}

.bar:before,
.bar:after {
  content: "";
  height: 2px;
  width: 0;
  bottom: 0px;
  position: absolute;
  background: #06d7c1;
  transition: 0.3s ease all;
  -moz-transition: 0.3s ease all;
  -webkit-transition: 0.3s ease all;
}
.bar:before {
  left: 50%;
}
.bar:after {
  right: 50%;
}

/* active state */
input:focus ~ .bar:before,
input:focus ~ .bar:after,
textarea:focus ~ .bar:before,
textarea:focus ~ .bar:after {
  width: 50%;
}

/* HIGHLIGHTER ================================== */
.highlight {
  position: absolute;
  height: 60%;
  width: 100px;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
}

/* active state */
input:focus ~ .highlight,
textarea:focus ~ .highlight {
  -webkit-animation: inputHighlighter 0.5s ease;
  -moz-animation: inputHighlighter 0.5s ease;
  animation: inputHighlighter 0.5s ease;
}

/* ANIMATIONS ================ */
@-webkit-keyframes inputHighlighter {
  from {
    background: #5264ae;
  }
  to {
    width: 0;
    background: transparent;
  }
}
@-moz-keyframes inputHighlighter {
  from {
    background: #5264ae;
  }
  to {
    width: 0;
    background: transparent;
  }
}
@keyframes inputHighlighter {
  from {
    background: #5264ae;
  }
  to {
    width: 0;
    background: transparent;
  }
}

/* Buttony */

.create {
  margin: 10px 0;
  padding: 10px;
  cursor: pointer;
  width: 150px;
  background-color: #06d7c1;
  border-radius: 5px;
}
</style>
