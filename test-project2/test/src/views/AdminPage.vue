<template>
  <section class="gradient-form min-h-screen bg-gradient-to-l from-orange-100 to-orange-200">
    <div class="h-20 bg-orange-600">
      <img
      class="mx-auto rounded-full min-[320px]:w-28 min-[960px]:w-40 w-40"
      src="../images/Pick&Go.png"
      alt="logo" />
    </div>
    <div class="p-6 lg:w-9/12 md:w-9/12 mt-11 mx-auto bg-white shadow-orange-800/40 rounded-xl shadow-md space-y-4">
        <h1 class="text-2xl font-bold mt-10 mb-4 bg-gradient-to-l from-orange-500 to-orange-800 text-transparent bg-clip-text">
          Add Restaurant
        </h1>
      <!-- Restaurant Name -->
      <div class="space-y-2">
        <label for="restaurantName" class="block text-gray-700">Restaurant Name</label>
        <input v-model="restaurant.name" id="restaurantName" type="text" class="w-full p-2 border rounded-md" placeholder="Enter restaurant name">
      </div>
      <!-- Restaurant Address -->
      <div class="space-y-2">
        <label for="restaurantAddress" class="block text-gray-700">Address</label>
        <input v-model="restaurant.address" id="restaurantAddress" type="text" class="w-full p-2 border rounded-md" placeholder="Enter restaurant address">
      </div>
      <!-- Restaurant Phone -->
      <div class="space-y-2">
        <label for="restaurantPhone" class="block text-gray-700">Phone Number</label>
        <input v-model="restaurant.phone" id="restaurantPhone" type="text" class="w-full p-2 border rounded-md" placeholder="Enter restaurant phone number">
        <p v-if="phoneWarning" class="text-red-600 text-sm">{{ phoneWarning }}</p>
      </div>
      <!-- Restaurant Logo -->
      <div class="space-y-2">
        <label for="restaurantLogo" class="block text-gray-700">Restaurant Logo</label>
        <!-- <input @change="onFileChange" id="restaurantLogo" type="file" class="w-full p-2 border rounded-md" /> -->
        <input
        type="file"
        @change="onFileChange"
        className="
        text-sm text-white file:rounded-md file:w-28 file:h-10
        file:mr-5 file:py-1 file:px-3 file:border-none
        file:font-medium
        file:bg-gradient-to-tr from-orange-700 to-orange-400 file:text-white
        hover:file:cursor-pointer 
        hover:file:text-black"
        />
        <img v-if="restaurant.logo" :src="restaurant.logo" alt="Restaurant Logo" class="mt-2 h-24 w-24 object-cover rounded-full"/>
      </div>
      <button @click="openOwnerModal" class="mt-6 w-full p-3 bg-gradient-to-tr from-orange-700 to-orange-400 text-white rounded-md">Add Restaurant</button>
      <!-- Display Added Restaurants -->
      <div v-show="restaurants.length" class="mt-10">
        <h2 class="text-xl font-bold mb-4 bg-gradient-to-l from-orange-500 to-orange-800 text-transparent bg-clip-text">Added Restaurants</h2>
        <ul class="flex flex-wrap gap-y-5 gap-x-64 overflow-y-auto h-52 min-[320px]:justify-center md:justify-start xl:gap-x-10">
          <li v-for="restaurant in restaurants" :key="restaurant.name" class="bg-white p-4 border rounded-md shadow-lg shadow-orange-800/40 hover:shadow-orange-950/40 min-[320px]:w-80 min-[960px]:w-96 w-96">
            <!-- Restaurant Logo in top-right -->
            <img v-if="restaurant.logo" :src="restaurant.logo" alt="Restaurant Logo" class="rounded-full w-20 m-auto"/>
            <!-- Restaurant Info -->
            <h3 class="text-lg font-semibold bg-gradient-to-l from-orange-500 to-orange-800 text-transparent bg-clip-text">{{ restaurant.name }}</h3>
            <div class="flex flex-wrap lg:gap-2">
              <p><strong>Address:</strong> {{ restaurant.address }}</p>
              <p><strong>Phone:</strong> {{ restaurant.phone }}</p>
            </div>
            <div class="mt-2">
              <h3 class="text-lg font-semibold bg-gradient-to-l from-orange-500 to-orange-800 text-transparent bg-clip-text">Owner</h3>
              <div class="flex flex-wrap gap-x-8">
                <p><strong>Email:</strong> {{ restaurant.owner.email }}</p>
                <p><strong>Gender:</strong> {{ restaurant.owner.gender }}</p>
                <p><strong>Username:</strong> {{ restaurant.owner.username }}</p>
                <p><strong>Password:</strong> {{ restaurant.owner.password }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
  </div>
    <!-- Owner Information Modal -->
    <div v-show="showOwnerModal" class=" min-h-full fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">
      <div class="bg-white p-6 rounded-md shadow-lg shadow-orange-800/40 hover:shadow-orange-950/40 sm:w-96 lg:w-2/5 md:w-1/2">
        <h2 class="text-xl font-semibold mb-4 bg-gradient-to-l from-orange-500 to-orange-800 inline-block text-transparent bg-clip-text">Owner Information</h2>
        <!-- Owner Email -->
        <div class="space-y-2">
          <label for="ownerEmail" class="mt-3 block text-gray-700">Owner Email</label>
          <input v-model="restaurant.owner.email" id="ownerEmail" type="email" class="w-full p-2 border rounded-md border-orange-300" placeholder="Enter owner email">
          <p v-if="emailWarning" class="text-red-600 text-sm">{{ emailWarning }}</p>
        </div>
        <!-- Owner Gender -->
        <div class="space-y-2">
          <label for="ownerGender" class="mt-3 block text-gray-700">Gender</label>
          <select v-model="ownerGender" id="ownerGender" class="mt-6 w-full p-2 rounded-md border border-orange-300 bg-transparent">
            <option value="" disabled>Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <!-- Owner Username -->
        <div class="space-y-2">
          <label for="ownerUsername" class="mt-3 block text-gray-700">Username</label>
          <input v-model="restaurant.owner.username" id="ownerUsername" type="text" class="w-full p-2 border rounded-md border-orange-300" placeholder="Enter owner username">
        </div>
        <!-- Owner Password -->
        <div class="space-y-2">
          <label for="ownerPassword" class="mt-3 block text-gray-700">Password</label>
          <input v-model="restaurant.owner.password" id="ownerPassword" type="password" class="w-full p-2 border rounded-md border-orange-300" placeholder="Enter owner password">
          <p v-show="passwordWarning" class="text-red-600 text-sm">{{ passwordWarning }}</p>
        </div>
        <div class="mt-4 flex justify-end">
          <button @click="addRestaurant" class="w-32 mr-2 p-2 bg-gradient-to-tr from-orange-700 to-orange-400 text-white rounded-md">Done</button>
          <button @click="closeOwnerModal" class="w-32 p-2 bg-gradient-to-tr from-orange-700 to-orange-400 text-white rounded-md">Cancel</button>
        </div>
      </div>
    </div>
    <!-- Success Message Modal -->
    <div v-show="showSuccessModal" class="min-h-full fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">
      <div class="bg-white p-6 rounded-md shadow-lg shadow-orange-800/40 hover:shadow-orange-950/40 sm:w-96 lg:w-2/5 md:w-1/2">
        <h2 class="text-xl font-semibold mb-4 bg-gradient-to-l from-orange-500 to-orange-800 text-transparent bg-clip-text">Restaurant Added Successfully</h2>
        <p><strong>Restaurant:</strong> {{ latestRestaurantName }}</p>
        <p><strong>Owner:</strong> {{ latestOwnerName }}</p>
        <button @click="closeSuccessModal" class="mt-4 w-full p-3 bg-gradient-to-tr from-orange-700 to-orange-400 text-white rounded-md">Close</button>
      </div>
    </div>
  </section>
</template>
  
<script setup>
  import { ref, watch } from 'vue';
  const restaurant = ref({
    name: '',
    address: '',
    phone: '',
    logo: '',
    owner: {
      email: '',
      gender: '',
      username: '',
      password: ''
    }
  });
  const restaurants = ref([]);
  const latestRestaurantName = ref('');
  const latestOwnerName = ref('');
  const showOwnerModal = ref(false);
  const showSuccessModal = ref(false);
  const passwordWarning = ref('');
  const emailWarning = ref('');
  const phoneWarning = ref('');
  // Watcher for owner password validation
  watch(() => restaurant.value.owner.password, (newPassword) => {
    if (newPassword.length < 8) {
      passwordWarning.value = 'Password must be at least 8 characters long';
    } else {
      passwordWarning.value = '';
    }
  });
  // Watcher for owner email validation
  watch(() => restaurant.value.owner.email, (newEmail) => {
    if (!newEmail.endsWith('@gmail.com')) {
      emailWarning.value = 'Email must end with @gmail.com';
    } else {
      emailWarning.value = '';
    }
  });
  // Watcher for restaurant phone validation
  watch(() => restaurant.value.phone, (newPhone) => {
    const phonePattern = /^[0-9]{11}$/;
    if (!phonePattern.test(newPhone)) {
      phoneWarning.value = 'Phone number must be 11 digits and contain only numbers';
    } else {
      phoneWarning.value = '';
    }
  });
  const openOwnerModal = () => {
    if (restaurant.value.name && restaurant.value.address && restaurant.value.phone) {
      showOwnerModal.value = true;
    } else {
      alert('Please fill out all restaurant details');
    }
  };
  const addRestaurant = () => {
    // Check if there are validation warnings before proceeding
    if (!emailWarning.value && !phoneWarning.value && !passwordWarning.value) {
      // Add the restaurant to the list
      restaurants.value.push({ ...restaurant.value });
      // Update latest restaurant and owner names
      latestRestaurantName.value = restaurant.value.name;
      latestOwnerName.value = restaurant.value.owner.username;
      // Show success modal
      showSuccessModal.value = true;
      // Clear form
      restaurant.value = {
        name: '',
        address: '',
        phone: '',
        logo: '',
        owner: {
          email: '',
          gender: '',
          username: '',
          password: ''
        }
      };
      // Close owner modal
      closeOwnerModal();
    } else {
      alert('Please correct the validation errors before adding the restaurant.');
    }
  };
  const closeOwnerModal = () => {
    showOwnerModal.value = false;
  };
  const closeSuccessModal = () => {
    showSuccessModal.value = false;
  };
  const onFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        restaurant.value.logo = reader.result;
      };
      reader.readAsDataURL(file);
    }
  };
  </script>
  