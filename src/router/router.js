import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../pages/Dashboard.vue'
import Home from '../pages/Home.vue'
import Counter from '../pages/Counter.vue'

Vue.use(VueRouter);

const routes = [
    {path: '/', component: Dashboard, name: 'dashboard'},
    {path: '/home', component: Home, name: 'home'},
    {path: '/counter', component: Counter, name: 'counter'},
];

const router = new VueRouter({
    routes
});

export default router