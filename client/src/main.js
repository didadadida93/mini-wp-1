import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Fragment from 'vue-fragment'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Fragment.Plugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
