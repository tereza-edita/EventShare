<template>
  <div>
    <div v-if="isEditable" class="form-item">
      <input type="text" required v-model="text" />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>{{ label }}</label>
    </div>
    <h1 v-else>{{ text }}</h1>
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
    text() {
      this.$emit("input", this.text);
    },
    value() {
      this.text = this.value;
    }
  },
  data() {
    return {
      text: this.value
    };
  }
};
</script>
