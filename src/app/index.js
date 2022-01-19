import Vue from 'vue'
import App from './index.vue'
import {router, store} from './providers'
import vuetify from '../plugins/vuetify'

Vue.config.productionTip = false

export const app = new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
})
