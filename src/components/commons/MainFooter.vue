<template>
  <footer>
    <div class="bg-slate-800 h-16 text-white p-4">
      <div class="container mx-auto flex justify-between items-start">
        <h1 class="text-xl font-bold">{{ title }}</h1>
        <nav>
          <ul class="flex space-x-4">
            <li><a href="#" class="hover:underline">About</a></li>
            <li><a href="#" class="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'MainFooter',
  data() {
    return {
      title: 'MainFooter'
    }
  }
}
</script>
