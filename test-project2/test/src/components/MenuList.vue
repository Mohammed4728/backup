<template>
    <tr>
        <th scope="row" class="px-6 py-4 font-medium">
            <div class="flex gap-x-2 w-[50%] xl:w-[20%]">
                <img v-if="meal.img" :src="meal.img" class="rounded-full"/>
                <div class="flex flex-col justify-center">
                    <input type="text" v-model="meal.name" class="bg-transparent">
                    <textarea type="text" v-model="meal.description" class="w-[50%] sm:w-[55%] xl:w-[80%] dark:text-gray-500 bg-transparent"> </textarea>
                </div>
            </div>
        </th>
        <td class="">
            <input type="text" v-model="meal.small" class="border-none rounded-md bg-transparent">
        </td>
        <td class="">
            <input type="text" v-model="meal.medium" class="border-none rounded-md bg-transparent">
        </td>
        <td class="">
            <input type="text" v-model="meal.large" class="border-none rounded-md bg-transparent">
        </td>
        <td class="">
            <button @click="deleteMeal(i)">
                <svg class="h-5 w-5 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="3 6 5 6 21 6" />  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" /></svg>
            </button>
        </td>
    </tr>
</template>
<script setup>
    import {defineProps, defineEmits, ref} from "vue";
    const props = defineProps({
        meal: String,  
        i: Number,           
        list: Array,         
        meals: {
            type: Object,
            required: true,
        },
    });
    const emits = defineEmits(['deleteMeal']);
    const deleteMeal = (i) =>{
        emits("deleteMeal",(props.list).splice(props.i, 1));
    }
</script>
