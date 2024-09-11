<template>
    <div class=" min-h-full fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">
        <div class="bg-white p-6 rounded-md shadow-lg shadow-orange-800/40 hover:shadow-orange-950/40 sm:w-96 lg:w-2/5 md:w-2/3">
            <span @click="Cancel" class="float-right cursor-pointer">
                <svg class="h-6 w-6 text-orange-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="15" y1="9" x2="9" y2="15" />  <line x1="9" y1="9" x2="15" y2="15" /></svg>
            </span>            
            <img
                class="m-auto w-1/3 rounded-full"
                src="../images/pic2.png"
                alt="logo" />
            <h1 class="text-lg mt-5 font-bold bg-gradient-to-l from-orange-500 to-orange-600 text-transparent bg-clip-text">
                Your Choice Of Size : 
            </h1>
            <div class="flex flex-wrap gap-y-4 justify-around mt-5">
                <div class="flex flex-wrap items-center w-full md:w-[30%] lg:w-[30%] xl:w-[22%] border-2 border-orange-300 rounded-md p-3">
                    <input v-model="selectSize" id="SmallSize" type="radio" name="list-radio" value="SmallSize" class="ml-auto w-4 h-4 accent-orange-600 bg-gray-100 rounded-lg dark:bg-gray-600">
                    <label for="SmallSize" class="w-full text-lg font-medium text-black">Small Size </label>
                    <p>+EGP 50</p>
                </div>
                <div class="flex flex-wrap items-center w-full md:w-[30%] lg:w-[30%] xl:w-[22%] border-2 border-orange-300 rounded-md p-3">
                    <input v-model="selectSize" id="MediumSize" type="radio" name="list-radio" value="MediumSize" class="ml-auto w-4 sm:w-4 h-4 accent-orange-600 bg-gray-100 rounded-lg dark:bg-gray-600">
                    <label for="MediumSize" class="w-full text-lg font-medium text-black">Medium Size </label>
                    <p>+EGP 150</p>
                </div>
                <div class="flex flex-wrap items-center w-full md:w-[30%] lg:w-[30%] xl:w-[22%] border-2 border-orange-300 rounded-md p-3">
                    <input v-model="selectSize" id="LargeSize" type="radio" name="list-radio" value="LargeSize" class="ml-auto w-4 sm:w-4 h-4 accent-orange-600 bg-gray-100 rounded-lg dark:bg-gray-600">
                    <label for="LargeSize" class="w-full text-lg font-medium text-black">Large Size </label>
                    <p>+EGP 100</p>
                </div>
            </div>
            <div v-if="errorMessage" class="text-red-700 text-center">{{ errorMessage }}</div>
            <h1 class="text-lg mt-5 font-bold bg-gradient-to-l from-orange-500 to-orange-600 text-transparent bg-clip-text">
                Add Item : 
            </h1>
            <div class="flex w-full justify-between">
                <div class="flex flex-wrap justify-around items-center h-[50px] w-[25%] mt-5 bg-white rounded-md shadow-lg shadow-orange-800/40 hover:shadow-orange-950/40">
                    <button @click="removeItem">
                        <svg class="h-6 w-6 text-orange-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <line x1="5" y1="12" x2="19" y2="12" /></svg>
                    </button>
                    <span>{{ countItem }}</span>
                    <button @click="addItem">
                        <svg class="h-6 w-6 text-orange-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                        </svg>
                    </button>
                </div>
                <button @click="total" class="w-[70%] h-[50px] text-left flex mt-5 p-3 bg-gradient-to-tr from-orange-700 to-orange-400 text-white rounded-md">
                    <span class="w-[70%]">Total Price</span> 
                    <span>{{ totalPrice }} EGP</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { defineEmits, ref, watch } from "vue";

    const emits = defineEmits(['Cancel']);
    const selectSize = ref(null);
    const totalPrice = ref(0);
    const countItem = ref(0);
    const errorMessage = ref('');

    // Count Item
    const addItem = () => {
      countItem.value++;
    };

    const removeItem = () => {
      if (countItem.value > 0) {
        countItem.value--;
      }
    };

    // Watch changes to selectSize and countItem 
    watch([selectSize,countItem], (newSize) => {
      if (!newSize) {
        errorMessage.value = 'Please Select Size';
        totalPrice.value = 0; 
      } else {
        updateTotalPrice();
        errorMessage.value = ''; 
      }
    });
    // function to update total price
    const updateTotalPrice = () => {
      const sizePrice = selectSize.value === 'SmallSize' ? 50 
                      : selectSize.value === 'MediumSize' ? 150 
                      : selectSize.value === 'LargeSize' ? 100 
                      : 0; // Default to 0 if size is not recognized

      totalPrice.value = countItem.value * sizePrice;
    };

    // Cancel
    const Cancel = () => {
      emits("Cancel");
    };
</script>
