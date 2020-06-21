<template>
  <div>
    <div v-if="isEditable" class="form-item">
      <input type="text" required v-model="password" />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>{{ label }}</label>
    </div>
    <h1 v-else>{{ password }}</h1>
  </div>
</template>

<script>
export default {
  name: "PasswordComponent",
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
    password() {
      this.$emit("input", this.password);
    },
    value() {
      this.password = this.value;
    }
  },
  data() {
    return {
      password: this.value
    };
  }
};
</script>
