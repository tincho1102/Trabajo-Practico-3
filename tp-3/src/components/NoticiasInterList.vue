<template>
    <div class="d-flex flex-wrap justify-content-around mt-4">
        <NoticiasInter 
        v-for="NoticiasInter in NoticiasInter"
            :key="NoticiasInter.id"
            :NoticiasInter="NoticiasInter">
        </NoticiasInter>
    </div>
   
</template>
<script>

import NoticiasInter from './NoticiasInter.vue';

export default {
    components: {

        NoticiasInter,
        
    },
    data() {
        return {
            NoticiasInter: []
        }
    },
    mounted() {
        this.getNoticiasInter();
    },
    methods: {
        getNoticiasInter() {
            fetch('https://602819e8dd4afd001754af77.mockapi.io/NoticiasInter')
                .then(resp => resp.json())
                .then(data => {
                    this.NoticiasInter = data;
                    console.log(data);
                })
        }
    },
}
</script>
<style lang="">
    
</style>