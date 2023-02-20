<template>
    <TripleColumna title="Simón Paiva successfully defends his undergrad thesis" date="Jul 24, 2020">
        <template v-slot:contenido>
            <img src="/assets/group_news_images/defensa-simon-paiva.png" alt="" class="img-fluid">

            <p class="my-3">
                After successfully defending his undergraduate thesis entitled
                “<strong>Regresión de datos en elipsometría de
                Mueller usando inteligencia artificial</strong>” (￼Regression problem in Mueller ellipsometry using Artificial
                Intelligence), Simón fulfilled all requirements to obtain the professional title of Engineering Physics at
                USACH. Simón will continue collaborating with us as a research assistant during 2020, in preparation for
                graduate school admissions.
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