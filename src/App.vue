<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  mounted() {
    this.$router.push("/");
  },
};
</script>
