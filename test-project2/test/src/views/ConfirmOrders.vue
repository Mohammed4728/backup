<template>
    <section class="gradient-form min-h-screen bg-gradient-to-l from-orange-100 to-orange-200">
        <div class="h-20 bg-orange-600 flex flex-wrap justify-around fixed top-0 w-screen">
            <img
            class="rounded-full min-[320px]:w-28 min-[960px]:w-40 w-20 h-20 ml-10 cursor-pointer"
            src="../images/mac.png"
            alt="logo" 
            @click ="sideBar"/>
            <img
            class="m-auto rounded-full min-[320px]:w-28 min-[960px]:w-40 w-40"
            src="../images/Pick&Go.png"
            alt="logo" />
        </div>
        <div class="p-6 pt-14 lg:w-9/12 md:w-9/12 mt-11 mx-auto bg-white shadow-orange-800/40 rounded-xl shadow-md">
            <h1 class="text-2xl font-bold bg-gradient-to-l from-orange-500 to-orange-600 text-transparent bg-clip-text">
               Orders
            </h1>
            <div class="flex flex-wrap gap-10 justify-center md:justify-start">
                <!-- Orders -->
                <div v-for="(order, index) in orders" :key="order.id" class="bg-white p-4 mt-8 border rounded-md shadow-lg shadow-orange-800/40 hover:shadow-orange-950/40 min-[320px]:w-80 min-[960px]:w-96 w-96 flex flex-wrap">
                    <p><strong class="text-lg bg-gradient-to-l from-orange-500 to-orange-600 text-transparent bg-clip-text">
                        Orders ID : </strong> 
                        #{{ order.id }}
                    </p>
                    <p class="mt-4 w-full"><strong class="text-lg bg-gradient-to-l from-orange-500 to-orange-600 text-transparent bg-clip-text">
                        Description : </strong> 
                        {{ order.description }}
                    </p>
                    <p class="mt-4 w-full"><strong class="text-lg bg-gradient-to-l from-orange-500 to-orange-600 text-transparent bg-clip-text">
                        Price : </strong> 
                        {{ order.price }}
                    </p>
                    <div class="mt-4 ml-auto flex flex-wrap gap-x-4">
                        <button @click='confirm'>
                            <svg class="h-8 w-8 text-orange-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                            </svg>
                        </button>
                        <button @click="deleteOrder(index)">
                            <svg class="h-5 w-5 text-orange-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="3 6 5 6 21 6" />  
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- side bar -->
        <div v-show="showSideBar" class="w-64 h-full mt-20 bg-white fixed inset-0 rounded-md shadow-lg shadow-orange-800/40">
            <img
            class="m-auto rounded-full min-[320px]:w-28 min-[960px]:w-40 w-40"
            src="../images/mac.png"
            alt="logo" />
            <h1 class="text-2xl font-bold mt-4 text-center bg-gradient-to-l from-orange-500 to-orange-600 text-transparent bg-clip-text">
                McDonald's
            </h1>
            <div @click="MenuPage" class="text-xl pt-2 mt-10 h-12 cursor-pointer border-2 border-y-orange-200 hover:bg-orange-100 hover:border-none">
                <h2 class="ml-5">Menu</h2>
            </div>
            <div @click="OrdersPage" class="text-xl pt-2 mt-5 h-12 cursor-pointer bg-orange-100">
                <h2 class="ml-5">Orders</h2>
            </div>
        </div>
    </section>
</template>
<script setup>
    import {ref} from "vue";
    import {useRouter} from 'vue-router';
    const orders = ref([
        { id: '#2456', description: '2xl Happy Meal', price: '150' },
        { id: '#333', description: '2xl Meal', price: '250' }
    ]);
    const showSideBar = ref(false);
    const router = useRouter();
    //side bar
    const sideBar = () =>{
        showSideBar.value = !showSideBar.value;
    }
    //go to menu page
    const MenuPage = () => {
        router.push({ name: 'OwnerMenu' });
    }
    //go to order page
    const OrdersPage = () =>{
        router.push({ name: 'ConfirmOrders' });
    }
    const deleteOrder = (index)=>{
        orders.value.splice(index, 1);
    };
</script>
