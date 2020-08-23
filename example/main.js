import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

import VueFunny from '../src/index.js'

Vue.use(VueFunny)

new Vue({
  render: h => h(App),
}).$mount('#app')
