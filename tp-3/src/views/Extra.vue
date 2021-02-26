<template>
  <div>
    <Table> 
    </Table>
  </div>
</template>
<script>
import Table from '../components/tablePaises.vue'
export default {
    name: 'table',
    components:{
      Table,
    },
    mounted() {
    this.$store.dispatch("getPaises");
  },
};
</script>