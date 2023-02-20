<template>
    <TripleColumna title="Jonathan Sepúlveda successfully defends his master thesis" date="Jul 21, 2020">
        <template v-slot:contenido>
            <img src="/assets/group_news_images/jonathan-sepulveda.png" alt="" class="img-fluid">

            <p class="my-3">
                After successfully defending his master thesis entitled “<strong>Macroscopic cavity QED approach using the Finite
                Difference Time-Domain method</strong>”, Jonathan fulfilled all requirements to receive the MSc degree in Physics at
                USACH. Jonathan will continue to work with us as a research assistant, in preparation for the start of his
                PhD studies at Universidad del Pais Vasco later in 2020.
            </p>
            <p class="my-3">
                The thesis can be downloaded
                <router-link to="/resources">
                    here.
                </router-link>
            </p>
            <p class="my-3">
                <strong>Congratulations Jonathan for a job well done!</strong>
            </p>
        </template>
    </TripleColumna>
</template>

<script setup>
import TripleColumna from '@/components/TripleColumna.vue';

</script>