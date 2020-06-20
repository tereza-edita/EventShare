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
      event: null
    };
  },
  components: {
    MyTemplate: FirstTemplate
  }
};
</script>
