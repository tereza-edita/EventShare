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
      event: {
        date: "",
        title: "",
        description: "",
        venue: "praha",
        password: ""
      }
    };
  },
  components: {
    MyTemplate: FirstTemplate
  },
  updated() {
    console.log(this.$route.params.id);
    db.collection("events")
      .doc(this.$route.params.id)
      .get()
      .then(snapshot => {
        const document = snapshot.data();
        this.$set(this.event, "title", document.title);
        console.log(this.event);
      });
  }
};
</script>
