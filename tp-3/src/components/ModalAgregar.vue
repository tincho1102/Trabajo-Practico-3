<template>
    <div class="overlay-style display-none">
              <div class="modal-new" id="modal-agregar">
                <div class="card card-modal bg-color-background">
                  <div class="container">
                    <div class="row"> 
                      <h5 class="card-title">Complete los campos para añadir una nueva fila</h5>
                    </div>  
                    <div class="row">
                      <label for="País">País:</label>
                      <input type="text" id="pais" required>
                      <label for="salario">Salario:</label>
                      <input type="text" id="salario" required>
                      <label for="PS5">Play 5:</label>
                      <input type="text" id="play5" required>
                      <label for="Iphone">Iphone:</label>
                      <input type="text" id="Iphone" required>
                    </div>
                    <div class="row">
                      <label for="Transporte">Transporte:</label>
                      <input type="text" id="Transporte" required>
                      <label for="canasta">Canasta:</label>
                      <input type="text" id="canasta" required>
                      <label for="Indice">Indice de libertad:</label>
                      <input type="text" id="Indice" required>
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
    #modal-agregar{
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