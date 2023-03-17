<script setup>
import {RouterView} from 'vue-router';
import router from './router';
</script>

<template>
  <div class="bg-green-600 p-5">
      <h1 class="text-3xl md:text-5xl font-bold text-center text-white">
          Vue Compositiom with Crud with API Call
      </h1>
  </div>
  <router />
<RouterView />
</template>

<style scoped>
</style>
