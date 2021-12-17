<template>
  <div id="app">
    <Navbar />
    <router-view/>
    <Footer class="fixed-bottom" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
// Componentes
import Navbar from './components/shared/Navbar.vue';
import Footer from './components/shared/Footer.vue';

export default {
  components: {
    Navbar, Footer
  },  
  methods:{
    ...mapActions(['listarUsuarios'])
  },
  computed:{
  },
  created(){
    this.listarUsuarios();
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
