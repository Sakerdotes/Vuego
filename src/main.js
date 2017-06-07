import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import "bootstrap/scss/bootstrap.scss"

import app from './App.vue'
import router from './router/router.js'
import store from './store/store.js'

Vue.use(BootstrapVue);
Vue.component('app', app);

new Vue({
    router, store
}).$mount('#app');

