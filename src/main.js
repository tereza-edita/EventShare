import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Form from './pages/Form.vue'
import Event from './pages/Event.vue'
import './index.html'
import { firestorePlugin } from 'vuefire'

Vue.use(firestorePlugin)
Vue.use(VueRouter)

const myRouter = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Form },
    { path: '/event', component: Event }
  ]
})

new Vue({
  el: '#app',
  router: myRouter,
  render: h => h(App)
})

Loader.load()
