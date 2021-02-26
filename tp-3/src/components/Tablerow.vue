<template>
    <div>
        <tbody>
            <tr>
                <th scope="row">{{ paisId }}</th>
                <td>{{ paisNombre }}</td>
                <td>{{ paisSalario }}</td>
                <td>{{ paisPlay }}</td>
                <td>{{ paisIphone }}</td>
                <td>{{ paisCanasta }}</td>
                <td>{{ paisIndice }}</td>
                <td>
                 <button class="btn btn-secondary" @click="deletePais">Eliminar</button>
                 <button class="btn btn-secondary" @click="editPais">Editar</button>
                </td>
            </tr>
        </tbody>
    </div>
</template>

<script>
export default {
 props: {
   paisId: {
     type: Number,
     required: true,    
   },
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
    paisPlay: {
      type: String,
      required: true,
    },
    paisCanasta: {
      type: String,
      required: true,
    },
    paisIndice: {
      type: Number,
      required: true,
    },
  },
   methods: {
    deletePais(){
      this.$emit('deletePais',this.paisId);
    },
    editPais(){
       this.$emit('editPais',this.paisId);
    }
  },
}
</script>

<style>

</style>