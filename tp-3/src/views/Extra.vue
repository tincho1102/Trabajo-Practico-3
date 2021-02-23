<template>
  <div>
     <Table>
        v-for="contact in allContacts"
        :key="contact.id"
        :contactId="contact.id"
        :contactName="contact.name"
        :contactLastName="contact.lastName"
        :contactPhone="contact.phone"
        :contactEmail="contact.email"
        :isFavorite="contact.isFavorite"
        @delete-contact="openDeleteContact"
        @edit-contact="openEditContact"
      >
      </Table>
      <Modal v-if="showEditModal">
        <template v-slot:title>
          <h1>Edit contact</h1>
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
      <Modal v-if="showDeleteModal" :contact="selectedContact">
        <template v-slot:title>
          <h1>Titulo Eliminar</h1>
        </template>

        <template v-slot:body>
          <p>Esta seguro de eliminarlo?</p>
        </template>

        <template v-slot:footer>
          <button @click="deleteContact">Delete</button>
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
  // Para obtener data desde una api ni bien se monte el componente
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