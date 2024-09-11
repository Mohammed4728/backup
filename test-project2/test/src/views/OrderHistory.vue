<template>
    <section class="gradient-form min-h-screen bg-gradient-to-l from-orange-100 to-orange-200 overflow-x-hidden">
      <!-- Header Section -->
      <div class="w-screen h-20 text-white bg-orange-600 flex">
        <h2 @click="goToHomePage" class="cursor-pointer self-center m-auto hover:text-black">Home</h2>
        <img
          class="sm:m-auto ml-auto rounded-full min-[320px]:w-28 min-[960px]:w-40 w-40 h-40"
          src="../images/Pick&Go.png"
          alt="logo"
        />
        <svg @click="goToCart" class="h-8 w-8 self-center m-auto cursor-pointer text-amber-300 hover:text-black" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" />
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <line x1="9" y1="7" x2="15" y2="7" />
          <line x1="9" y1="11" x2="15" y2="11" />
          <line x1="9" y1="15" x2="13" y2="15" />
        </svg>
      </div>
  
      <!-- Orders Section -->
      <div class="p-6 lg:w-9/12 md:w-9/12 mt-11 mx-auto bg-white rounded-xl shadow-md space-y-4">
        <h1 class="text-3xl font-bold mt-10 mb-4 bg-gradient-to-l from-orange-300 to-orange-600 text-transparent bg-clip-text">Order History</h1>
  
        <!-- Displaying Orders -->
        <div class="grid grid-cols-1 gap-6">
          <div v-for="order in orders" :key="order.date" class="p-4 bg-white rounded-lg shadow-lg shadow-orange-800/40 hover:shadow-orange-950/40">
            <div class="flex justify-between items-center">
              <!-- Order Information -->
              <div>
                <h1 class="text-2xl font-extrabold">{{ order.restaurantName }}</h1><br>
                <h2 class="text-m font-semibold">Order Date: {{ order.date }}</h2>
                <h2 class="text-m font-semibold">Order Items:</h2>
                <!-- Looping through orderItems -->
                <ul>
                  <li v-for="(orderItem, index) in order.orderItems" :key="index" class="text-m">{{ orderItem }}</li>
                </ul>
              </div>
  
              <!-- Delete Order Button -->
              <div>
                <button
                  @click="deleteOrder(order.date)"
                  class="group bg-transparent hover:bg-orange-400 text-orange-500 hover:text-white rounded-full p-2 shadow hover:shadow-md transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 32 32"
                    class="transition-colors duration-700"
                  >
                    <path
                      d="M 15 4 C 14.476563 4 13.941406 4.183594 13.5625 4.5625 C 13.183594 4.941406 13 5.476563 13 6 L 13 7 L 7 7 L 7 9 L 8 9 L 8 25 C 8 26.644531 9.355469 28 11 28 L 23 28 C 24.644531 28 26 26.644531 26 25 L 26 9 L 27 9 L 27 7 L 21 7 L 21 6 C 21 5.476563 20.816406 4.941406 20.4375 4.5625 C 20.058594 4.183594 19.523438 4 19 4 Z M 15 6 L 19 6 L 19 7 L 15 7 Z M 10 9 L 24 9 L 24 25 C 24 25.554688 23.554688 26 23 26 L 11 26 C 10.445313 26 10 25.554688 10 25 Z M 12 12 L 12 23 L 14 23 L 14 12 Z M 16 12 L 16 23 L 18 23 L 18 12 Z M 20 12 L 20 23 L 22 23 L 22 12 Z"
                      class="group-hover:fill-white fill-orange-500 transition-colors duration-700"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Confirm Button -->
        <div v-if="orders.length > 0" class="flex justify-end mt-6">
          <button @click="confirmOrders" class="bg-orange-500 text-white py-2 px-4 rounded-lg">Confirm Orders</button>
        </div>
  
        <!-- Order Confirmation Modal -->
        <div v-if="showModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <h2 class="text-2xl font-bold mb-4">Order Confirmation</h2>
            <p>Your orders have been confirmed.</p>
            <div class="flex justify-end mt-6">
              <button @click="closeModal" class="bg-orange-500 text-white py-2 px-4 rounded-lg">Close</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  // Static data with multiple items per order
  const orders = ref([
    {
      restaurantName: 'McDonalds',
      date: '2024-09-01',
      orderItems: ['Big Mac Meal', 'Fries', 'Coke'], // List of ordered items
    },
    {
      restaurantName: 'KFC',
      date: '2024-09-02',
      orderItems: ['Zinger Box', 'Coleslaw', 'Pepsi'],
    },
    {
      restaurantName: 'Subway',
      date: '2024-09-03',
      orderItems: ['Footlong Tuna Sub', 'Cookies', 'Coke'],
    },
  ])
  
  const showModal = ref(false)
  
  // Delete an order by its date
  const deleteOrder = (orderDate) => {
    orders.value = orders.value.filter(order => order.date !== orderDate)
  }
  
  // Confirm all orders
  const confirmOrders = () => {
    showModal.value = true
  }
  
  // Close the confirmation modal
  const closeModal = () => {
    showModal.value = false
  }
  
  // Navigation functions
  const goToHomePage = () => {
    // Logic to navigate to the home page
  }
  
  const goToCart = () => {
    // Logic to navigate to the cart
  }
  </script>
  