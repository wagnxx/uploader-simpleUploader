import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import EventBus from './eventBus'
// import uploader from 'vue-simple-uploader'
 
// Vue.use(uploader)
Vue.config.productionTip = false


Vue.prototype.$EventBus = EventBus;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
