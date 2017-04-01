import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const defaultState = {
    count: 0
};

const inBrowser = typeof window !== 'undefined'

// if in browser, use pre-fetched state injected by SSR
const state = (inBrowser && window.__INITIAL_STATE__) || defaultState;

const mutations = {
    increment: (state) => {
        state.count++
    },
    decrement: (state) => {
        state.count--
    }
};

export default new Vuex.Store({
    state,
    mutations
})