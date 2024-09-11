<template>
    <section class="gradient-form min-h-screen bg-gradient-to-l from-orange-400 to-orange-200">
        <div class="container h-full p-10 m-auto">
            <div class="flex h-full flex-wrap items-center justify-center text-neutral-800">
                <div class="min-[640px]:w-full min-[320]:w-[500px]">
                    <div class="block rounded-lg bg-white shadow-2xl lg:mt-20">
                        <div class="g-0 flex flex-wrap">
                            <!-- Left column container-->
                            <div class="px-4 md:px-0 lg:w-6/12">
                                <div class="md:mx-6 md:p-5">
                                    <!--Logo-->
                                    <div class="text-center">
                                        <img class="mx-auto w-40 rounded-full min-[320px]:w-32" src="../images/Pick&Go.png" alt="logo" />
                                        <h1 class="mb-6 mt-1 pb-1 text-xl font-semibold">Pick & Go</h1>
                                    </div>
                                    <form @submit.prevent="signUp" class="flex flex-wrap gap-x-6 sm:gap-x-20 max-[640px]:gap-x-10 md:gap-x-9 md:justify-center justify-center lg:justify-start lg:gap-x-2 xl:gap-x-4">
                                        <!-- Username input-->
                                        <div class="relative">
                                            <input
                                                id="floating_outlined"
                                                v-model.trim="users.username"
                                                type="text" class="2xl:w-72 xl:w-60 lg:w-44 min-[641px]:w-64 mt-3 block mb-4 px-2.5 pb-2.5 pt-4 text-sm text-gray-900 bg-transparent rounded-lg border-2 appearance-none dark:text-black dark:border-orange-300 dark:focus:border-orange-600 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                                                placeholder=""
                                            />
                                            <label 
                                                for="floating_outlined"
                                                class="absolute text-[15px] text-gray-500 dark:text-gray-400 duration-300 transform translate-y-[-1px] scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Username</label>
                                            <p v-if="usernameWarning" class="text-red-600 text-sm">{{ usernameWarning }}</p>
                                        </div>
                                        <!-- Phone input-->
                                        <div class="relative">
                                            <input
                                                id="floating_outlined"
                                                v-model.trim="users.phone"
                                                type="text" class="2xl:w-72 xl:w-60 lg:w-44 min-[641px]:w-64 max-[640px]:w-full mt-3 block mb-4 px-2.5 pb-2.5 pt-4 text-sm text-gray-900 bg-transparent rounded-lg border-2 appearance-none dark:text-black dark:border-orange-300 dark:focus:border-orange-600 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                                                placeholder=" "
                                            />
                                            <label 
                                            for="floating_outlined"
                                            class="absolute text-[15px] text-gray-500 dark:text-gray-400 duration-300 transform translate-y-[-1px] scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Phone Number</label>
                                            <p v-if="phoneWarning" class="text-red-600 text-sm">{{ phoneWarning }}</p>
                                        </div>
                                        <!-- Email input-->
                                        <div class="relative">
                                            <input
                                                id="floating_outlined"
                                                v-model.trim="users.email"
                                                type="text" class="2xl:w-72 xl:w-60 lg:w-44 min-[641px]:w-64 max-[640px]:w-full mt-3 block mb-4 px-2.5 pb-2.5 pt-4 text-sm text-gray-900 bg-transparent rounded-lg border-2 appearance-none dark:text-black dark:border-orange-300 dark:focus:border-orange-600 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                                                placeholder=" "
                                            />
                                            <label 
                                            for="floating_outlined"
                                            class="absolute text-[15px] text-gray-500 dark:text-gray-400 duration-300 transform translate-y-[-1px] scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Email</label>
                                            <p v-if="emailWarning" class="text-red-600 text-sm">{{ emailWarning }}</p>
                                        </div>
                                        <!-- Password input-->
                                        <div class="relative">
                                            <input
                                                id="floating_outlined"
                                                v-model="users.password"
                                                :type="passwordVisible ? 'text' : 'password'" class="2xl:w-72 xl:w-60 lg:w-44 min-[641px]:w-64 max-[640px]:w-full mt-3 block mb-4 px-2.5 pb-2.5 pt-4 text-sm text-gray-900 bg-transparent rounded-lg border-2 appearance-none dark:text-black dark:border-orange-300 dark:focus:border-orange-600 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                                                placeholder=" "
                                            />
                                            <label 
                                            for="floating_outlined"
                                            class="absolute text-[15px] text-gray-500 dark:text-gray-400 duration-300 transform translate-y-[-1px] scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Password</label>
                                            <p v-if="passwordWarning" class="text-red-600 text-sm">{{ passwordWarning }}</p>
                                        </div>
                                        <!-- Confirm Password input-->
                                        <div class="relative">
                                            <input
                                                id="floating_outlined"
                                                v-model="confirmPassword"
                                                :type="passwordVisible ? 'text' : 'password'" class="2xl:w-[590px] xl:w-[500px] lg:w-[360px] md:w-[435px] sm:w-[490px] mt-3 block mb-4 px-2.5 pb-2.5 pt-4 text-sm text-gray-900 bg-transparent rounded-lg border-2 appearance-none dark:text-black dark:border-orange-300 dark:focus:border-orange-600 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                                                placeholder=" "
                                            />
                                            <label 
                                            for="floating_outlined"
                                            class="absolute text-[15px] text-gray-500 dark:text-gray-400 duration-300 transform translate-y-[-1px] scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Confirm Password</label>
                                            <p v-if="ConfirmPasswordWarnimg" class="text-red-600 text-sm">{{ ConfirmPasswordWarnimg }}</p>
                                        </div>
                                        <!-- Show Password -->
                                        <div class="w-full lg:text-start md:text-center">
                                            <input type="checkbox" v-model="passwordVisible" class="accent-orange-500/25 w-4 h-4" />
                                            <label class="ml-2"
                                            v-if="!passwordVisible ? show = 'Show' : show = 'Hidden'"
                                            >
                                                {{show}} Password
                                            </label>
                                        </div>
                                        <div v-if="errorMessage" class="text-red-700 ml-44">{{ errorMessage }}</div>
                                        <!-- Submit button-->
                                        <div class="mb-12 pb-1 pt-1">
                                            <button class="bg-gradient-to-tr from-orange-700 to-orange-400 min-[641px]:w-64 max-[640px]:w-full mb-3 inline-block w-64 rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-dark-3 transition duration-150 ease-in-out" type="submit">Sign Up</button>
                                        </div>
                                    </form>
                                    <div class="text-center">
                                        <RouterLink to="/">Have an account?</RouterLink>
                                    </div>
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
    import {ref, watch} from 'vue';
    import {useRouter} from 'vue-router';
    import axios from "axios";
    // Reactive variables for form data
    const users = ref({
        username: '',
        phone: '',
        email: '',
        password: ''
    })
    const confirmPassword = ref('')
    const errorMessage = ref('');
    const passwordVisible = ref(false);
    const router = useRouter();
    const passwordWarning = ref('');
    const IsPasswordValid = ref();
    const emailWarning = ref('');
    const phoneWarning = ref('');
    const usernameWarning = ref('');
    const ConfirmPasswordWarnimg = ref('');
    // Handle login submission
    const signUp = () => {
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
        if (validateForm()) {
            router.push({ name: 'SearchPage' });
        }
    };
    // Watcher for owner email validation
    watch(() => users.value.email, (newEmail) => {
            if (!newEmail.endsWith('@gmail.com')) {
                emailWarning.value = 'Email must end with @gmail.com';
            } else {
                emailWarning.value = '';
            }
        });
    watch(() => users.value.phone, (newPhone) => {
        const phonePattern = /^[0-9]{11}$/;
        const phoV = newPhone.startsWith('010');
        const phoO = newPhone.startsWith('012');
        const phoT = newPhone.startsWith('011');
        const phoW = newPhone.startsWith('015');
            if (!phonePattern.test(newPhone) && (!phoV || !phoO || !phoT || !phoW)) {
                phoneWarning.value = 'must 11 digits and only numbers';
            } else {
                phoneWarning.value = '';
            }
        });
        // Watcher for owner password validation
