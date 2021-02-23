<template>
    <div class="container">
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">Pais</th>
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
               <tr v-for="Paises in Paises" :key="Paises.Paises">
                   <th scope="row">{{Paises.id}}</th>
                    <td>{{Paises.Nombre}}</td>
                    <td>{{Paises.Salario}}</td>
                    <td>{{Paises.Play5}}</td>
                    <td>{{Paises.Iphone}}</td>
                    <td>{{Paises.Canasta}}</td>
                    <td>{{Paises.Indice}}</td>
                    <td>
                        <button>Eliminar</button>
                        <button>Editar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

export default {
  components: {  },

 data() {
        return {
            Paises: []
        }
    },
    mounted() {
        this.getpaises();
    },
    methods: {
        getpaises() {
            fetch('https://602819e8dd4afd001754af77.mockapi.io/paises')
                .then(resp => resp.json())
                .then(data => {
                    this.Paises = data;
                    console.log(this.Paises);
                    console.log(data);
                })
        },
      
    },
}

</script>

<style>

</style>