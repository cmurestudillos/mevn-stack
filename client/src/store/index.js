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
    setUsuario(state, payload) {
      state.usuario = payload
    },      
    setNuevoUsuario(state, payload){
      state.usuarios.push(payload);
      router.push('/');
    }, 
    setActualizarUsuario(state, payload){
      debugger
      state.usuarios = state.usuarios.map(item => item.id === payload.id ? payload : item)
      debugger
      router.push('/')
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
    obtenerUsuarioById({ commit, state }, id) {
      clienteAxios.get(`/api/usuarios/${id}`)
        .then(res => {
          let arrayDatos = res.data.data; 
          commit('setUsuario', arrayDatos)
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
    modificarUsuario({ commit, state }, usuario) {
      let _id = usuario.id;
      clienteAxios.put(`/api/usuarios/${_id}`, usuario)
        .then(res => {
          commit('setActualizarUsuario', usuario)
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
    cancelarAccion({ commit }) {
      router.push('/');     
    },    
  },
  modules: {
  }
})
