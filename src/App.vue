<template>
  <div class="flex flex-col min-h-screen">
    <MainHeader />
    
      <!-- Contenedor con color sólido de fondo -->
      <div class="bg-slate-500 w-full h-full min-h-[837px]">
        <!-- Aquí puedes agregar más contenido si es necesario -->
     
    </div>
    <MainFooter />
  </div>
</template>

<script>
import MainHeader from './components/commons/MainHeader.vue'
import MainFooter from './components/commons/MainFooter.vue'

export default {
  name: 'App',
  components: {
    MainHeader,
    MainFooter
  }
}
</script>

<style>
/* Tu CSS global o específico para App.vue */
</style>

