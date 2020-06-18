<template>
  <main>
    <h1>Moje udalost</h1>
    <p>{{ JSON.stringify(events) }}</p>
  </main>
</template>

<script>
import db from "./db.js";

export default {
  name: "Event",
  data() {
    return {
      events: [],
    };
  },
  firestore: {
    events: db.collection("events"),
  },
};
</script>
