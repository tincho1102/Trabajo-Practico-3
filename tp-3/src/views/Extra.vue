<template>
  <div>
     <Table>
        v-for="paises in allPaises"
        :key="pais.id"
        :paisId="pais.id"
        :paisNombre="pais.Nombre"
        :paisSalario="pais.Salario"
        :paisIphone="pais.Iphone"
        :paisCanasta="pais.Canasta"
        :paisIndice="pais.Indice"
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
            <input type="text" id="nombre" v-model="selectedPais.Nombre">
            <label for="Salario">Last Name</label>
            <input type="text" id="salario" v-model="selectedPais.Salario">
             <label for="play5">Play 5</label>
            <input type="text" id="play5" v-model="selectedPais.Play5">
             <label for="iphone">Iphone</label>
            <input type="text" id="iphone" v-model="selectedPais.Iphone">
             <label for="canasta">Canasta</label>
            <input type="text" id="canasta" v-model="selectedPais.Canasta">
            <label for="Indice">Indice</label>
            <input type="text" id="indice" v-model="selectedPais.Indice">
          </div>
        </template>

        <template v-slot:footer>
          <button @click="editContact">Edit</button>
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
      selectedContact: {}
    };
  },

  mounted() {
    this.$store.dispatch('getContacts')
  },
  methods: {
    openEditContact(id) {
      this.selectedContact = {...this.allContacts.filter(contact => contact.id === id)[0]}
      this.showEditModal = true
    },
    openDeleteContact(id) {
      this.showDeleteModal = true
      this.selectedContact = {...this.allContacts.filter(contact => contact.id === id)[0]}
    },
    editContact() {
      this.showEditModal = false;
      this.$store.commit('editContact', {contact: this.selectedContact})
    },
    deleteContact() {
      this.$store.commit('deleteContact', {contactId: this.selectedContact.id})
      this.showDeleteModal = false
    }
  }
};
</script>