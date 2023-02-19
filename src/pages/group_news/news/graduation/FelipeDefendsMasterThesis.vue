<template>
    <TripleColumna title="Felipe Recabal successfully defends his master thesis" date="Apr 27, 2021">
        <template v-slot:contenido>
            <img class="img-fluid" src="/assets/group_news_images/frecabal.jpg" alt="">
            <p class="my-3">
                After successfully defending his master thesis entitled
                “<strong>Electron Transport in Driven Nanojunctions</strong>”, Felipe
                fulfilled all requirements to receive the MSc degree in Physics at USACH. Felipe will continue to work with
                us as a research assistant, in preparation for the upcoming 2021 PhD applications abroad
            </p>

            <p class="my-3">The thesis can be downloaded
                <router-link to="/resources">here.</router-link>

            </p>
            <p class="my-3">
                <strong>Congratulations Felipe for a job well done!</strong>
            </p>

        </template>
    </TripleColumna>
</template>

<script setup>
import TripleColumna from '@/components/TripleColumna.vue';
</script>