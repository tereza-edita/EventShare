<template>
  <div>
    <h1>Vytvořte novou událost:</h1>
    <MyTemplate :isEditable="true" v-bind="event" />
  </div>
</template>

<script>
import FirstTemplate from "../templates/FirstTemplate";

export default {
  name: "Edit",
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
  components: {
    MyTemplate: FirstTemplate
  }
};
</script>
