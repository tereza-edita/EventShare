<template>
  <div>
    <div v-if="isEditable" class="form-item">
      <textarea type="text" required rows="5" v-model="text"></textarea>
      <span class="highlight"></span>
      <span class="bar description-bar"></span>
      <label>{{ label }}</label>
    </div>
    <div v-else>
      <h4 class="eventh4">Popis události</h4>
      <p class="description-display">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Textarea",
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
