<template>
    <section class="gradient-form min-h-screen bg-gradient-to-l from-orange-400 to-orange-200">
        <div class="container h-full p-10 m-auto">
            <div 
            class="flex h-full flex-wrap items-center justify-center text-neutral-800 ">
                <div class="w-full">
                    <div
                    class="block rounded-lg bg-white shadow-lg lg:mt-20">
                    <div class="g-0 flex flex-wrap justify-center">
                        <!-- Left column container-->
                        <div class="px-4 md:px-0 lg:w-6/12">
                            <div class="md:mx-6 md:p-12">
                                <!--Logo-->
                                <div class="text-center">
                                    <img
                                    class="mx-auto w-40 rounded-full"
                                    src="../images/Pick&Go.png"
                                    alt="logo" />
                                        <h4 class="mb-12 mt-1 pb-1 text-xl font-semibold">
                                            Pick & Go
                                        </h4>
                                </div>
                                <form @submit.prevent='Login'>
                                    <!-- <p class="mb-4">Please register an account</p> -->
                                    <!-- Username input-->
                                    <div class="relative">
                                        <input
                                          v-model.trim="users.username"
                                          type="text"
                                          id="floating_outlined"
                                          placeholder=" "
                                          class="w-full lg:w-full sm:w-96 max-[640px]:w-full block mb-4 px-2.5 pb-2.5 pt-4 text-sm text-gray-900 bg-transparent rounded-lg border-2 appearance-none dark:text-black dark:border-orange-300 dark:focus:border-orange-600 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                                        />
                                        <label
                                          for="floating_outlined"
                                          class="absolute text-[16px] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-0 left-3 z-10 origin-[0] bg-white px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-[1.15rem] peer-placeholder-shown:left-3 peer-focus:top-[-0.75rem] peer-focus:scale-75 peer-focus:-translate-y-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500"
                                        >
                                          Username
                                        </label>
                                    </div>
                                    <!--Password-->
                                    <div class="relative">
                                        <input 
                                        v-model.trim="users.password"
                                        :type="passwordVisible ? 'text' : 'password'" 
                                        id="floating_outlined" 
                                        class="w-full lg:w-full sm:w-96 max-[640px]:w-full block mb-4 px-2.5 pb-2.5 pt-4 text-sm text-gray-900 bg-transparent rounded-lg border-2 appearance-none dark:text-black dark:border-orange-300 dark:focus:border-orange-600 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                                        placeholder=""
                                        />
                                        <label for="floating_outlined" class="absolute text-[16px] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-0 left-3 z-10 origin-[0] bg-white px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-[1.15rem] peer-placeholder-shown:left-3 peer-focus:top-[-0.75rem] peer-focus:scale-75 peer-focus:-translate-y-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500">
                                            Password
                                        </label>
                                    </div>
                                    <div class="w-full lg:text-start md:text-center">
                                            <input type="checkbox" v-model="passwordVisible" class="accent-orange-500/25 w-4 h-4" />
                                            <label class="ml-2"
                                            v-if="!passwordVisible ? show = 'Show' : show = 'Hidden'"
                                            >
                                                {{show}} Password
                                            </label>
                                        </div>
                                    <div v-if="errorMessage" class = "text-red-700 text-center">{{ errorMessage }}</div>
                                    <!--Submit button-->
                                    <div class="mb-12 pb-1 pt-1 text-center">
                                        <button
                                        class="bg-gradient-to-tr from-orange-700 to-orange-400 mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-dark-3 transition duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:shadow-dark-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                                        type="submit"
                                        data-twe-ripple-init
                                        data-twe-ripple-color="light"
                                        style="">
                                            Login
                                        </button>
                                        <!--Forgot password link-->
                                        <!-- <a href="#!">Terms and conditions</a> -->
                                   </div>
                                    <!--Register button-->
                                    <div class="flex items-center justify-between pb-6">
                                        <p class="mb-0 me-2">Don't have an account?</p>
                                        <RouterLink to="/sign-up"
                                        type="button"
                                        class="max-[640px]:w-32 max-[640]:h-10 inline-block rounded bg-gradient-to-r from-orange-700 to-orange-400 border-none border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-danger-50/50 hover:text-danger-600 focus:border-danger-600 focus:bg-danger-50/50 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700"
                                        data-twe-ripple-init
                                        data-twe-ripple-color="light">
                                            Sign Up
                                        </RouterLink>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <!-- Right column container with background and description-->
                        <div
                        class="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-e-lg lg:rounded-bl-none lg:order-last sm:order-first md:order-first order-first"
                        style="background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)">
                            <img class="h-full w-screen" src="../images/background.jpg" alt="image description">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
</template>
<script setup>
    import {ref} from 'vue';
    import {useRouter} from 'vue-router';
    import axios from "axios";
    // Reactive variables for form data
    const users = ref({
        username: '',
        password: ''
    })
    // const username = ref('');
    // const password = ref('');
    const errorMessage = ref('');
    const passwordVisible = ref(false); 
    const router = useRouter();
    let show = ref('');

    // Handle login submission
    const Login = () => {
        axios
        .post("https://fakestoreapi.com/auth/login", {
            ...users.value
        })
        .then((res) => {
            console.log(res);
            localStorage.setItem("token", res.data.token);
        })
        .catch((err) => {
            console.log(err);
        });
        if (validate()) {
            router.push({ name: 'SearchPage' });
        }
    };
    // Simple form validation
    const validate = () => {
        if (!users.value.username || !users.value.password) {
            errorMessage.value = 'Please fill in both fields.';
            return false;
        }
        errorMessage.value = '';
        return true;
    };
</script>
