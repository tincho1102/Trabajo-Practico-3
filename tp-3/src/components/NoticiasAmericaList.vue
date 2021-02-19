<template>
    <div class="d-flex flex-wrap justify-content-around mt-4">
        <NoticiasAmerica  v-for="NoticiasAmerica in NoticiasAmerica"
            :key="NoticiasAmerica.id"
            :NoticiasArg="NoticiasAmerica"></NoticiasAmerica>
    </div>
   
</template>
<script>

import NoticiasAmerica from './NoticiasAmerica.vue';
export default {
    components: {

        NoticiasAmerica
    },
    data() {
        return {
            NoticiasAmerica: []
        }
    },
    mounted() {
        this.getNoticiasAmerica();
    },
    methods: {
        getNoticiasAmerica() {
            fetch('https://602819e8dd4afd001754af77.mockapi.io/NoticiasAmer')
                .then(resp => resp.json())
                .then(data => {
                    this.NoticiasAmerica = data;
console.log(data);
console.log(this.NoticiasAmerica);
                })
        }
    },
}
</script>
<style lang="">
    
</style>
