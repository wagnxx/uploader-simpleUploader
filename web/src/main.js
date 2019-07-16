import Vue from 'vue'
import App from './App.vue'
// import uploader from 'vue-simple-uploader'
 
// Vue.use(uploader)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
