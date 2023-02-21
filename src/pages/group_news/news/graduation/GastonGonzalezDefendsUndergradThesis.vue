<template>
    <TripleColumna title="Gastón González successfully defends his undergrad thesis" date="May 3, 2019">
        <template v-slot:contenido>
            <img src="/assets/group_news_images/defensa-gaston-gonzalez.jpg" alt="" class="img-fluid">
            <p class="my-3">
                After successfully defending his undergraduate thesis entitled “
                <strong>Simulación Computacional de la Eficiencia de Recombinación OLED con Drift-Diffusion</strong> ”
                (￼Computer Simulation of OLED Recombination Efficiency using
                Drift-Diffusion), Gastón fulfilled all requirements to obtain the professional title of Engineering Physics
                at USACH.
            </p>
            <p class="my-3">
                The thesis can be downloaded
                <router-link to="/resources">here</router-link>.
            </p>
            <p class="my-3">
                <strong>Congratulations Gaston for a job well done!</strong>
            </p>
        </template>
    </TripleColumna>
</template>
<script setup>
import TripleColumna from '@/components/TripleColumna.vue';

</script>