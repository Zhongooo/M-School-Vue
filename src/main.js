import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.prototype.$http = axios

Vue.config.productionTip = false;
//自定义聚焦指令
Vue.directive('focus', {
	inserted: function(el) {
		el.focus();
	}
})

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
