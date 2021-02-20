<template>
    <div class="card mb-3" style="width: 18rem;">
        <img :src="NoticiasAmerica.imagen" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title">{{ NoticiasAmerica.title }}</h5>
            <p class="card-text">{{ NoticiasAmerica.description }}</p>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        NoticiasAmerica: {
            type: Object,
            required: true
        }
    },
    methods: {
        goToAmerica() {
            this.$router.push({ name: 'NoticiasAmerica', params: { id: this.NoticiasAmerica.id } })
        }
    },
}
</script>
<style lang="">
    
</style>