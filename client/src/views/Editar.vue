<template>
    <div class="container">
        <h1>Modificar usuario</h1>
        <hr>
        <b-form @submit.prevent="modificarUsuario(usuario)" class="shadow p-3 mb-5 bg-white rounded">
          <b-row>
            <b-col>
              <label class="mr-sm-2" for="input-1"><strong>Email</strong></label>
              <b-form-input id="input-1" v-model="usuario.email" type="email" placeholder="Enter email" required ></b-form-input>
            </b-col>
            <b-col>
              <label class="mr-sm-2" for="input-2"><strong>First Name</strong></label>
              <b-form-input id="input-2" v-model="usuario.first_name" type="text" placeholder="Enter firt name" required ></b-form-input>
            </b-col>
            <b-col>
              <label class="mr-sm-2" for="input-3"><strong>Last Name</strong></label>
              <b-form-input id="input-3" v-model="usuario.last_name" type="text" placeholder="Enter last name" required ></b-form-input>
            </b-col>
          </b-row>
          <b-button type="submit" variant="outline-primary" class="m-2">Confirmar</b-button>
          <b-button type="button" variant="outline-danger"  class="m-2" @click="cancelarAccion()">Cancelar</b-button>
        </b-form>        
    </div>
</template>

<script>
// Propiedades de Vuex
import {mapActions, mapState} from 'vuex';
export default {
    methods:{
        ...mapActions(['obtenerUsuarioById', 'modificarUsuario', 'cancelarAccion']),
    },
    computed:{
        ...mapState(['usuario'])
    },
    created(){
        this.obtenerUsuarioById(this.$route.params.id)
    }  
}
</script>