import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index.js';
// Peticiones HTTP
import clienteAxios from '../config/axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuarios: []
  },
  mutations: {
    setUsuarios(state, payload) {
      state.usuarios = payload
    },   
  },
  actions: {
    listarUsuarios({commit}, payload){
      clienteAxios.get('/api/usuarios')
        .then(res => {
          //console.log(res.data.results);
          commit('setUsuarios', res.data.results)
        })
        .catch(e => {
          console.log(e.response);
        })
    }    
  },
  modules: {
  }
})
