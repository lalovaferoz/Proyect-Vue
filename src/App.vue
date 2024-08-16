<template>
  <div class="flex flex-col min-h-screen">
    <MainHeader />
    <div class="flex-grow">
      <!-- Contenedor para la imagen de fondo -->
      <div 
        class="bg-cover bg-center w-full min-h-[841px]" 
        :style="{ backgroundImage: `url(${imageUrl})` }">
        <!-- Aquí puedes agregar más contenido si es necesario -->
      </div>
    </div>
    <MainFooter />
  </div>
</template>

<script>
import MainHeader from './components/commons/MainHeader.vue';
import MainFooter from './components/commons/MainFooter.vue';
import imageUrl from '@/assets/img/bg2.jpg'; // Importa la imagen

export default {
  name: 'App',
  components: {
    MainHeader,
    MainFooter,
  },
  data() {
    return {
      imageUrl
    };
  }
};
</script>

<style>
/* Tu CSS global o específico para App.vue */
</style>
