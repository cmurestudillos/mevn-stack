<template>
    <div class="container">
        <h1>Añadir nuevo usuario</h1>
        <hr>
        <b-form @submit.prevent="agregarUsuario(usuario)">
            <b-form-group >
                <b-form-input id="input-1" v-model="usuario.email" type="email" placeholder="Enter email" required ></b-form-input>
                <b-form-input id="input-2" v-model="usuario.first_name" type="text" placeholder="Enter firt name" required ></b-form-input>
                <b-form-input id="input-3" v-model="usuario.last_name" type="text" placeholder="Enter last name" required ></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="outline-primary">Confirmar</b-button>
            <b-button type="button" variant="outline-danger" @click="cancelarAccion()">Cancelar</b-button>
        </b-form>        
    </div>
</template>

<script>
// Propiedades de Vuex
import {mapActions, mapState} from 'vuex';
export default {
  data(){
    return{
      email: '',
      first_name: '',
      last_name: ''
    }
  },
  methods:{
    ...mapActions(['agregarUsuario', 'cancelarAccion']),
  },
  computed:{
    ...mapState(['usuario'])
  }
}
</script>