<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col"></div>
            <div class="col-10">
                <h1 class="text-center">People</h1>
                <GroupPhotoSection :photoSrc="require(`../../../public/assets/group-april-2022.jpg`)" date="April 2022"
                    description="Left to right: Gastón, Athul, Felipe R., Rubén, Felipe H., Katy, Mauricio, Johan, Bastián, Fernanda." />
                <GroupPhotoSection :photoSrc="require(`../../../public/assets/group-sep-2019.jpg`)" date="Sep. 2019"
                    description="Left to right: Rubén, Mauricio, Diego, Iván, Jonathan, Felipe H., Ignacio, Vanessa, Federico, Johan, Felipe R." />
            </div>
            <div class="col"></div>
        </div>

        <hr>

        <div class="row justify-content-center">
            <div class="container">
                <div class="row text-center">
                    <h2>Principal Investigator</h2>

                    <div class="col-9">
                        <PeopleCard name="Prof. Felipe Herrera">
                            <template v-slot:imagen>
                                <img class="img-fluid" :src="require(`../../../public/assets/fherrera.jpg`)" alt="">
                            </template>

                            <template v-slot:contenido>
                                <p>Assistant Professor,</p>
                                <p>Department of Physics, USACH</p>
                                <a href="/assets/cv/cvfelipe.pdf" target="_blank">[CV]</a>
                            </template>

                            <template v-slot:redessociales>
                                <div class="d-flex justify-content-center">
                                    <a class="m-1 border border-light-subtle rounded p-1"
                                        href="https://twitter.com/faherreraur">
                                        <font-awesome-icon icon="fa-solid fa-x" size="2x" /></a>
                                    <a class="m-1 border border-light-subtle rounded p-1"
                                        href="https://github.com/fherreralab">
                                        <font-awesome-icon icon="fa-brands fa-github" size="2x" /> </a>
                                </div>
                            </template>
                        </PeopleCard>
                    </div>
                    <div class="col-md-3 d-flex justify-content-start align-items-center">
                        <h1>Brief Bio</h1>
                        <p>
                            This is the bio...

                            <!-- Aquí escriba su breve biografía -->
                        </p>
                    </div>
                </div>
                <hr>
                <div class="row text-center">
                    <h2>Postdoctoral Researchers</h2>

                    <div class="col-md-6 col-sm-12">
                        <PeopleCard name="Dr. Adrian Rubio">
                            <template v-slot:imagen>
                                <img class="max-image-size" :src="require(`../../../public/assets/people/bastianMartinez.jpg`)"
                                    alt="">
                            </template>

                            <template v-slot:contenido>
                                <p>PhD Physics 2015 </p>
                                <p>Universidad de Buenos Aires</p>
                                <p>Non-equilibrium QED, Nanophotonics</p>
                            </template>
                        </PeopleCard>
                    </div>

                    <div class="col-md-6 col-sm-12">
                        <PeopleCard name="Dr. Rubén Fritz">
                            <template v-slot:imagen>
                                <img class="max-image-size" :src="require(`../../../public/assets/icon_generic.png`)"
                                    alt="">
                            </template>

                            <template v-slot:contenido>
                                <p>PhD Applied Science 2018 </p>
                                <p>Universidad de Talca</p>
                                <p>Computational Chemistry, MOF Optics</p>
                            </template>
                        </PeopleCard>
                    </div>
                </div>

                <hr>

                <div class="row text-center">
                    <h2>PhD Students</h2>

                    <div class="col-md-6 col-sm-12">
                        <PeopleCard name="Katy Arauchan">
                            <template v-slot:imagen>
                                <img class="max-image-size"
                                    :src="require(`../../../public/assets/people/KatyArauchan.jpeg`)" alt="">
                            </template>

                            <template v-slot:contenido>
                                <p>PhD Physics 2024</p>
                                <p>Molecular Spin Qubits, Quantum Control</p>
                            </template>
                        </PeopleCard>
                    </div>

                    <div class="col-md-6 col-sm-12">
                        <PeopleCard name="Felipe Recabal">
                            <template v-slot:imagen>
                                <img class="max-image-size"
                                    :src="require(`../../../public/assets/people/felipeRecabal.jpg`)" alt="">
                            </template>

                            <template v-slot:contenido>
                                <p>PhD Physics 2025</p>
                                <p>Molecular cavity QED, Quantum Transport</p>
                            </template>
                        </PeopleCard>
                    </div>

                    <div class="col-md-6 col-sm-12">
                        <PeopleCard name="Athul Sivan">
                            <template v-slot:imagen>
                                <img class="max-image-size" :src="require(`../../../public/assets/people/AthulS.jpg`)"
                                    alt="">
                            </template>

                            <template v-slot:contenido>
                                <p>PhD Physics 2025</p>
                                <p>Macroscopic QED, Nanophotonics</p>
                            </template>
                        </PeopleCard>
                    </div>

                    <div class="col-md-6 col-sm-12">
                        <PeopleCard name="Mauricio Arias">
                            <template v-slot:imagen>
                                <img class="max-image-size"
                                    :src="require(`../../../public/assets/people/mauricioArias.jpeg`)" alt="">
                            </template>

                            <template v-slot:contenido>
                                <p>PhD Physics 2023</p>
                                <p>Quantum Optics, Nanophotonics</p>
                            </template>
                        </PeopleCard>
                    </div>

                    <div class="col-md-6 col-sm-12">
                        <PeopleCard name="Gastón González">
                            <template v-slot:imagen>
                                <img class="max-image-size" :src="require(`../../../public/assets/icon_generic.png`)"
                                    alt="">
                            </template>

                            <template v-slot:contenido>
                                <p>PhD Physics 2025</p>
                                <p>Condensed Matter, MOF Physics</p>
                            </template>
                        </PeopleCard>
                    </div>

                </div>
                <hr>


                <div class="row text-center">
                    <h2>Research Assistants</h2>

                    <div class="col-md-6 col-sm-12">
                        <PeopleCard name="Simón Paiva">
                            <template v-slot:imagen>
                                <img class="max-image-size" :src="require(`../../../public/assets/icon_generic.png`)"
                                    alt="">
                            </template>

                            <template v-slot:contenido>
                                <p>MSc Physics 2022</p>
                                <p>Machine Learning for Optics</p>
                            </template>
                        </PeopleCard>
                    </div>

                    <div class="col-md-6 col-sm-12">
                        <PeopleCard name="Fernanda Véliz">
                            <template v-slot:imagen>
                                <img class="max-image-size"
                                    :src="require(`../../../public/assets/people/FernandaVeliz.jpg`)" alt="">
                            </template>

                            <template v-slot:contenido>
                                <p>BSc Computer Science 2023</p>
                                <p>Machine Learning for Materials</p>
                            </template>
                        </PeopleCard>
                    </div>

                    <div class="col-md-6 col-sm-12">
                        <PeopleCard name="Bastián Martínez">
                            <template v-slot:imagen>
                                <img class="max-image-size"
                                    :src="require(`../../../public/assets/people/bastianMartinez.jpg`)" alt="">
                            </template>

                            <template v-slot:contenido>
                                <p>BSc Computer Science 2024</p>
                                <p>Machine Learning for Optics</p>
                            </template>
                        </PeopleCard>
                    </div>

                    <div class="col-md-6 col-sm-12">
                        <PeopleCard name="Felipe Osorio">
                            <template v-slot:imagen>
                                <img class="max-image-size" :src="require(`../../../public/assets/icon_generic.png`)"
                                    alt="">
                            </template>

                            <template v-slot:contenido>
                                <p>BSc Computer Science 2024</p>
                                <p>USACH</p>
                                <p>Machine Learning for Optics</p>
                            </template>
                        </PeopleCard>
                    </div>



                </div>

                <hr>

                <div class="container">
                    <PeopleSet title="Alumni" :group_people="alumni" />

                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import GroupPhotoSection from '@/components/GroupPhotoSection.vue';
