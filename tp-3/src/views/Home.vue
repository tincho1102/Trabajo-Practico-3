<template>
  <div class="container-fluid">
    <div class="row mb-4">
      <div class="col-md-8">
        <Carousel></Carousel>
      </div>
      <div class="offset col-md-1"></div>
      <div class="col-md-3">
        <CardNotice></CardNotice>
      </div>
    </div>
    <NoticiasArglist></NoticiasArglist>
  </div>
</template>

<script>
  import Carousel from '../components/Carousel'
  import NoticiasArglist from '../components/NoticiasArglist'
  import CardNotice from '../components/CardNotice'
export default {
  name: 'Argentina',
    components:{
        NoticiasArglist,
        Carousel,
        CardNotice,
  }
}
</script>

<style>
  
</style>

