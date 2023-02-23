<template>
    <div class="container">
        <div class="container text-start">
            <h1 class="text-center">Molecular Quantum Technology Group</h1>

            <p>Welcome to our group website!</p>

            <p>In the Herrera Lab, we develop theoretical concepts and computational tools to address exciting and
                challenging
                problems at the interface of
                <strong>
                    chemical physics, quantum optics, materials science and quantum information
                </strong>. Find out more about our current research in the links below.
            </p>
        </div>

        <div class="my-2 border text-center" v-for="(publication, index) in publications" :key="index">
            <router-link :to=publication.link>
                <img :src="require(`../../public/assets/${publication.image}`)" alt="">
            </router-link>
            <div class="m-3">
                <h2>{{ publication.title }}</h2>
            </div>
        </div>
    </div>
</template>

<script setup>
/*
    Cómo agregar una publicación:
        1. ir a la carpeta publications dentro de pages y crear un componente con extensión .vue y seguir el ejemplo de 
            los componentes ya hechos
        2. En el archivo routes.js registrar el componente con la ruta deseada, seguir el ejemplo de los ya creados
        3. Agregar al array publications que se encuentra más abajo la información de la publicación siguiendo el
            ejemplo de las yo creados
*/


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