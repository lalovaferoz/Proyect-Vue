<template>
  <div class="text-center"></div>
</template>

<script>
import api from '../services/apiService';

export default {
  name: 'SomeComponent',
  async created() {
    try {
      const response = await api.get('/endpoint');
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
};
</script>
