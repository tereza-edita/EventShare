<template>
  <div>
    <div v-if="isEditable" class="form-item">
      <input type="text" required v-model="value" />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>{{ label }}</label>
    </div>
    <p v-else>{{ value }}</p>
  </div>
</template>

<script>
export default {
  name: 'TextComponent',
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
    value () {
      this.$emit('input', this.value)
    }
  },
  data () {
    return {}
  }
}
</script>
