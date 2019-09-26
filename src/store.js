import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    issues: []
  },

  mutations: {
    'SET_ISSUES': (state, data) => Vue.set(state, 'issues', [...data])
  },
  actions: {
    async loadIssues({commit}, pageNum) {
      try {
        const { data } = await axios.get(`https://api.github.com/repos/vuejs/vue/issues?page=${pageNum}&per_page=10`)
        commit('SET_ISSUES', data);
      } catch(e) {
        console.log(e);
      }
    }
  },

  getters: {
    getIssues: (state) => state.issues
  }
})
