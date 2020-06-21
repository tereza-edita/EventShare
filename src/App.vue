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
  background: linear-gradient(#76a075, #8ba075) no-repeat;
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

h4 {
  color: #5264ae;
}

form {
  margin: auto;
  width: 100%;
}

.form-item {
  position: relative;
  margin-bottom: 28px;
  width: 100%;
}

input {
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  font-family: "Roboto", sans-serif;
}

textarea {
  width: 100%;
  border: none;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  resize: vertical;
  min-height: 45px;
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
  position: relative;
}

.homepageBtn:after {
  content: "";
  top: 0;
  left: 0;
  transform: translateX(100%);
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  animation: slide 3s infinite 1s;
  /* border: 1px solid orange; */

  /* 
  CSS Gradient - complete browser support from http://www.colorzilla.com/gradient-editor/ 
  */
  background: -moz-linear-gradient(
    left,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.8) 50%,
    rgba(128, 186, 232, 0) 99%,
    rgba(125, 185, 232, 0) 100%
  ); /* FF3.6+ */
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(0%, rgba(255, 255, 255, 0)),
    color-stop(50%, rgba(255, 255, 255, 0.8)),
    color-stop(99%, rgba(128, 186, 232, 0)),
    color-stop(100%, rgba(125, 185, 232, 0))
  ); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(
    left,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.8) 50%,
    rgba(128, 186, 232, 0) 99%,
    rgba(125, 185, 232, 0) 100%
  ); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(
    left,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.8) 50%,
    rgba(128, 186, 232, 0) 99%,
    rgba(125, 185, 232, 0) 100%
  ); /* Opera 11.10+ */
  background: -ms-linear-gradient(
    left,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.8) 50%,
    rgba(128, 186, 232, 0) 99%,
    rgba(125, 185, 232, 0) 100%
  ); /* IE10+ */
}

@keyframes slide {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.create,
.homepageBtn {
  margin: 0px 0 30px 0;
  padding: 10px;
  cursor: pointer;
  min-width: 150px;
  background-color: #e79c2a;
  border: none;
  box-shadow: 0px 10px 13px -7px #000000;
  font-size: 0.9rem;
  font-weight: 700;
}

.homepageBtn:hover,
.create:hover {
  background-color: #6b8f6a;
}

.homepageBtn {
  padding: 17px;
  margin: 10px 0 30px 0;
  position: relative;
  overflow: hidden;
}

.homepageLink {
  text-decoration: none;
}

#link {
  display: flex;
  margin: 30px 0;
}

#link > input {
  font-size: 14px;
}

/* Pages */
.site {
  display: flex;
  justify-content: center;
  padding: 15px 15px;
}

/* Components */
.datetime {
  display: flex;
  flex-wrap: wrap;
}

.datetime > div {
  margin-right: 1rem;
}

.date {
  max-width: 180px;
}

.time {
  max-width: 180px;
}

.date-display,
.time-display,
.location-display,
.description-display {
  font-size: 18px;
}

.map {
  width: 70vw;
  max-width: 400px;
  height: 45vh;
  border: 1px solid black;
}

.mapRender {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}

textarea {
  width: 100%;
  border: none;
}

textarea:focus {
  border: none;
  outline: none;
}

/* HOMEPAGE */

.homepageP {
  font-weight: 200;
  text-align: justify;
  margin: 0 15px 20px 15px;
}

.post {
  display: flex;
  align-items: center;
  margin-bottom: 0.7rem;
  padding-left: 1.5rem;
}
.heroPost {
  display: flex;
  justify-content: space-between;
  margin: 1.5rem 0 1rem 0;
  margin-left: 10px;
  margin-right: 10px;
}

.heroTitle {
  text-align: center;
}

.heroImg {
  width: 23%;
}

.homepageCheckbox {
  width: 2.5rem;
  height: auto;
}

.homepageBody {
  margin-left: 1rem;
}
</style>
