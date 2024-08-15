<template>
  <header class="bg-gray-800 text-white p-4">
    <div class="container mx-auto flex justify-between items-start">
      <h1 class="text-xl font-bold">{{ title }}</h1>
      <nav>
        <ul class="flex space-x-4">
          <li><a href="#" class="hover:underline">Gaming</a></li>
          <li><a href="#" class="hover:underline">Students</a></li>
          <li><a href="#" class="hover:underline">Desing</a></li>
        </ul>
      </nav>
      <nav> 
        <ul class="flex space-x-4">
          <li><a href="#" class="hover:underline">Home</a></li>
          <li><a href="#" class="hover:underline">About</a></li>
          <li><a href="#" class="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MainHeader',
  data() {
    return {
      title: 'Mi Proyecto'
    }
  }
}
</script>

<style scoped>
/* Si es necesario, puedes agregar estilos adicionales aquí. */
</style>
