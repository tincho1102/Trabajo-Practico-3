<template>
    <div class="d-flex flex-wrap justify-content-around mt-4">
        <NoticiasArg
             v-for="NoticiasArg in NoticiasArg"
            :key="NoticiasArg.id"
            :NoticiasArg="NoticiasArg">
            </NoticiasArg>
    </div>
   
</template>
<script>

import NoticiasArg from './NoticiasArg.vue';
export default {
    components: {

        NoticiasArg
    },
    data() {
        return {
            NoticiasArg: []
        }
    },
    mounted() {
        this.getNoticiasArg();
    },
    methods: {
        getNoticiasArg() {
            fetch('https://602819e8dd4afd001754af77.mockapi.io/NoticiasArg')
                .then(resp => resp.json())
                .then(data => {
                    this.NoticiasArg = data;

                })
        }
    },
}
</script>
<style lang="">
    
</style>