watch(() => users.value.password, (newPassword) => {
    if (newPassword.length < 8) {
                passwordWarning.value = 'at least 8 characters long';
                IsPasswordValid.value = true;
            } else {
                passwordWarning.value = '';
                IsPasswordValid.value = false;
            }
        });
        //Confirm Password
        watch(()=> confirmPassword.value ,(newValue)=>{
            if(newValue !== users.value.password){
                ConfirmPasswordWarnimg.value = 'Passwords dont match';
            }
            else{
                ConfirmPasswordWarnimg.value = '';
            }
        })
    // Simple form validation
    const validateForm = () => {
        if (!users.value.username || !users.value.phone || !users.value.email || !users.value.password  || ConfirmPasswordWarnimg.value || IsPasswordValid.value || emailWarning.value || phoneWarning.value)  {
            errorMessage.value = 'Please fill in all fields and be valid.';
            return false;
        } else {
            errorMessage.value = 'success';
        return true;
        }
        // else if(parseInt(users.value.username.charAt(0))){
        //     usernameWarning.value = 'Please start with a charcter';
        //     return false;
        // }
        // else if(isNaN(users.value.phone)){
        //     phoneWarning.value = 'Please enter your phone number';
        //     return false;
        // }
        // else if(!users.value.phone.startsWith('01')|| users.value.phone.length < 11 || users.value.phone.length > 11){
        //     errorMessage.value = 'Please enter vaild phone number';
        //     return false;
        // }
        // else if (!users.value.email.endsWith('@gmail.com')) {
        //     errorMessage.value = 'Please enter a valid email address';
        //     return false;
        // }
         // Watcher for restaurant phone validation
        // watch(users.password.value, (newValue)=>{
        //     if(newValue.length < 8){
        //         PasswordWarnimg.value = 'Password must be at least 8';
        //         IsPasswordValid.value = true;
        //     }else{
        //         PasswordWarnimg.value = ' ';
        //         IsPasswordValid.value = 'false';
        //     }
        // });
        // watch(confirmPassword.value, (newValue) => {
        //     if(users.value.password !== newValue.value){
        //         errorMessage.value = 'Passwords dont match';
        //         return false;
        //     }
        // })
    };
</script>