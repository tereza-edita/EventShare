<template>
  <div>
    <div v-if="isEditable" class="form-item">
      <input type="time" class="time" v-model="time" />
      <span class="highlight"></span>
      <span class="bar date-bar"></span>
      <label>{{ label }}</label>
    </div>
    <div v-else>
      <h4>Čas</h4>
      <p class="time-display">{{ time }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimeComponent",
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
    time() {
      this.$emit("input", this.time);
    },
    value() {
      this.time = this.value;
    }
  },
  data() {
    return {
      time: this.value
    };
  }
};
</script>
