<template>
  <textarea v-model="src"></textarea>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'App',
  setup() {
    const src = ref('');
    onMounted(() => {
      axios.get('https://vue-api-01.herokuapp.com/api')
      // axios.get('http://localhost:3131/api')
        .then(data => {
          src.value = JSON.stringify(data.data);
          console.log(data);
        });
    });
    return {
      src,
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
