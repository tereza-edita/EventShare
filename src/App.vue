<template>
  <div class="container">
    <h1>Vytvořte novou událost:</h1>
    <div class="tooltip">
      <input type="text" id="nazev" placeholder="Název události" autofocus />
      <span class="tooltiptext">Vložte název vaší události</span>
    </div>

    <div class="tooltip">
      <input type="date" id="date" v-model="date" />
      <span class="tooltiptext">Zadejte datum události</span>
    </div>

    <textarea id="popis" placeholder="Popis události" rows="5"></textarea>

    <div class="tooltip">
      <input type="text" id="venue" placeholder="Místo konání" />
      <span class="tooltiptext">Místo konání</span>
    </div>
    <div class="tooltip">
      <input type="text" id="venue" placeholder="Heslo události" />
      <span class="tooltiptext">Heslo události</span>
    </div>
    <button class="vygeneruj" @click="vypisDatum">Vytvoř událost</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      date: ""
    };
  },
  methods: {
    vypisDatum() {
      console.log(this.date);
    }
  },
  mounted() {
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    const year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    const today = year + "-" + month + "-" + day;

    this.date = today;
  }
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
}

/* Jednotlivá pole */

#nazev,
#date,
#popis,
#venue {
  padding: 8px;
  margin: 5px 0;
  width: 500px;
  font-size: 16px;
  background-color: rgb(240, 171, 181);
  border-radius: 5px;
}

::placeholder {
  color: rgb(104, 60, 66);
}

textarea {
  font-family: inherit;
  font-size: inherit;
}

/* Buttony */

.vygeneruj {
  margin: 10px 0;
  padding: 10px;
  cursor: pointer;
  width: 150px;
}

/* Tooltipu */

.tooltip {
  position: relative;
  display: inline-block;
}

.tooltiptext {
  visibility: hidden;
  width: 220px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  left: 40%;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>
