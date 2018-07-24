// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import '@/plugins/bootstrap'

import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify'
import ru from './locale/ru'

Vue.use(Vuetify, {
	theme: {
		primary: '#1976D2',
	  secondary: '#424242',
	  accent: '#82B1FF',
	  error: '#FF5252',
	  info: '#2196F3',
	  success: '#4CAF50',
	  warning: '#FFC107'
	},
	/*
	theme: {
		primary: "#FAFAFA",
	  secondary: "#757575",
	  accent: "#FF8A65",
	  error: "#F4511E",
	  warning: "#FDD835",
	  info: "#42A5F5",
	  success: "#66BB6A"
	},*/
	/*theme: {
	  primary: "#FF8A65",
	  secondary: "#BDBDBD",
	  accent: "#FF7043",
	  error: "#F44336",
	  warning: "#FFD54F",
	  info: "#64B5F6",
	  success: "#66BB6A"
	},*/
	lang: {
		locales: { ru },
		current: 'ru'
	}
})

import VeeValidate from 'vuetify'
Vue.use(VeeValidate)

Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
