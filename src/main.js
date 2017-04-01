import Vue from 'vue'
import VueResource from 'vue-resource'

import app from './App.vue'
import router from './router/router.js'
import store from './store/store.js'

Vue.use(VueResource);


Vue.component('app', app);

new Vue({
    router,store
}).$mount('#app');

