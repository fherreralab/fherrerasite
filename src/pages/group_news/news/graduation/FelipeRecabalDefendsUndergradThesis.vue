<template>
    <TripleColumna title="Felipe Recabal successfully defends his undergrad thesis" date="Jan 22, 2019">
        <template v-slot:contenido>
            <img src="/assets/group_news_images/defensa-felipe-recabal.jpg" alt="" class="img-fluid">
            <p class="my-3">
                After successfully defending his undergraduate thesis entitled “<strong>Estudio de eficiencia de Celdas Solares
                Orgánicas</strong>” (￼Studying the Efficiency of Organic Solar Cells), Felipe fulfilled all requirements to obtain
                the professional title of Engineering Physics at USACH.
            </p>
            <p class="my-3">
                The thesis can be downloaded
                <router-link to="/resources">here</router-link>.
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