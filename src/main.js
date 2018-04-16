// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'vue-material/dist/theme/default.css' // This line here
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

import { loadProgressBar } from 'axios-progress-bar'
 
loadProgressBar()

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import './assets/css/style.css'
import 'axios-progress-bar/dist/nprogress.css'

Vue.use(VueMaterial)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