import PeopleCard from '@/components/PeopleCard.vue';
import PeopleSet from '@/components/PeopleSet.vue';
import { ref } from 'vue';

const alumni = ref([]);

const fillAlumni = () => {
    const alumniData = [
        {
            name: 'Thulasi Bikku',
            grade_name: 'Postdoc 2021-2023',
            university: 'then Assist. Prof. at Vignan Nirula Institute of Technology and Science for Women, India'
        },
        {
            name: 'Johan Triana',
            grade_name: 'Postdoc 2019-2023',
            university: 'then Assist. Prof. Dept. of Physics at Universidad Católica del Norte, Chile'
        },
        {
            name: 'Melissa Silva',
            grade_name: 'BSc Computer Science 2023',
            university: 'Then Evernote intern'
        },
        {
            name: 'Vanessa Olaya',
            grade_name: 'MSc Physics 2020',
            university: 'Then PhD student at University of Sydney'
        },
        {
            name: 'Ignacio Chi',
            grade_name: 'Research Assistant 2017-2020',
            university: 'then PhD student at University of Chicago'
        },
        {
            name: 'Jonathan Sepúlveda',
            grade_name: 'MSc Physics 2020',
            university: 'then PhD student at UPV/EHU'
        },
        {
            name: 'Federico Hernández',
            grade_name: 'Postdoc 2019',
            university: 'then postdoc at Queen Mary University of London'
        },
        {
            name: 'Iván Jara',
            grade_name: 'BSc Engineering Physics 2020',
            university: 'then data scientist in health start-up'
        },
        {
            name: 'Diego Carvajal',
            grade_name: 'BSc Math 2018',
            university: 'then science outreach'
        }
    ];

    // Función para extraer el apellido de un nombre completo
    const getLastName = (fullName) => {
        const parts = fullName.split(' ');
        return parts[parts.length - 1];
    };

    // Ordenar el arreglo basándose en apellidos
    alumniData.sort((a, b) => {
        const lastNameA = getLastName(a.name).toLowerCase();
        const lastNameB = getLastName(b.name).toLowerCase();
        if (lastNameA < lastNameB) return -1;
        if (lastNameA > lastNameB) return 1;
        return 0;
    });

    alumniData.forEach(alumnus => alumni.value.push(alumnus));
}


fillAlumni();


</script>


<style scoped>
ul {
    list-style-type: disc;
}

p {
    margin: 1px;
}

/* Espaciado entre títulos de sección y contenido */
h2 {
    margin-bottom: 20px; /* Ajusta este valor según tus necesidades */
}

img {
    border: solid 1px white;
    filter: drop-shadow(0 0 0.15rem rgb(47, 47, 47));
}

/* Espaciado dentro de cada sección */
.section {
    padding: 20px 0; /* Añade un relleno arriba y abajo de cada sección */
}


.max-image-size {
    width: 100%;
    /* o un ancho fijo */
    height: 200px;
    /* un alto fijo para todas las imágenes */
    object-fit: cover;
}

.container {
    padding: 20px; /* Esto añade un relleno en todos los lados del contenedor */
}
</style>