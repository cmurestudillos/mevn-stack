<template>
    <div id="nav">
      <b-navbar toggleable="lg" type="dark">
        <b-navbar-brand href="#">
          <img src="../../assets/img/logo.png" width="48" height="48" alt="Logo" title="Logo">
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav id="home">
            <router-link :to="{name: 'home'}">
              Inicio
            </router-link>
          </b-navbar-nav>
          <b-navbar-nav id="nuevo">
            <router-link :to="{name: 'agregar'}">
              A&ntilde;adir
            </router-link>
          </b-navbar-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
</template>

<script>
</script>

<style scoped>
  #nav{
    background: linear-gradient( 90deg,#000,#37d843 100%,#00d4ff 0 );
  }

  img{
    padding: 0.1rem;
    margin: 0 1rem 0 1rem;
    border: 1px solid white;
    border-radius: 50%;
  }

  #home a{
    cursor: pointer;
    text-decoration: none;
    color: white;
  }

  #nuevo a{
    cursor: pointer;
    margin: 0 1rem 0 1rem;
    text-decoration: none;
    color: white;
  }

</style>
