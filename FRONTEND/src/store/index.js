import Vue from 'vue'
import Vuex from 'vuex'
const axios = require('axios');

// import { notesApi } from './service';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notes: undefined
  },
  mutations: {
    setNotes(state, payload) {
      state.notes = payload;
    },

  },
  actions: {
    async GET_NOTES({ commit }) {
      try {
        const resp = await axios.get("/api/values");
        commit('setNotes', resp.data);
        return resp.data;
      } catch (error) {
        commit('setNotes', []);
        return false;
      }
    },

  },
  modules: {
  }
})
