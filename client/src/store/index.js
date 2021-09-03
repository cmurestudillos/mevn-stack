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
    eliminar(state, payload) {
      state.usuarios = state.usuarios.filter(item => item.id !== payload)
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
    eliminarUsuario({ commit, state }, id) {
      clienteAxios.delete(`/api/usuarios/${id}`)
        .then(res => {
          commit('eliminar', id)
        })
        .catch(e => {
          console.log(e.response);
        })      
    },
    setTarea({ commit }, id) {
      commit('tarea', id)
    },    
  },
  modules: {
  }
})
