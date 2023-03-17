<template>
    <router-link class="link-color" :to="{ name: name }">
        <div class="my-4">
            <small class="date-color">
                {{ date }}
            </small>
            <h4>
                {{ title }} 
            </h4>
        </div>
        
    </router-link>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
    title: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
})

</script>

<style>
.date-color {
    color: #8e8e8e;
}

.link-color {
    color: #2A7AE2;
    /* remove link decoration */
    text-decoration: none;
}
</style>