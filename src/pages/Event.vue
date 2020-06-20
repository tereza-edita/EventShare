<template>
  <div>
    <MyTemplate :isEditable="false" v-bind="event" />
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
      }
  }
};
</script>
