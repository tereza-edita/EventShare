<template>
  <div>
    <MyTemplate v-for="(event, index) in events" :key="index" :isEditable="false" v-bind="event" />
  </div>
</template>

<script>
import db from "../db.js";
import FirstTemplate from "../templates/FirstTemplate";

export default {
  name: "Event",
  data() {
    return {
      events: []
    };
  },
  components: {
    MyTemplate: FirstTemplate
  },
  firestore: {
    events: db.collection("events")
  }
};
</script>
