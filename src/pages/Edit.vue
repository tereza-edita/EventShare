<template>
  <div class="site">
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

<style scoped>
.site {
  display: flex;
  justify-content: center;
  margin: 10px 5px;
}
</style>
