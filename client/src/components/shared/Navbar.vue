<template>
    <div id="nav">
      <b-navbar toggleable="lg" type="dark">
        <b-navbar-brand href="#">
          <img src="../../assets/img/logo.png" width="48" height="48" alt="Logo" title="Logo">
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Inicio</b-nav-item>
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
  background-color: #41b783;
}

#nav a {
  padding: 0.3em;
}
</style>
