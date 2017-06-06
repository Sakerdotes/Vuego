import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';

import app from './App.vue'
import router from './router/router.js'
import store from './store/store.js'

Vue.use(BootstrapVue);
Vue.component('app', app);

new Vue({
    router,store
}).$mount('#app');

