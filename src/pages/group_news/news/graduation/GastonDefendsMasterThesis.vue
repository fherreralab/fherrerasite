<template>
    <TripleColumna title="Gastón González successfully defends his master thesis" date="May 31, 2021">
        <template v-slot:contenido>
            <p class="my-3">
                After successfully defending his master thesis entitled “<strong>Langevin Dynamics for Gas Transport in Carbon
                Nanotubes</strong> ”, Gastón fulfilled all requirements to receive the MSc degree in Physics at USACH. He will
                continue to work with us as a research assistant, in preparation for the upcoming 2021 PhD applications
                abroad.
            </p>

            <p class="my-3">The thesis can be downloaded
                <router-link to="/resources">here.</router-link>
                 
            </p>
            <p class="my-3">
                <strong>Congratulations Gastón for a job well done!</strong>
            </p>

        </template>
    </TripleColumna>
</template>

<script setup>
import TripleColumna from '@/components/TripleColumna.vue';



</script>