<template>
    <header>
        <div id="header" class="encabezado bg-color-D1EEFE">
            ARGENTINA ECONOMICA <router-link to='/'><img src="../assets/iconos/iconos.png" width="10%" height="10%"></router-link>
        </div>
        <!--Nav-Bar-->
        <nav class="navbar fixed-top navbar-expand-lg navbar-light navbar-style">
          <router-link class="navbar-brand" to="/">
            <img src="../assets/iconos/iconos.png" width="40" height="40" alt="" loading="lazy">
          </router-link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item ">
                <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link >
              </li>
              <li class="nav-item">
                <router-link  class="nav-link" to="/Argentina">Argentina</router-link >
              </li>
              <li class="nav-item">
                <router-link  class="nav-link" to="/América">America</router-link >
              </li>
              <li class="nav-item">
                <router-link  class="nav-link" to="/Internacional">Internacional</router-link >
              </li>
              <li class="nav-item">
                <router-link  class="nav-link" to="/Extra">Extra</router-link >
              </li>

            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
  </header>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>