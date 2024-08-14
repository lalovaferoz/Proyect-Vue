<template>
  <div>
    <MainHeader />
    <!-- Aquí puedes agregar otros componentes o contenido -->
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
  </div>
</template>

<script>
import MainHeader from './components/commons/MainHeader.vue';

export default {
  name: 'App',
  components: {
    MainHeader
  }
};
</script>

<style>
/* Tu CSS global o específico para App.vue */
</style>