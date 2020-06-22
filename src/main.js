import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Edit from './pages/Edit.vue'
import Event from './pages/Event.vue'
import Homepage from './pages/Homepage.vue'
import './index.html'
import { firestorePlugin } from 'vuefire'

Vue.use(firestorePlugin)
Vue.use(VueRouter)

const myRouter = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/edit', component: Edit },
    { path: '/event/:id', component: Event },
    { path: '/', component: Homepage }
  ]
})

new Vue({
  el: '#app',
  router: myRouter,
  render: h => h(App)
})


