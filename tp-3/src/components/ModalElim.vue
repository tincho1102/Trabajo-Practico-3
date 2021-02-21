<template>
    <div class="overlay-style display-none">
              <div class="modal-new" id="modal-elim">
                <div class="card card-modal bg-color-background">
                  <div class="container">
                    <div class="row"> 
                      <h5 class="card-title">¿Seguro que desea eliminar esta fila?</h5>
                    </div>  
                    <div class="row">
                      <p class="card-text">Si cancela la fila seguira en el su lugar original</p>
                    </div>
                    <div class="row">  
                      <div class="col-md-5 offset"></div>
                      <button class="btn btn-danger button-modal">Cancelar</button>
                      <button class="btn btn-primary button-modal">Aceptar</button>
                    </div>  
                  </div>  
                </div>
              </div>
        </div>
</template>
<script>
export default {
    
}
</script>
<style>
    #modal-elim{
      border-radius: 5px; 
      border: 1px solid  #369ABE;     
    }
    input{
    padding: 1px;
    margin: 5px;
    margin-bottom: 20px;
    } 
    .bg-color-background {
      background-color: #C6C8C3;
    }
</style>