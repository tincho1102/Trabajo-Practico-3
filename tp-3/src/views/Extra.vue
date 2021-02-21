<template>
    <div>
        <ModalElim></ModalElim>
        <ModalEdit></ModalEdit>
        <ModalAgregar></ModalAgregar>
    </div>
</template>
<script>
import ModalElim from '../components/ModalElim.vue'
import ModalEdit from '../components/ModalEdit.vue'
import ModalAgregar from '../components/ModalAgregar.vue'
export default {
    components:{
        ModalElim,
        ModalEdit,
        ModalAgregar,
    }
}
</script>