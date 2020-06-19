<template>
  <div class="container">
    <h1>Vytvořte novou událost:</h1>

    <form>
      <MyText label="Název události" v-model="title" />

      <div class="form-item">
        <input type="date" id="date" v-model="date" />
        <span class="highlight"></span>
        <span class="bar date-bar"></span>
        <label>Datum</label>
      </div>

      <div class="form-item">
        <textarea type="text" id="description" required rows="5"></textarea>
        <span class="highlight"></span>
        <span class="bar description-bar"></span>
        <label>Popis události</label>
      </div>

      <div class="form-item">
        <input type="text" id="venue" required />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Místo konání</label>
      </div>

      <div class="form-item">
        <input type="text" id="password" required />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Heslo pro vstup</label>
      </div>
    </form>
    <button class="create" @click="saveEvent">Vytvoř událost</button>
  </div>
</template>

<script>
import db from '../db.js'
import Text from '../components/Text'

export default {
  name: 'Form',
  data () {
    return {
      date: '',
      title: 'test'
    }
  },
  components: {
    MyText: Text
  },
  methods: {
    saveEvent () {
      db.collection('events').add({
        title: this.title
      })

      this.$router.push('event')
    }
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
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

h1 {
  text-align: center;
}

.form-item {
  position: relative;
  margin-bottom: 45px;
}

input {
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
}

textarea {
  width: 100%;
  border: none;
}

textarea:focus {
  border: none;
  outline: none;
}

input:focus {
  outline: none;
}

#date {
  max-width: 200px;
}

/* LABEL ======================================= */
label {
  color: #999;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.5s ease all;
  -moz-transition: 0.5s ease all;
  -webkit-transition: 0.5s ease all;
}

/* active state */
input:focus ~ label,
input:valid ~ label,
textarea:focus ~ label,
textarea:valid ~ label {
  top: -20px;
  font-size: 14px;
  color: #5264ae;
}

/* BOTTOM BARS ================================= */
.bar {
  position: relative;
  display: block;
  width: 100%;
}

.date-bar {
  max-width: 200px;
}

.description-bar:before,
.description-bar:after {
  bottom: 1px !important;
}

.bar:before,
.bar:after {
  content: '';
  height: 2px;
  width: 0;
  bottom: 0px;
  position: absolute;
  background: #06d7c1;
  transition: 0.3s ease all;
  -moz-transition: 0.3s ease all;
  -webkit-transition: 0.3s ease all;
}
.bar:before {
  left: 50%;
}
.bar:after {
  right: 50%;
}

/* active state */
input:focus ~ .bar:before,
input:focus ~ .bar:after,
textarea:focus ~ .bar:before,
textarea:focus ~ .bar:after {
  width: 50%;
}

/* HIGHLIGHTER ================================== */
.highlight {
  position: absolute;
  height: 60%;
  width: 100px;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
}

/* active state */
input:focus ~ .highlight,
textarea:focus ~ .highlight {
  -webkit-animation: inputHighlighter 0.5s ease;
  -moz-animation: inputHighlighter 0.5s ease;
  animation: inputHighlighter 0.5s ease;
}

/* ANIMATIONS ================ */
@-webkit-keyframes inputHighlighter {
  from {
    background: #5264ae;
  }
  to {
    width: 0;
    background: transparent;
  }
}
@-moz-keyframes inputHighlighter {
  from {
    background: #5264ae;
  }
  to {
    width: 0;
    background: transparent;
  }
}
@keyframes inputHighlighter {
  from {
    background: #5264ae;
  }
  to {
    width: 0;
    background: transparent;
  }
}

/* Buttony */

.create {
  margin: 10px 0;
  padding: 10px;
  cursor: pointer;
  width: 150px;
  background-color: #06d7c1;
  border-radius: 5px;
}
</style>
