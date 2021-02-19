<template>
    <div class="card mb-3" style="width: 18rem;">
        <img :src="NoticiasArg.imagen" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title">{{ NoticiasArg.title }}</h5>
            <p class="card-text">{{ NoticiasArg.description }}</p>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        NoticiasArg: {
            type: Object,
            required: true
        }
    },
    methods: {
        goToArgentina() {
            this.$router.push({ name: 'NoticiasArg', params: { id: this.NoticiasArg.id } })
        }
    },
}
</script>
<style lang="">
    
</style>