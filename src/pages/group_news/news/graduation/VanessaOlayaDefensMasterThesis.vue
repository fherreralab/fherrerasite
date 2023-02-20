<template>
    <TripleColumna title="Vanessa Olaya successfully defends her master thesis" date="Apr 4, 2020">
        <template v-slot:contenido>
            <img src="/assets/group_news_images/vanessa-olaya-screenshot.jpg" alt="" class="img-fluid">

            <p class="my-3">
                After successfully defending her master thesis entitled “<strong>van der Waals interaction between Rydberg atoms and
                polar molecules</strong> ”, Vanessa fulfilled all requirements to receive the MSc degree in Physics at USACH. Vanessa
                will continue to work with us as a research assistant, in preparation for graduate school applications in
                2020. The results of her thesis work are published in
                <a href="https://journals.aps.org/pra/abstract/10.1103/PhysRevA.101.032705">Phys. Rev. A 101, 032705, 2020</a>.
            </p>
            <p class="my-3">
                The thesis can be downloaded
                <router-link to="/resources">here.</router-link>
            </p>
            <p class="my-3">
                <strong>Congratulations Vanessa for a job well done!</strong>
            </p>
        </template>
    </TripleColumna>
</template>
<script setup>
import TripleColumna from '@/components/TripleColumna.vue';

</script>