<template>
    <triple-columna>
        <template v-slot:contenido>
            <h2 class="azulado-oscuro">Molecular Quantum Technology Group</h2>

            <p class="my-2">Welcome to our group website!</p>

            <p>In the Herrera Lab, we develop theoretical concepts and computational tools to address exciting and
                challenging
                problems at the interface of
                <strong class="azulado-oscuro">
                    chemical physics, quantum optics, materials science and quantum information
                </strong>. Find out more about our current research in the links below.
            </p>

            <div class="my-2 border text-center" v-for="(publication, index) in publications" :key="index">
                <router-link :to=publication.link>
                    <img class="img-fluid" :src="require(`../../public/assets/${publication.image}`)" alt="">
                </router-link>
                <div class="m-3">
                    <h2 class="azulado-oscuro">{{ publication.title }}</h2>
                </div>
            </div>

            <div>
                <h2 class="azulado-oscuro">Funding</h2>
                <img class="img-fluid" src="../../public/assets/funding-banner.png" alt="">
            </div>
        </template>
    </triple-columna>
</template>

<script setup>
import TripleColumna from './TripleColumna.vue';


const publications = [
    {
        link: '/organic-qed',
        image: 'displaced-potential-cavity.jpeg',
        title: 'Cavity Quantum Electrodynamics with Organic Materials'
    },
    {
        link: '/mof-nlo',
        image: 'mof-photon-entanglement.jpeg',
        title: 'Metal-Organic Frameworks for Quantum Communication'
    },
    {
        link: '/cold-molecules',
        image: 'driven-polar-molecules.jpeg',
        title: 'Quantum Control with Ultracold Molecules'
    },
];

</script>

<style scoped>
h1,
p {
    color: black;
}
</style>