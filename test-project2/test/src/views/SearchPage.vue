<template>
    <section class="gradient-form min-h-screen bg-gradient-to-l from-orange-100 to-orange-200">
        <!-- Nav -->
        <div class="w-screen h-20 text-white bg-orange-600 flex fixed top-0 left-0 z-50">
            <h2 @click="HomePage" class="cursor-pointer self-center m-auto text-amber-300 hover:text-black">Home</h2>
            <img
                class="sm:m-auto ml-auto rounded-full min-[320px]:w-28 min-[960px]:w-40 w-40 h-40"
                src="../images/Pick&Go.png"
                alt="logo" />
            <div class="m-auto flex gap-x-32">
                <svg class="w-8 h-8 text-white hover:text-black self-center m-auto cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M4 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .979.796L7.939 6H19a1 1 0 0 1 .979 1.204l-1.25 6a1 1 0 0 1-.979.796H9.605l.208 1H17a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L5.686 5H5a1 1 0 0 1-1-1Z" clip-rule="evenodd"/>
                </svg>
                <svg class="w-8 h-8 text-white hover:text-black self-center m-auto cursor-pointer" aria-hidden="true" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                   <path fill-rule="evenodd" clip-rule="evenodd" d="M5.07868 5.06891C8.87402 1.27893 15.0437 1.31923 18.8622 5.13778C22.6824 8.95797 22.7211 15.1313 18.9262 18.9262C15.1312 22.7211 8.95793 22.6824 5.13774 18.8622C2.87389 16.5984 1.93904 13.5099 2.34047 10.5812C2.39672 10.1708 2.775 9.88377 3.18537 9.94002C3.59575 9.99627 3.88282 10.3745 3.82658 10.7849C3.4866 13.2652 4.27782 15.881 6.1984 17.8016C9.44288 21.0461 14.6664 21.0646 17.8655 17.8655C21.0646 14.6664 21.046 9.44292 17.8015 6.19844C14.5587 2.95561 9.33889 2.93539 6.13935 6.12957L6.88705 6.13333C7.30126 6.13541 7.63535 6.47288 7.63327 6.88709C7.63119 7.3013 7.29372 7.63539 6.87951 7.63331L4.33396 7.62052C3.92269 7.61845 3.58981 7.28556 3.58774 6.8743L3.57495 4.32874C3.57286 3.91454 3.90696 3.57707 4.32117 3.57498C4.73538 3.5729 5.07285 3.907 5.07493 4.32121L5.07868 5.06891Z" fill="#ffffff"></path> 
                   <path opacity="0.5" d="M12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V11.6893L15.0303 13.9697C15.3232 14.2626 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2626 15.3232 13.9697 15.0303L11.5429 12.6036C11.3554 12.416 11.25 12.1617 11.25 11.8964V8C11.25 7.58579 11.5858 7.25 12 7.25Z" fill="#ffffff"></path>
                </svg>
            </div>
        </div>
        <div class="lg:w-9/12 md:w-9/12 h-screen mx-auto bg-white rounded-xl shadow-md shadow-orange-800/40"> 
            <!-- Header -->
            <div class="w-full h-[60%] font-bold font-serif bg-local bg-center bg-[url('../images/plate.png')]">
                <div class="flex flex-col justify-center items-center h-[100%] w-full">
                    <h2 class="text-[40px]">
                        Order Take-Out
                    </h2>
                    <p>
                        Find restaurant, specials, and coupons for free
                    </p>
                    <form @submit.prevent="handleSubmit" class="w-full sm:w-[50%] px-4 mt-5">
                        <div class="relative">
                            <input 
                                v-model="query" 
                                @input="filterSuggestions" 
                                placeholder="Find Your Restaurant" 
                                type="text" 
                                class="w-full border-none h-12 shadow p-4 rounded-full dark:text-gray-800 outline-none"
                            >
                            <button type="submit">
                                <svg class="h-5 w-5 absolute top-3.5 right-3 fill-current dark:text-orange-500"
                                     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
                                     x="0px" y="0px" viewBox="0 0 56.966 56.966"
                                     style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve">
                                     <path
                                         d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z">
                                     </path>
                                </svg>
                            </button>
                            <!-- Suggestions list -->
                            <ul v-if="filteredSuggestions.length > 0" class="absolute w-full border border-gray-300 bg-white rounded-lg mt-1 z-10">
                                <li
                                    v-for="suggestion in filteredSuggestions"
                                    :key="suggestion"
                                    @click="selectSuggestion(suggestion)"
                                    class="p-2 cursor-pointer hover:bg-gray-100"
                                >
                                    {{ suggestion }}
                                </li>
                            </ul>
                        </div>
                    </form>
                </div>
            </div>
            <!-- Main -->
            <div class="w-[100%] h-[320px] m-auto mt-5 overflow-y-auto">
                <div class="flex flex-col items-center w-full mt-5">
                    <h1 class="text-[40px] bg-gradient-to-l from-orange-500 to-orange-600 text-transparent bg-clip-text">
                        Choose Your Restaurant
                    </h1>
                    <p>
                        The easiest way to your favourite food
                    </p>
                </div>
                <!-- Resturants -->
                <div class="w-full mt-10">
                    <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center items-center">
                        <RouterLink
                            v-for="(restaurant, index) in restaurants"
                            :key="index"
                            :to="restaurant.route"
                        >
                            <img
                                :src="restaurant.logo"
                                :alt="restaurant.name"
                                class="w-44 h-44 rounded-full shadow-lg hover:opacity-80 transition duration-700 ease-in-out hover:scale-125"
                            />
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'  // Import router for navigation
import mcdonaldsLogo from '../images/mac.png'
import kfcLogo from '../images/KFC.png'
import buffaloBurgerLogo from '../images/buffalo.png'
import bazookaLogo from '../images/bazooka.png'
// import wendysLogo from '../images/wendys.jpg'
import dominosLogo from '../images/dominos.png'
// import tacobellLogo from '../images/tacobell.jpg'
// import subwayLogo from '../images/Subway.png'

