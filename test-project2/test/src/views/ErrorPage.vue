<!-- ErrorPage.vue -->
<template>
    <div class="error-page min-h-screen flex flex-col items-center justify-center bg-orange-100">
      <h1 class="text-5xl font-bold text-red-600 mb-4">404 - Page Not Found</h1>
      <p class="text-xl text-gray-700 mb-6">Oops! The page you are looking for does not exist.</p>
      <router-link to="/" class="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600">
        Go to Home
      </router-link>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  /* Additional styling can be added here */
  </style>
  