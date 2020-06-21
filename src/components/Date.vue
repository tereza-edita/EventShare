<template>
  <div>
    <div v-if="isEditable" class="form-item">
      <input type="date" class="date" v-model="date" />
      <span class="highlight"></span>
      <span class="bar date-bar"></span>
      <label>{{ label }}</label>
    </div>
    <div v-else>
      <h4>Kdy?</h4>
      <p class="date-display">{{ date | formatDate }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DateComponent",
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
    date() {
      this.$emit("input", this.date);
    },
    value() {
      this.date = this.value;
    }
  },
  filters: {
    formatDate(date) {
      if (!date) return "";
      const [year, month, day] = date.split("-");
      return day + "." + month + "." + year;
    }
  },
  data() {
    return {
      date: this.value
    };
  }
};
</script>
