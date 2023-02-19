<template>
    <div class="container">
        <h1>{{ title }}</h1>
        <div class="container p-5">
            <div class="container text-center">
                <img :src="require(`../../public/assets/${imageName}`)" alt="imagen">
            </div>
        </div>

        <slot name="publicationContent"></slot>
    </div>
</template>


<script setup>
import { defineProps } from 'vue';


defineProps({
    title: String,
    imageName: String
})


</script>