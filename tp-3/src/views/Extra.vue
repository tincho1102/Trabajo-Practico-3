<template>
  <div>
      <Table></Table>
      <ModalElim></ModalElim>
      <ModalEdit></ModalEdit>
       <ModalAgregar></ModalAgregar>
  </div>

</template>

<script>
import Table from '../components/table.vue'
import ModalElim from '../components/ModalElim.vue'
import ModalEdit from '../components/ModalEdit.vue'
import ModalAgregar from '../components/ModalAgregar.vue'
export default {
    name: 'table',
    components:{
        Table,
        ModalElim,
        ModalEdit,
        ModalAgregar,
    }
}
</script>