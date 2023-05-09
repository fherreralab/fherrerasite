<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col"></div>
            <div class="col-10">
                <h1 class="text-center">People</h1>
                <div class="text-center my-3">
                    <img class="img-fluid" :src="require(`../../../public/assets/group-april-2022.jpg`)" alt="">
                    <p >
                        <strong>April 2022</strong>
                        - Left to right: Gastón, Athul, Felipe R., Rubén, Felipe H., Katy, Mauricio, Johan, Bastián,
                        Fernanda.
                    </p>
                </div>

                <div class="text-center">
                    <img class="img-fluid" :src="require(`../../../public/assets/group-sep-2019.jpg`)" alt="">
                    <p>
                        <strong>Sep. 2019</strong>
                        - Left to right: Rubén, Mauricio, Diego, Iván, Jonathan, Felipe H., Ignacio, Vanessa, Federico,
                        Johan, Felipe R.
                    </p>
                </div>

            </div>
            <div class="col"></div>
        </div>

        <hr>

        <div class="row justify-content-center">
            <div class="container">
                <div class="row text-center">
                    <h2>Principal Investigator</h2>
                    <div class="col"></div>
                    <div class="col">
                        <PeopleCard name="Prof. Felipe Herrera">
                            <template v-slot:imagen>
                                <img class="img-fluid" :src="require(`../../../public/assets/fherrera.jpg`)" alt="">
                            </template>
                            
                            <template v-slot:contenido>
                                <p>Assistant Professor, Department of Physics,</p>
                                <p>Universidad de Santiago de Chile, USACH</p>
                                <a href="/assets/cv/cvfelipe.pdf" target="_blank">[Curriculum Vitae]</a>
                            </template>
                            
                            <template v-slot:redessociales>
                                <div class="d-flex justify-content-center">
                                    <a class="mx-1 border border-light-subtle rounded p-1"
                                    href="https://twitter.com/faherreraur">
                                    <font-awesome-icon icon="fa-brands fa-twitter" size="3x" /></a>
                                    <a class="mx-1 border border-light-subtle rounded p-1"
                                        href="https://github.com/fherreralab">
                                        <font-awesome-icon icon="fa-brands fa-github" size="3x" /> </a>
                                </div>
                            </template>
                        </PeopleCard>
                    </div>
                    <div class="col"></div>
                </div>
                <hr>
                <div class="row text-center">
                    <h2>Postdoctoral Researchers</h2>
                    <div class="col-md-4 col-sm-12">
                        <PeopleCard name="Dra. Thulasi Bikku">
                            <template v-slot:imagen>
                                <img class="max-image-size" :src="require(`../../../public/assets/group_news_images/thulasi-profile.png`)"
                                    alt="">
                            </template>

                            <template v-slot:contenido>
                                <p>Postdoctoral Researcher</p>
                                <p>Department of Physics, Universidad de Santiago de Chile, USACH</p>
                            </template>
                        </PeopleCard>
                    </div>

                    <div class="col-md-4 col-sm-12">
                        <PeopleCard name="Dr. Rubén Fritz">
                            <template v-slot:imagen>
                                <img class="max-image-size"
                                    :src="require(`../../../public/assets/icon_generic.png`)" alt="">
                            </template>

                            <template v-slot:contenido>
                                <p>Postdoctoral Researcher</p>
                                <p>Department of Physics, Universidad de Santiago de Chile, USACH</p>
                            </template>
                        </PeopleCard>
                    </div>

                    <div class="col-md-4 col-sm-12">
                        <PeopleCard name="Dr. Johan Triana">
                            <template v-slot:imagen>
                                <img class="max-image-size" :src="require(`../../../public/assets/people/JohanTriana.jpg`)"
                                    alt="">
                            </template>

                            <template v-slot:contenido>
                                <p>Postdoctoral Researcher</p>
                                <p>Department of Physics, Universidad de Santiago de Chile, USACH</p>
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
                                <p>PhD Student</p>
                                <p>Department of Physics, Universidad de Santiago de Chile, USACH</p>
                            </template>
                        </PeopleCard>
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <PeopleCard name="Felipe Recabal">
                            <template v-slot:imagen>
                                <img class="max-image-size" :src="require(`../../../public/assets/people/felipeRecabal.jpg`)"
                                    alt="">
                            </template>

                            <template v-slot:contenido>
                                <p>PhD Student</p>
                                <p>Department of Physics, Universidad de Santiago de Chile, USACH</p>
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
                                <p>PhD Student</p>
                                <p>Department of Physics, Universidad de Santiago de Chile, USACH</p>
                            </template>
                        </PeopleCard>
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <PeopleCard name="Mauricio Arias">
                            <template v-slot:imagen>
                                <img class="max-image-size" :src="require(`../../../public/assets/people/mauricioArias.jpeg`)"
                                    alt="">
                            </template>

                            <template v-slot:contenido>
                                <p>PhD Student</p>
                                <p>Department of Physics, Universidad de Santiago de Chile, USACH</p>
                            </template>
                        </PeopleCard>
                    </div>
                </div>
                <hr>

                <div class="row text-center">
                    <h2>Master Students</h2>
                    <div class="col-md-3"></div>
                    <div class="col-md-6">
                        <PeopleCard name="Simón Paiva">
                            <template v-slot:imagen>
                                <img class="max-image-size" :src="require(`../../../public/assets/icon_generic.png`)"
                                    alt="">
                            </template>

                            <template v-slot:contenido>
                                <p>Master Student</p>
                                <p>Department of Physics, Universidad de Santiago de Chile, USACH</p>
                            </template>
                        </PeopleCard>
                    </div>
                    <div class="col-md-3"></div>
                </div>
                <hr>
                <div class="row text-center">
                    <h2>Research Assistants</h2>
                    <div class="col-md-3"></div>
                    <div class="col-md-6">
                        <PeopleCard name="Gastón González">
                            <template v-slot:imagen>
                                <img class="max-image-size" :src="require(`../../../public/assets/icon_generic.png`)"
                                    alt="">
                            </template>

                            <template v-slot:contenido>
                                <p>Master Student</p>
                                <p>Department of Physics, Universidad de Santiago de Chile, USACH</p>
                            </template>
                        </PeopleCard>
                    </div>
                    <div class="col-md-3"></div>
                </div>
                <hr>

                <div class="row text-center">
                    <h2>Undegraduate Students</h2>
                    <div class="col-md-4 col-sm-12">
                        <PeopleCard name="Bastián Martínez">
                            <template v-slot:imagen>
                                <img class="max-image-size"
                                    :src="require(`../../../public/assets/people/bastianMartinez.jpg`)" alt="">
                            </template>

                            <template v-slot:contenido>
                                <p>Undergraduate Student</p>
                                <p>Department of Mathematics and Computer Science, </p>
                                <p>Universidad de Santiago de Chile, USACH</p>
                            </template>
                        </PeopleCard>
                    </div>

                    <div class="col-md-4 col-sm-12">
                        <PeopleCard name="Felipe Osorio">
                            <template v-slot:imagen>
                                <img class="max-image-size" :src="require(`../../../public/assets/icon_generic.png`)"
                                    alt="">
                            </template>

                            <template v-slot:contenido>
                                <p>Undergraduate Student</p>
                                <p>Department of Mathematics and Computer Science, </p>
                                <p>Universidad de Santiago de Chile, USACH</p>
                            </template>
                        </PeopleCard>
                    </div>

                    <div class="col-md-4 col-sm-12">
                        <PeopleCard name="Fernanda Véliz">
                            <template v-slot:imagen>
                                <img class="max-image-size" :src="require(`../../../public/assets/people/FernandaVeliz.jpg`)"
                                    alt="">
                            </template>

                            <template v-slot:contenido>
                                <p>Undergraduate Student</p>
                                <p>Department of Mathematics and Computer Science, </p>
                                <p>Universidad de Santiago de Chile, USACH</p>
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
import PeopleCard from '@/components/PeopleCard.vue';
import PeopleSet from '@/components/PeopleSet.vue';
import { ref } from 'vue';

const alumni = ref([]);

const fillAlumni = () => {
    const names = ['Melissa Silva', 'Vanessa Olaya', 'Ignacio Chi',
        'Jonathan Sepúlveda', 'Federico Hernández', 'Iván Jara', 'Diego Carvajal'];

    const grade_name = ['BSc Computer Science 2023', 'MSc Physics 2020',
        'Research Assistant 2017-2020', 'MSc Physics 2020', 'Postdoc 2019',
        'BSc Engineering Physics 2020', 'BSc Math 2018'];

    const university = ['Then Evernote intern', 'Then PhD student at University of Sydney',
        'Then PhD student at University of Chicago', 'Then PhD student at UPV/EHU',
        'Then postdoc at Queen Mary University of London', 'Then data scientist in health start-up',
        'Then science outreach'
    ];

    for (let i = 0; i < names.length; i++) {
        alumni.value.push(
            {
                name: names[i],
                grade_name: grade_name[i],
                university: university[i]
            }
        )
    }
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

.max-image-size {
    width: 100%;
    height: 100%;
}

.container-imagen {
    justify-content: center;
    align-items: center;
    /* adjust div width */
    width: 100%;
    /* adjust div height */
    height: 100%;
}
</style>