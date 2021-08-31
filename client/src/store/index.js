import Vue from 'vue'
import Vuex from 'vuex'
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
          let arrayDatos = res.data.data; 
          commit('setUsuarios', arrayDatos)
        })
        .catch(e => {
          console.log(e.response);
        })
    },  
  },
  modules: {
  }
})
