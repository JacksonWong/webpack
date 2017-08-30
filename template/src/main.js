{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import store from './store'
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#router}}
import router from './router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/router}}
import Vw from './assets/js/vw'

Vue.config.productionTip = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(Vw);

/* eslint-disable no-new */
new Vue({
	el: '#app',
	store,
	{{#router}}
	router,
	{{/router}}
	{{#if_eq build "runtime"}}
	render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
	{{/if_eq}}
	{{#if_eq build "standalone"}}
	template: '<App/>',
	components: { App }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
	{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
