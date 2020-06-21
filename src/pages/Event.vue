<template>
  <div class="site">
    <MyTemplate :isEditable="false" v-bind="event" />
    <h1>Můj text</h1>
  </div>
</template>

<script>
import db from "../firebase/db";
import FirstTemplate from "../templates/FirstTemplate";

export default {
  name: "Event",
  data() {
    return {
      event: null
    };
  },
  components: {
    MyTemplate: FirstTemplate
  },
  firestore() {
    return {
      event: db.collection("events").doc(this.$route.params.id)
    };
  }
};
</script>
