<template>
  <div>
    <div v-if="isEditable" class="form-item">
      <input type="text" required v-model="value" />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>{{ label }}</label>
    </div>
    <div class="event" v-else>{{ value }}</div>
  </div>
</template>

<script>
export default {
  name: "TextComponent",
  props: {
    value: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    isEditable: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    value() {
      this.$emit("input", this.value);
      console.log(this.value);
    }
  },
  data() {
    return {};
  }
};
</script>
