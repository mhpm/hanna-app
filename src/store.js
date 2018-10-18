import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Ligas: require("./data/ligas.json"),
    User: {}
  },
  mutations: {

  },
  actions: {

  }
})