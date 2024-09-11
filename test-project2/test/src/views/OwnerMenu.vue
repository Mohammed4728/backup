<template>
    <section class="gradient-form min-h-screen bg-gradient-to-l from-orange-100 to-orange-200">
        <div class="h-20 bg-orange-600 flex flex-wrap justify-around">
            <img
            class="rounded-full min-[320px]:w-28 min-[960px]:w-40 w-20 h-20 ml-10 cursor-pointer"
            src="../images/mac.png"
            alt="logo" 
            @click ="sideBar"/>
            <img
            class="sm:m-auto ml-auto rounded-full min-[320px]:w-28 min-[960px]:w-40 w-40"
            src="../images/Pick&Go.png"
            alt="logo" />
        </div>
        <div class="p-6 pt-14 lg:w-9/12 mt-11 sm:h-[900px] lg:h-auto xl:h-[700px] mx-auto bg-white shadow-orange-800/40 rounded-xl shadow-md bg-cover bg-center bg-[url('../images/menu.png')]">
            <div class="w-full flex flex-wrap gap-x-4 self-start">
                <h1 class="text-2xl font-bold bg-gradient-to-l from-orange-500 to-orange-600 text-transparent bg-clip-text">
                   McDonald's Menu
                </h1>
                <button @click="openOwnerModal" class="rounded-full">
                    <svg class="h-8 w-8 text-orange-600"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="12" y1="8" x2="12" y2="16" />  <line x1="8" y1="12" x2="16" y2="12" /></svg>
                </button>
            </div>
            <!-- Display Menu -->
            <div class="w-[100%] h-[500px] m-auto mt-5 overflow-x-auto overflow-y-auto rounded-md shadow-lg shadow-orange-800/40 hover:shadow-orange-950/40 backdrop-blur-md">
                <table class="w-full text-black text-left">
                    <thead class="text-xl bg-gradient-to-l from-orange-500 to-orange-800 md:gap-x-28">
                        <tr>
                            <th scope="col" class="px-6 py-3 text-center">
                                Name
                            </th>
                            <th scope="col" class="">
                                S
                            </th>
                            <th scope="col" class="">
                                M
                            </th>
                            <th scope="col" class="">
                                L
                            </th>
                            <th scope="col" class="">
                                <span class="sr-only">Delete</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody class="text-[15px]">
                        <MenuList v-for="(meal, index) in menu" :key="index"
                            :meal ='meal' :i ='index' :list ='menu'
                            :meals ='meals'
                            @deleteMeal ='deleteMeal'
                        ></MenuList> 
                    </tbody>
                </table>
            </div>
        </div>
        <!-- PopUp Add Menu item -->
        <div v-show="showMealModal" class=" min-h-full fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">
            <div class="bg-white p-6 rounded-md shadow-lg shadow-orange-800/40 hover:shadow-orange-950/40 sm:w-96 xl:w-2/5 md:w-8/12">
                <h2 class="text-xl font-semibold mb-4 mt-5 bg-gradient-to-l from-orange-500 to-orange-800 inline-block text-transparent bg-clip-text">Add Meal</h2>
                <!-- Add Meal -->
                <div class="flex flex-wrap gap-x-12">
                    <label for="meal" class="mt-3 text-gray-700">Meal Name:</label>
                    <input v-model="meals.name" id="meal" type="text" class=" w-full md:w-2/3 p-2 border rounded-md border-orange-300" placeholder="Enter Meal Name">
                    <p v-if="errors.NameWarning" class="text-red-600 text-sm m-auto">{{ errors.NameWarning }}</p>
                </div>
                <!-- Description -->
                 <div class="flex flex-wrap gap-x-3 mt-5">
                    <label for="meal description" class="mt-3 text-gray-700">Meal Description:</label>
                    <textarea v-model="meals.description" id="meal" type="text" class=" w-full md:w-2/3 p-2 border rounded-md border-orange-300" placeholder="Enter Meal Description"></textarea>
                    <p v-if="errors.descriptionWarning" class="text-red-600 text-sm m-auto">{{ errors.descriptionWarning }}</p>
                </div>
                <!-- Price -->
                <h2 class="text-xl font-semibold mb-4 mt-5 bg-gradient-to-l from-orange-500 to-orange-800 inline-block text-transparent bg-clip-text">Meal Price</h2>
                <!-- Small Size Price -->
                <div class="flex flex-wrap gap-x-14">
                    <label for="SmallSize" class="mt-3 text-gray-700">Small Size:</label>
                    <input v-model="meals.small" id="SmallSize" type="text" class="w-full md:w-2/3 p-2 border rounded-md border-orange-300" placeholder="Enter Price For Small Size">
                    <p v-if="errors.SmallPriceWarning" class="text-red-600 text-sm m-auto">{{ errors.SmallPriceWarning }}</p>
                </div>
                <!-- Medium Size Price -->
                <div class="flex flex-wrap gap-x-9 mt-6">
                    <label for="MediumSize" class="mt-3 text-gray-700">Medium Size:</label>
                    <input v-model="meals.medium" id="MediumSize" type="text" class="w-full md:w-2/3 p-2 border rounded-md border-orange-300" placeholder="Enter Price For Medium Size">
                    <p v-if="errors.MediumPriceWarning" class="text-red-600 text-sm m-auto">{{ errors.MediumPriceWarning }}</p>
                </div>
                <!-- Large Size Price -->
                <div class="flex flex-wrap gap-x-14 mt-6">
                    <label for="LargeSize" class="mt-3 text-gray-700">Large Size:</label>
                    <input v-model="meals.large" id="LargeSize" type="text" class="w-full md:w-2/3 p-2 border rounded-md border-orange-300" placeholder="Enter Price For Large Size">
                    <p v-if="errors.LargePriceWarning" class="text-red-600 text-sm m-auto">{{ errors.LargePriceWarning }}</p>
                </div>
                <!-- Meal image -->
                <div class="mt-8 flex flex-wrap">
                    <label for="mealImg" class="block text-gray-700">Meal Image</label>
                    <input
                        type="file"
                        @change="onFileChange"
                        className="
                        text-sm text-white file:rounded-md file:w-28 file:h-10
                        file:mr-5 file:py-1 file:px-3 file:border-none
                        file:font-medium
                        file:bg-gradient-to-tr from-orange-700 to-orange-400 file:text-white
                        hover:file:cursor-pointer 
                        hover:file:text-black ml-10"
                    />
                    <img v-if="meals.img" :src="meals.img" class="mt-2 h-24 w-24 object-cover rounded-full"/>
                    <p v-if="errors.ImgWarning" class="text-red-600 text-sm m-auto mt-2">{{ errors.ImgWarning }}</p>
                </div>
                <p v-if="errors.mWarning" class="text-red-600 text-sm m-auto mt-2">{{ errors.mWarning }}</p>
                <div class="mt-4 flex justify-end">
                    <button @click="addMeal" class="w-32 mr-2 p-2 bg-gradient-to-tr from-orange-700 to-orange-400 text-white rounded-md">Done</button>
                    <button @click="closeMealModal" class="w-32 p-2 bg-gradient-to-tr from-orange-700 to-orange-400 text-white rounded-md">Cancel</button>
                </div>
            </div>
        </div>
        <!-- side bar -->
        <div v-show="showSideBar" :class="['sidebar', showSideBar ? 'block' : 'hidden', 'lg:block']" class="sm:`${showSideBar ? 'true' : 'false'}` w-64 h-full mt-20 bg-white fixed inset-0 rounded-md shadow-lg shadow-orange-800/40">
            <img
            class="m-auto rounded-full min-[320px]:w-28 min-[960px]:w-40 w-40"
            src="../images/mac.png"
            alt="logo" />
            <h1 class="text-2xl font-bold mt-4 text-center bg-gradient-to-l from-orange-500 to-orange-600 text-transparent bg-clip-text">
                McDonald's
            </h1>
            <div @click="MenuPage" class="text-xl pt-2 mt-10 h-12 cursor-pointer bg-orange-100">
                <h2 class="ml-5">Menu</h2>
            </div>
            <div @click="OrdersPage" class="text-xl pt-2 mt-5 h-12 cursor-pointer border-2 border-y-orange-200 hover:bg-orange-100 hover:border-none">
                <h2 class="ml-5">Orders</h2>
            </div>
            <!-- <div @click="changePassword" class="text-xl mt-5 h-12 cursor-pointer border-2 border-y-orange-200 hover:bg-orange-100 hover:border-none">
                <h2 class="ml-5">Change Password</h2>
            </div> -->
        </div>
        <!-- Change Password -->
        <!-- <div v-show="showChangePassword" class=" min-h-full fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">
            <div class="bg-white p-6 rounded-md shadow-lg shadow-orange-800/40 hover:shadow-orange-950/40 sm:w-96 lg:w-2/5 md:w-1/2"> -->
                <!-- Old Password -->
                <!-- <div class="relative">
                    <label 
                    for="floating_outlined"
                    class="block text-gray-700">Old Password</label>
                    <input
                    id="floating_outlined"
                    v-model="oldPassword"
                    :type="passwordVisible ? 'text' : 'password'" class="w-full p-2 border rounded-md"
                    placeholder="Enter your old password "
                    />
                </div> -->
                <!-- New Password-->
                <!-- <div class="relative mt-4">
                    <label 
                    for="floating_outlined"
                    class="block text-gray-700">New Password</label>
                    <input
                        id="floating_outlined"
                        v-model="newPassword"
                        :type="passwordVisible ? 'text' : 'password'" class="w-full p-2 border rounded-md"
                        placeholder="Enter new password"
                    />
                    <p v-if="errors.newPasswordWarning" class="text-red-600 text-sm m-auto">{{ errors.newPasswordWarning }}</p>
                </div> -->
                <!-- Show Password -->
                <!-- <div class="w-full lg:text-start md:text-center mt-4">
                    <input type="checkbox" v-model="passwordVisible" class="accent-orange-500/25 w-4 h-4" /> -->
                    <!-- <button class="button" @click="toggleShow"><span class="icon is-small is-right">
                    <i class="fas" :class="{ 'fa-eye-slash': showPassword, 'fa-eye': !showPassword }"></i>
                    </span>
                    </button> -->
                    <!-- <label class="ml-2"
                    v-if="!passwordVisible ? show = 'Show' : show = 'Hidden'"
                    >
                        {{show}} Password
                    </label>
                </div>
                <div v-if="errors.errorMessage" class="text-red-700 ml-44">{{ errors.errorMessage }}</div>
                <div v-if="errors.newPasswordWarning" class="text-red-700 ml-44">{{ errors.newPasswordWarning}}</div>
                <div class="mt-4 flex justify-end">
                    <button @click="password" class="w-32 mr-2 p-2 bg-gradient-to-tr from-orange-700 to-orange-400 text-white rounded-md">Done</button>
                    <button @click="closeMealModal" class="w-32 p-2 bg-gradient-to-tr from-orange-700 to-orange-400 text-white rounded-md">Cancel</button>
                </div> -->
            <!-- </div> -->
        <!-- </div> -->
    </section>
