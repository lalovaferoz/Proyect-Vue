<template>
  <div class="min-h-screen flex flex-col">
    <SiteHeader />
    <main class="flex-grow p-4">
      <HelloWorld msg="Welcome to Your Vue.js App" />
      <!-- Contenedor para las tarjetas -->
      <div class="flex flex-wrap gap-4 justify-center aling-middle">
        <SiteCard
          image="https://example.com/product2.jpg"
          title="Another Product"
          description="This product is also fantastic."
          :price="39.99"
        />
        <SiteCard
          image="https://example.com/product2.jpg"
          title="Another Product"
          description="This product is also fantastic."
          :price="39.99"
        />
        <SiteCard
          image="https://example.com/product2.jpg"
          title="Another Product"
          description="This product is also fantastic."
          :price="39.99"
        />
        <!-- Agrega más tarjetas según sea necesario -->
      </div>
    </main>
    <SiteFooter />
  </div>
</template>

<script>
import SiteCard from "./components/commons/SiteCard.vue";
import SiteHeader from "./components/commons/SiteHeader.vue";
import HelloWorld from "./components/HelloWorld.vue";
import SiteFooter from "./components/commons/SiteFooter.vue";

export default {
  name: "App",
  components: {
    SiteHeader,
    HelloWorld,
    SiteCard,
    SiteFooter,
  },
};
</script>

<style>
/* Si prefieres definir estilos adicionales aquí */
</style>
