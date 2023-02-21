<template>
    <TripleColumna title="Iván Jara successfully defends his undergrad thesis" date="May 29, 2019">
        <template v-slot:contenido>
            <img src="/assets/group_news_images/defensa-ivan-jara.jpg" alt="" class="img-fluid">
            <p class="my-3">
                After successfully defending his undergraduate thesis entitled “<strong>Simulación computacional de la eficiencia
                óptica de estructuras OLED</strong> ” (￼Computer Simulation of the optical efficiency in OLED structures), Iván
                fulfilled all requirements to obtain the professional title of Engineering Physics at USACH. Iván will
                continue collaborating with us as a research assistant during 2019.
            </p>
            <p class="my-3">
                The thesis can be downloaded
                <router-link to="/resources">here</router-link>.
            </p>
            <p class="my-3">
                <strong>Congratulations Iván for a job well done!</strong>
            </p>
        </template>
    </TripleColumna>
</template>

<script setup>
import TripleColumna from '@/components/TripleColumna.vue';

</script>