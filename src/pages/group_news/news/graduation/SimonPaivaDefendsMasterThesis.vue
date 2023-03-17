<template>
    <TripleColumna title="Simón Paiva successfully defends his MSc thesis in Physics" date="October 27, 2022">
        <template v-slot:contenido>
            <img src="/assets/group_news_images/defensa-simon-paiva.png" alt="" class="img-fluid">

            <p class="my-3">
                After successfully defending his undergraduate thesis entitled
                “<strong>Entangled photon generation with metal-organic frameworks</strong>”, 
                Simón fulfilled all requirements to obtain his MSc degree in Physics at USACH. 
                After graduation, Simón will continue with us as research assistant, in preparation for
                PhD admissions.
            </p>
            <p class="my-3">
                The thesis can be downloaded
                <router-link to="/resources">
                    here.
                </router-link> 
            </p>
            <p class="my-3">
                <strong>Congratulations Simón for a job well done!</strong>
            </p>
        </template>
    </TripleColumna>
</template>

<script setup>
import TripleColumna from '@/components/TripleColumna.vue';


</script>