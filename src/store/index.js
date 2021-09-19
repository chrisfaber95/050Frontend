import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    winkelmand: Object.create(null),
  },
  mutations: {
    updateMand (state, payload) {
		Vue.set(state.winkelmand, payload.id, payload)
    },
  },
  actions: {
  },
  modules: {
  }
})
