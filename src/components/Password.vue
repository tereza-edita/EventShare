<template>
  <div>
    <div v-if="isEditable" class="password-checkbox">
      <input type="checkbox" v-model="isRequired" />
      <p>Zaheslovat událost</p>
    </div>
    <div v-if="isEditable && isRequired" class="form-item">
      <input type="text" required v-model="password" />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>{{ label }}</label>
    </div>
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
      password: this.value,
      isRequired: false,
    };
  }
};
</script>
