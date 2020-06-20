<template>
  <MyTemplate :isEditable="true" />
</template>

<script>
import FirstTemplate from "../templates/FirstTemplate";

export default {
  name: "Edit",
  data() {
    return {};
  },
  components: {
    MyTemplate: FirstTemplate
  }
};
</script>
