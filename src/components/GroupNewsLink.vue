<template>

    <div class="container-fluid my-4">
        <div class="col text-start">
            <div class="row">
                <small class="date-color">{{ date }}</small>
            </div>
            <div class="row">
                <router-link class="link-color" :to="{name: name}">
                    <h4>
                        {{ title }}
                    </h4>
                </router-link>
            </div>
        </div>
    </div>

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