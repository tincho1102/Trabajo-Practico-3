<template>
    <footer>
        <div class="container-fluid footer">
          <div class="row">
            <div class="col-lg-2 offset"></div>          
            <div class="col-4 col-lg-4">
              <h2>Contacto</h2>
              <ul>
                <li>
                  <a href="mailto:tinchodimarco11@gmail.com">
                    <img src="../assets/iconos/Gmail.png"  width="30" height="30" alt="" loading="lazy" target="_blank"> 
                  </a>
                </li>
  
                <li>
                  <a href="https://api.whatsapp.com/send?phone=[54][2494586019]">
                    <img src="../assets/iconos/whatsapp.png"  width="30" height="30" alt="" loading="lazy" target="_blank"> 
                  </a>  
                </li>
                
                <li>
                  <a href="https://www.instagram.com/tincho_di_marco1/?hl=es-la">
                    <img src="../assets/iconos/instagram.png"  width="30" height="30" alt="" loading="lazy" target="_blank"> 
                  </a>
                </li>
  
                <li>
                  <a href="https://www.facebook.com/martin.dimarco.397">
                    <img src="../assets/iconos/facebook.png"  width="30" height="30" alt="" loading="lazy" target="_blank"> 
                  </a>
                </li>
  
              </ul>
            </div>
            <div class="col-2 offset"></div>
            <div class="col-4 col-lg-4"> 
              <h5>Secciones</h5>
                <ul>
                  <li>
                    <a >
                    <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link >             
                    </a>
                  </li>
                  <li>
                    <a >
                    <router-link  class="nav-link" to="/Argentina">Argentina</router-link >             
                    </a>
                  </li>
                  <li>
                    <a >
                    <router-link  class="nav-link" to="/América">America</router-link >            
                    </a>
                  </li>
                  <li>
                    <router-link  class="nav-link" to="/Internacional">Internacional</router-link >
                  </li>
                  <li>
                    <router-link  class="nav-link" to="/Extra">Extra</router-link >
                  </li>
                </ul>
            </div>
          </div>
        </div> 
        
        <div class="container-fluid copyright">
          <div class="row">
            <div class="col-2 col-lg-5 offset"></div>
            <div class="col-8 col-lg-4">
              <a href="">
                <p>Copyright © 2020. All Rights Reserved</p>   
              </a>
            </div>
          </div>
        </div> 
      </footer>
</template>

<script>
export default {

}
</script>

<style>

</style>