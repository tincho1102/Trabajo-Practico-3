<template>
    <div class="container">
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                  <th scope="col">Salario</th>
                    <th scope="col">Play 5</th>
                    <th scope="col">Iphone</th>
                    <th scope="col">Canasta</th>
                    <th scope="col">Indice</th>
                    <th scope="col">Accion</th>
                </tr>
            </thead>
            <tbody>
               <tr>
                    <td>{{PaisNombre}}</td>
                    <td>{{PaisSalario}}</td>
                    <td>{{PaisPlay5}}</td>
                    <td>{{PaisIphone}}</td>
                    <td>{{PaisCanasta}}</td>
                    <td>{{paisIndice}}</td>
                    <td>
                          <button @click="deletePais">Eliminar</button>
                         <button @click="editPais">Editar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

export default {
 props: {
    paisNombre: {
      type: String,
      required: true,
    },
    paisSalario: {
      type: String,
      required: true,
    },
    paisIphone: {
      type: String,
      required: true,
    },
    paisPlay5: {
      type: String,
      required: true,
    },
   paisCanasta: {
      type: String,
      required: true,
    },
   paisIndice: {
      type: String,
      required: true,
    },
 
    contactId: {
      type: String,
      required: true,
    },
  },
  methods: {
    deletePais() {
      this.$emit('delete-pais', this.paisId)
    },
    editPais() {
      this.$emit('edit-pais', this.paisId)
    },
  },
};

</script>

<style>

</style>