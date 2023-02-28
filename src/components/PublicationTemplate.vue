<template>
    <div class="container">
        <div class="container">
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
    imageName: String
})


</script>