const query = ref('')
const suggestions = ref([
    'McDonalds',
    'Kentucky Fried Chicken (KFC)',
    'Buffalo Burger',
    'Bazooka',
    'Wendys',
    'Dominos Pizza',
    'Taco Bell',
    'Subway',
])
const filteredSuggestions = ref([])

// Restaurants data with logos and routes
const restaurants = ref([
    { name: 'McDonalds', logo: mcdonaldsLogo, route: '/search/1' },
    { name: 'KFC', logo: kfcLogo, route: '/search/2' },
    { name: 'Buffalo Burger', logo: buffaloBurgerLogo, route: '/search/3',},
    { name: 'Bazooka', logo: bazookaLogo, route: '/search/4' },
    { name: 'Dominos Pizza', logo: dominosLogo, route: '/search/6' },
])

// Define router instance
const router = useRouter()

//go to Home Page
const HomePage = () => {
    router.push({ name: 'SearchPage' });
}
//go to Cart
const Cart = () => {
    router.push({ name: 'CartPage' });
}
const filterSuggestions = () => {
    if (query.value.trim() === '') {
        filteredSuggestions.value = []
    } else {
        filteredSuggestions.value = suggestions.value.filter((suggestion) =>
            suggestion.toLowerCase().includes(query.value.toLowerCase())
        )
    }
}

const selectSuggestion = (suggestion) => {
    query.value = suggestion
    filteredSuggestions.value = []
}

const handleSubmit = () => {
    if (query.value.trim()) {
        // Find the matching restaurant by name
        const matchingRestaurant = restaurants.value.find(restaurant =>
            restaurant.name.toLowerCase().includes(query.value.toLowerCase())
        )
        
        if (matchingRestaurant) {
            // Navigate to the matched restaurant route
            router.push(matchingRestaurant.route)
        } else {
            alert('Restaurant not found')
        }

        filteredSuggestions.value = []
    }
}
</script>

<!-- <style scoped>
    svg{
        color: white;
    }
</style> -->