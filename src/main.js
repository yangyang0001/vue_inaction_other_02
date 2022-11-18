import Vue from 'vue'
import App from './App.vue'

// 全局组件的使用
import Count from '@/components/Count.vue'
Vue.component("MineCount", Count);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
