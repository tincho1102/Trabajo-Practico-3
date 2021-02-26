<template>
  <div  class="container">
    <table  class="table table-dark">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Pais</th>
          <th scope="col">Salario</th>
          <th scope="col">Play 5</th>
          <th scope="col">Iphone</th>
          <th scope="col">Canasta</th>
          <th scope="col">Indice</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
       <Tablerow  v-for="paises in allPaises"
          :key="paises.id"
          :id="paises.id"
          :paisId="paises.id"
          :paisNombre="paises.nombre"
          :paisSalario="paises.salario"
          :paisPlay="paises.play5"
          :paisIphone="paises.iphone"
          :paisCanasta="paises.canasta"
          :paisIndice="paises.indice"
          @deletePais="openDeletePais"
          @editPais="openEditPais">
       </Tablerow>
        <button class="btn btn-secondary" @click="openAddPais">Agregar</button>
    </table>
    <!-- Add Modal -->
      <Modal v-if="showAddModal">
      <template v-slot:title>Agregar pais</template>

      <template v-slot:body>
        <div class="form-group row justify-content-center">
          <label for="inp-id"> Id </label
          ><input id="inp-id" v-model="selectedPais.id" />
        </div>
        <div class="form-group row justify-content-center">
          <label for="inp-GPU_Name">Nombre</label
          ><input id="inp-GPU_Name" v-model="selectedPais.nombre" />
        </div>
        <div class="form-group row justify-content-center">
          <label for="inp-TEST_Date">Salario</label
          ><input id="inp-TEST_Date" v-model="selectedPais.salario" />
        </div>
        <div class="form-group row justify-content-center ">
          <label for="inp-G3D_Mark">Play</label
          ><input id="inp-G3D_Mark" v-model="selectedPais.play5" />
        </div>
        <div class="form-group row justify-content-center">
          <label for="inp-G2D_Mark">Iphone</label
          ><input id="inp-G2D_Mark" v-model="selectedPais.iphone" />
        </div>
         <div class="form-group row justify-content-center">
          <label for="inp-G2D_Mark">Canasta</label
          ><input id="inp-G2D_Mark" v-model="selectedPais.canasta" />
        </div>
         <div class="form-group row justify-content-center">
          <label for="inp-G2D_Mark">Indice</label
          ><input id="inp-G2D_Mark" v-model="selectedPais.indice" />
        </div>
      </template>
      <template v-slot:footer>
        <button
          id="btnCancelar"
          class="btn btn-dark"
          @click="showAddModal = false">
          Cancelar
        </button>
        <button id="btnAceptar" class="btn btn-secondary" @click="addPais">
          Aceptar
        </button>
      </template>
      </Modal>
    <!-- Edit Modal -->
          <Modal v-if="showEditModal">
        <template v-slot:title>
          <h1>Editar Pais</h1>
        </template>

        <template v-slot:body>
          <div>
            <label for="nombre">Nombre</label>    
            <input type="text" id="nombre" v-model="selectedPais.nombre">
            <label for="salario">Salario</label>
            <input type="text" id="salario" v-model="selectedPais.salario">
            <label for="play">Play 5</label>
            <input type="text" id="play" v-model="selectedPais.play5">
            <label for="iphone">iphone</label>
            <input type="text" id="iphone" v-model="selectedPais.iphone">
            <label for="canasta">Canasta</label>
            <input type="text" id="canasta" v-model="selectedPais.canasta">
               <label for="indice">Indice</label>
            <input type="text" id="indice" v-model="selectedPais.indice">
          </div>
        </template>

        <template v-slot:footer>
          <button class="btn btn-secondary" @click="showEditModal = false">Cancelar</button>
          <button class="btn btn-secondary" @click="editPais">Edit</button>
        </template>
      </Modal>
      <!-- Delete Modal -->
      <Modal v-if="showDeleteModal" :pais="selectedPais">
        <template v-slot:title>
          <div class="row"> 
            <h5 class="card-title">¿Seguro que desea eliminar esta fila?</h5>
           </div> 
        </template>

        <template v-slot:body>
          <p>Esta seguro de eliminarlo?</p>
        </template>

        <template v-slot:footer>
          <button class="btn btn-secondary" @click="deletePais">Delete</button>
          <button class="btn btn-secondary" @ @click="showDeleteModal = false">Cancelar</button>
        </template>
      </Modal>
    
  </div>
</template>

<script>
import Modal from "../components/Modal"
import Tablerow from "../components/Tablerow"
import { mapGetters } from "vuex";
export default {
  components: {
    Tablerow,
    
    Modal,
  },
   computed: mapGetters(['allPaises']),
  data() {
    return {
      showAddModal: false,
      showEditModal: false,
      showDeleteModal: false,
      selectedPais: {}
    };
  },
  // Para obtener data desde una api ni bien se monte el componente
  mounted() {
    this.$store.dispatch('getPaises')
  },
  methods: {
     openAddPais() {
      this.showAddModal = true;
      this.selectedPais = {};
    },
    openEditPais(id) {
      this.selectedPais = {...this.allPaises.filter(pais => pais.id === id)[0]}
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
      this.$store.commit('deletePais', {paisId: this.selectedPais.id})
      this.showDeleteModal = false
    },
    addPais() {
      this.$store.commit("addPais", { pais: this.selectedPais });
      this.showAddModal = false;
    },
  }
}
</script>

<style>

</style>