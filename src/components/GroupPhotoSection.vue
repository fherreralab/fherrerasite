<template>
    <div class="text-center mb-5">
        <img class="img-fluid" :src="photoSrc" alt="">
        <p>
            <strong>{{ date }}</strong> - {{ description }}
        </p>
    </div>
</template>
  
<script setup>
import { defineProps } from 'vue';
defineProps(['photoSrc', 'date', 'description']);

</script>
  

<style scoped>

img {
    border: solid 1px white;
    filter: drop-shadow(0 0 0.15rem rgb(47, 47, 47));
}
</style>