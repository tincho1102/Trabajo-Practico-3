<template>
  <div>
     <Table
        v-for="paises in allPaises"
        :key="paises.id"
        :paisId="pais.id"
        :paisNombre="pais.nombre"
        :paisSalario="pais.salario"
        :paisIphone="pais.iphone"
        :paisCanasta="pais.canasta"
        :paisIndice="pais.indice"
        @delete-Pais="openDeletePais"
        @edit-Pais="openEditPais">
        
      </Table>
      <Modal v-if="showEditModal">
        <template v-slot:title>
          <h1>Edit Pais</h1>
        </template>

        <template v-slot:body>
          <div>
            <label for="nombre">Pais</label>    
            <input type="text" id="nombre" v-model="selectedPais.nombre">
            <label for="Salario">Last Name</label>
            <input type="text" id="salario" v-model="selectedPais.salario">
             <label for="play5">Play 5</label>
            <input type="text" id="play5" v-model="selectedPais.play5">
             <label for="iphone">Iphone</label>
            <input type="text" id="iphone" v-model="selectedPais.iphone">
             <label for="canasta">Canasta</label>
            <input type="text" id="canasta" v-model="selectedPais.canasta">
            <label for="Indice">Indice</label>
            <input type="text" id="indice" v-model="selectedPais.ndice">
          </div>
        </template>

        <template v-slot:footer>
          <button @click="editPais">Edit</button>
        </template>
      </Modal>
      <Modal v-if="showDeleteModal" :contact="selectedPais">
        <template v-slot:title>
          <h1>Titulo Eliminar</h1>
        </template>

        <template v-slot:body>
          <p>Esta seguro de eliminarlo?</p>
        </template>

        <template v-slot:footer>
          <button @click="deletePais">Delete</button>
        </template>
      </Modal>

  </div>

</template>

<script>
import Table from '../components/table.vue'

import Modal from "../components/Modal";

import { mapGetters } from "vuex";
export default {
    name: 'table',
    components:{
        Table,
        Modal

    },
      computed: mapGetters(['allPaises']),
  data() {
    return {
 
      showEditModal: false,
      showDeleteModal: false,
      selectedPais: {}
    };
  },

  mounted() {
    this.$store.dispatch('allPaises')
  },
  methods: {
    openEditPais(id) {
      this.selectedPais = {...this.allPais.filter(pais => pais.id === id)[0]}
      this.showEditModal = true
    },
    openDeletePais(id) {
      this.showDeleteModal = true
      this.selectedPais = {...this.allPaises.filter(pais => pais.id === id)[0]}
    },
    editPais() {
      this.showEditModal = false;
      this.$store.commit('editPais', {pais: this.selectedPais})
    },
    deletePais() {
      this.$store.commit('deleteContact', {paisId: this.selectedPais.id})
      this.showDeleteModal = false
    }
  }
};
</script>