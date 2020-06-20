<template>
  <div>
    <div v-if="isEditable" class="form-item">
      <textarea type="text" id="description" required rows="5" v-model="value">
      </textarea>
      <span class="highlight"></span>
      <span class="bar description-bar"></span>
      <label>{{ label }}</label>
    </div>
    <p v-else>{{ value }}</p>
  </div>
</template>

<script>
export default {
  name: 'Textarea',
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
      console.log(this.value)
    }
  },
  data () {
    return {}
  }
}
</script>

<style>
textarea {
  width: 100%;
  border: none;
}

textarea:focus {
  border: none;
  outline: none;
}
</style>
