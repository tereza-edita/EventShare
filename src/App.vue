<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  font-family: "Roboto", sans-serif;
  margin: 0;
  background: linear-gradient(#eacda3, #d6ae7b) no-repeat;
  min-height: 100vh;
}

.container {
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  background-color: whitesmoke;
  box-shadow: 1px 0px 18px -3px #000000;
  width: 100%;
  max-width: 500px;
}

h1 {
  text-align: center;
  margin: 30px 0;
}

form {
  margin: auto;
  width: 100%;
}

.form-item {
  position: relative;
  margin-bottom: 35px;
  width: 100%;
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
  font-size: 18px;
}

textarea:focus {
  border: none;
  outline: none;
}

input:focus {
  outline: none;
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
  content: "";
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

.buttonDiv {
  display: flex;
  justify-content: center;
}

.create {
  margin: -20px 0 20px 0;
  padding: 10px;
  cursor: pointer;
  width: 150px;
  background-color: #d6ae7b;
  border: none;
  box-shadow: 0px 10px 13px -7px #000000;
}

/* Pages */
.site {
  display: flex;
  justify-content: center;
  padding: 10px 5px;
}

/* Components */
.datetime {
  display: flex;
}

.datetime .form-item {
  margin-right: 50px;
}

.date {
  max-width: 180px;
}

.time {
  max-width: 180px;
}

.mapa {
  width: 60vw;
  height: 50vh;
  border: 1px solid black;
}

.mapRender {
  display: flex;
  justify-content: center;
  margin-bottom: 45px;
}

textarea {
  width: 100%;
  border: none;
}

textarea:focus {
  border: none;
  outline: none;
}
</style>
