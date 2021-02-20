<template>
    <div class="card mb-3" style="width: 18rem;">
        <img :src="NoticiasInter.imagen" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title">{{ NoticiasInter.title }}</h5>
            <p class="card-text">{{ NoticiasInter.description }}</p>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        NoticiasInter: {
            type: Object,
            required: true
        }
    },
    methods: {
        goToInternacional() {
            this.$router.push({ name: 'noticiasInter', params: { id: this.NoticiasInter.id } })
        }
    },
}
</script>
<style lang="">
    
</style>