<template>
  <div
    class="bg-gray-800 text-white p-4 rounded-lg shadow-lg flex flex-col items-center"
  >
    <img
      :src="image"
      alt="Product Image"
      class="w-full h-32 object-cover rounded-md mb-4"
    />
    <h3 class="text-lg font-bold mb-2">{{ title }}</h3>
    <p class="text-sm mb-2">{{ description }}</p>
    <p class="text-xl font-semibold">${{ price.toFixed(2) }}</p>
  </div>
</template>

<script>
export default {
  name: 'SiteCard',
  props: {
    image: String,
    title: String,
    description: String,
    price: Number,
  },
};
</script>

<style scoped>
/* Puedes definir estilos adicionales aquí si es necesario */
</style>
