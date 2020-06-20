<template>
  <div>
    <div v-if="isEditable" class="form-item">
      <input
        type="text"
        id="street"
        onblur="showMapResult()"
        required
        v-model="value"
      />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>{{ label }}</label>
    </div>

    <div class="container">
      <div id="mapa"></div>
    </div>

    <p v-else>{{ value }}</p>
  </div>
</template>

<script>
export default {
  name: 'Map',
  data () {
    return {}
  }
}
</script>

<style></style>
