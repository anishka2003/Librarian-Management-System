import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

import GlobalMixins from '@/utils/GlobalMixins.vue'
import AppConstants from '@/utils/AppConstants'

Vue.mixin(GlobalMixins)
Vue.prototype.$const = AppConstants