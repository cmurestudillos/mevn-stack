import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index';
// Peticiones HTTP
import clienteAxios from '../config/axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuarios: [],
    usuario: {email: '', first_name: '', last_name: ''}
  },
  mutations: {
    setUsuarios(state, payload) {
      state.usuarios = payload
    },  
    setNuevoUsuario(state, payload){
      state.usuarios.push(payload);
      router.push('/');
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
    agregarUsuario({commit}, usuario){
      clienteAxios.post('/api/usuarios', usuario)
        .then(res => {
          commit('setNuevoUsuario', res.data);
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
  },
  modules: {
  }
})
