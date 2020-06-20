<template>
  <div>
    <div v-if="isEditable" class="form-item">
      <input type="date" class="date" v-model="date" />
      <span class="highlight"></span>
      <span class="bar date-bar"></span>
      <label>{{ label }}</label>
    </div>
    <p v-else>{{ value }}</p>
  </div>
</template>

<script>
export default {
  name: 'Date',
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
  },
  mounted () {
    const date = new Date()

    let day = date.getDate()
    let month = date.getMonth() + 1
    const year = date.getFullYear()

    if (month < 10) month = '0' + month
    if (day < 10) day = '0' + day

    const today = year + '-' + month + '-' + day

    this.date = today
  }
}
</script>

<style>
.date {
  max-width: 200px;
}
</style>
