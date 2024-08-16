<template>
  <div>
    <MainHeader />
    <Footer />
    <!-- Aquí puedes agregar otros componentes o contenido -->
    <div
      class="w-full h-full"
      style="background-image: url('https://cdn.pixabay.com/photo/2017/08/24/13/04/abstract-2676727_1280.jpg')"></div>
  </div>
</template>

<script>
import MainHeader from './components/commons/MainHeader.vue'

export default {
  name: 'App',
  components: {
    MainHeader
  }
}
</script>
<style>
/* Tu CSS global o específico para App.vue */
</style>