</template>
<script setup>
    import {ref, onMounted, watch} from "vue";
    import {useRouter} from 'vue-router';
    import MenuList from "../components/MenuList.vue";
    const meals = ref({
        name: '',
        description: '',
        small: '',
        medium: '',
        large: '',
        img: ''
    });
    const router = useRouter();
    const menu = ref([]);
    const showSideBar = ref(false);
    const showChangePassword = ref(false);
    // const mWarning = ref('');
    // const errorMessage = ref('');
    // const passwordVisible = ref(false);
    // const passwords = ref({
    //     newPassword: '',
    //     oldPassword: ''
    // })
    // const newPassword = ref('');
    // const newPasswordWarning = ref('');
    // const oldPassword = ref('');
    // const priceWarning = ref('');
    const errors = ref({
        errorMessage: '',
        mWarning: '',
        NameWarning: '',
        descriptionWarning: '',
        SmallPriceWarning: '',
        MediumPriceWarning: '',
        LargePriceWarning: '',
        ImgWarning: ''
    })
    // PopUp Add Menu item 
    const showMealModal = ref(false);
    //Add Meal
    const openOwnerModal = () => {
        showMealModal.value = true;
    };
    // Validation 
    watch(() => meals.value.name, (newValue) => {
        if (!newValue) {
            errors.value.NameWarning = 'Please enter meal name'

        } else {
            errors.value.NameWarning = '';
        }
    });
    watch(() => meals.value.description, (newValue) => {
        if (!newValue) {
            errors.value.descriptionWarning = 'Please enter description of meal'

        } else {
            errors.value.descriptionWarning = '';
        }
    });
    watch(() => meals.value.small, (newValue) => {
        if (!newValue || isNaN(meals.value.small)) {
            errors.value.SmallPriceWarning = 'Please enter correct price'

        } else {
            errors.value.SmallPriceWarning = '';
        }
    });
    watch(() => meals.value.medium, (newValue) => {
        if (!newValue || isNaN(meals.value.medium)) {
            errors.value.MediumPriceWarning = 'Please enter correct price'

        } else {
            errors.value.MediumPriceWarning = '';
        }
    });
    watch(() => meals.value.large, (newValue) => {
        if (!newValue || isNaN(meals.value.large)) {
            errors.value.LargePriceWarning = 'Please enter correct price'

        } else {
            errors.value.LargePriceWarning = '';
        }
    });
    watch(() => meals.value.img, (newValue) => {
        if (!newValue) {
            errors.value.ImgWarning = 'Please enter an image'

        } else {
            errors.value.ImgWarning = '';
        }
    });
    // watch(() => passwords.value.newPassword, (newValue) => {
    //     if (newValue.length < 8) {
    //         errors.value.newPasswordWarning= 'at least 8 characters long'

    //     } else {
    //         errors.value.newPasswordWarning = '';
    //     }
    // });
    const onFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                meals.value.img = reader.result;
            };
            reader.readAsDataURL(file);
        }
    };
    //Add Meal
    const addMeal = ()=>{
        if(errors.value.NameWarning || errors.value.descriptionWarning || errors.value.SmallPriceWarning || errors.value.MediumPriceWarning || errors.value.LargePriceWarning){
            errors.value.errorMessage = 'Please fix error first.'
        }
        else if(!meals.value.name || !meals.value.small || !meals.value.medium || !meals.value.large || !meals.value.description || !meals.value.img){
            errors.value.mWarning = 'Please fill out all meal details';
        }
        // else if(isNaN(meals.value.small) || isNaN(meals.value.medium) || isNaN(meals.value.large)){
        //     errors.value.priceWarning = 'Please enter correct prize';
        // }
        else{
            errors.value.mWarning = '';
            menu.value.push({ ...meals.value });
            meals.value.name = '';
            meals.value.description = '';
            meals.value.small = '';
            meals.value.medium = '';
            meals.value.large = '';
            meals.value.img = '';
            errors.value.priceWarning = '';
            closeMealModal();
        }
        
        
    }
    const closeMealModal = () => {
        showMealModal.value = false;
        showChangePassword.value = false;
    };
    //side bar
    const sideBar = () =>{
        showSideBar.value = !showSideBar.value;
    }
    const handleResize = () => {
        if (window.innerWidth < 600) {
          showSideBar.value = false; // Automatically close if screen width is less than 600px
        }
    };
    onMounted(() => {
        window.addEventListener('resize', handleResize);
        handleResize(); // Check initial screen size on mount
    });
    //Change Password
    // const changePassword = () =>{
    //     showChangePassword.value = true;
    // }
    // const password = () =>{
    //     if(!passwords.value.oldPassword|| !passwords.value.newPassword){
    //         errors.value.errorMessage = 'Please fill out input';
    //     }
    //     else if(errors.value.newPasswordWarning){
    //         newPasswordWarning.value = 'Password must be at least 8 characters long';
    //     }
    //     else{
    //         showChangePassword.value = false;
    //         errors.value.errorMessage = '';
    //         newPasswordWarning.value = '';
    //         passwords.value.oldPassword = '';
    //         passwords.value.newPassword = '';
    //     }
    // }
    //go to menu page
    const MenuPage = () => {
        router.push({ name: 'OwnerMenu' });
    }
    //go to order page
    const OrdersPage = () =>{
        router.push({ name: 'ConfirmOrders' });
    }

</script>
