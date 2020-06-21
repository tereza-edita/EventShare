<template>
  <div class="site">
    <MyTemplate v-if="displayContent" :isEditable="false" v-bind="event" />
  </div>
</template>

<script>
import db from "../firebase/db";
import FirstTemplate from "../templates/FirstTemplate";

export default {
  name: "Event",
  data() {
    return {
      event: null,
      displayContent: false
    };
  },
  components: {
    MyTemplate: FirstTemplate
  },
  firestore() {
    const event = db.collection("events").doc(this.$route.params.id);
    event.onSnapshot(doc => {
      const eventData = doc.data();

      if (eventData.password !== "") {
        let password;
        do {
          password = prompt(`Zadejte heslo k události "${eventData.title}":`);
        } while (password !== eventData.password);
      }

      this.displayContent = true;
    });
    return {
      event: event
    };
  }
};
</script>
