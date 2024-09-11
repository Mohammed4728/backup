<template>
    <section class="gradient-form min-h-screen bg-gradient-to-l from-orange-100 to-orange-200">
        <!-- Header -->
        <div class="w-screen h-20 text-white bg-orange-600 flex fixed top-0 left-0 z-50">
            <h2 @click="HomePage" class="cursor-pointer self-center m-auto hover:text-black">Home</h2>
            <img
                class="sm:m-auto ml-auto rounded-full min-[320px]:w-28 min-[960px]:w-40 w-40 h-40"
                src="../images/Pick&Go.png"
                alt="logo" />
            <svg @click='Cart' class="h-8 w-8 text-white self-center m-auto cursor-pointer hover:text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="5" y="3" width="14" height="18" rx="2" />  <line x1="9" y1="7" x2="15" y2="7" />  <line x1="9" y1="11" x2="15" y2="11" />  <line x1="9" y1="15" x2="13" y2="15" /></svg>
        </div>
        <!-- main -->
        <div class="lg:w-9/12 md:w-9/12 pt-20 mx-auto bg-white shadow-orange-800/40 rounded-xl shadow-md">
        <!-- main header -->
            <div class="w-full h-[450px] relative text-2xl font-bold font-serif">
                <img
                    class="w-full h-[100%] absolute"
                    src="../images/plate.png"
                    alt="logo" />
                <h2 class="absolute top-1/3 left-1/4 w-[50%] xl:w-[30%] lg:w-[40%] md:w-[50%] sm:w-[45%] leading-loose">
                    ENJOY OUR HEALTHY FOODS ON THE GO!!!
                </h2>
            </div>
            <div class="flex flex-wrap p-20 gap-y-24 gap-x-5">
                <div @click="addMeal" class="w-full 2xl:w-[30%] xl:w-[42%] sm:w-full border-2 rounded-md border-orange-400 leading-loose p-10 shadow-lg shadow-orange-800/40 hover:shadow-orange-950/40 cursor-pointer">
                    <img
                        class="rounded-full 2xl:w-[28%] xl:w-[40%] sm:w-[25%] w-[55%] mx-auto 2xl:-mt-20 xl:-mt-24 lg:-mt-28 sm:-mt-24 -mt-24"
                        src="../images/pic2.png"
                        alt="logo" />
                    <h1 class="text-2xl pt-8 sm:pt-0 mt-5 font-bold bg-gradient-to-l from-orange-500 to-orange-600 text-transparent bg-clip-text">
                        Beef Burger Sandwich
                    </h1>
                    <p>
                        A simple delicious grilled 100% beef patty with onions, pickles and mustard all in a soft bun.
                    </p>
                    <p class="mt-5">
                        EGP <b> 50.00</b>
                    </p>
                </div>
            </div>
        </div>
        <!-- select item PopUp -->
        <SelectMeal v-show="displyItem" @Cancel='Cancel'></SelectMeal> 
    </section>
</template>
<script setup>
    import {computed, ref, watch} from 'vue';
    import {useRouter} from 'vue-router';
    import SelectMeal from "../components/SelectMeal.vue";
    const router = useRouter();
    const displyItem = ref(false);
    // const selectSize = ref(null);
    // const countItem = ref(0);
    // const totalPrice = ref(0);
    // const errorMessage = ref('');
    //go to Home Page
    const HomePage = () => {
        router.push({ name: 'SearchPage' });
    }
    //go to Cart
    const Cart = () => {
        router.push({ name: 'CartPage' });
    }
    //Add item to cart
    const addMeal = ()=>{
        displyItem.value = true;
    }
    // Cancel
    const Cancel = () =>{
        displyItem.value = false;
    }
</script>                     
