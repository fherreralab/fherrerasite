<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col"></div>
            <div class="col-6">
                <h1 class="text-center">People</h1>
                <div class="text-center">
                    <img class="img-fluid" :src="require(`../../../public/assets/group-april-2022.jpg`)" alt="">
                    <p class="small-p">
                        <strong>April 2022</strong>
                        - Left to right: Gastón, Athul, Felipe R., Rubén, Felipe H., Katy, Mauricio, Johan, Bastián,
                        Fernanda.
                    </p>
                </div>

                <div class="text-center">
                    <img class="img-fluid" :src="require(`../../../public/assets/group-sep-2019.jpg`)" alt="">
                    <p class="small-p">
                        <strong>Sep. 2019</strong>
                        - Left to right: Rubén, Mauricio, Diego, Iván, Jonathan, Felipe H., Ignacio, Vanessa, Federico,
                        Johan, Felipe R.
                    </p>
                </div>

            </div>
            <div class="col"></div>
        </div>

        <div class="row justify-content-center">
            <div class="col"></div>
            <div class="col-6">
                <div class="container">
                    <h2>Principal Investigator</h2>
                    <ul>
                        <li>
                            <a href="#">Prof. Felipe Herrera</a>
                            <p>Assistant Professor, Department of Physics,</p>
                            <p>Universidad de Santiago de Chile, USACH</p>
                        </li>
                        <li>
                            <a href="/assets/cv/cvfelipe.pdf" target="_blank">[Curriculum Vitae]</a>
                        </li>
                    </ul>
                </div>

                <div class="container">
                    <PeopleSet title="Postdoctoral Researchers" :group_people="postdocResearchers" />
                </div>

                <div class="container">
                    <PeopleSet title="PhD Students" :group_people="phdStudents" />
                </div>

                <div class="container">
                    <PeopleSet title="Master Students" :group_people="masterStudents" />
                </div>

                <div class="container">
                    <PeopleSet title="Research Assistants" :group_people="researchAssistants" />
                </div>

                <div class="container">
                    <PeopleSet title="Undergraduate Students" :group_people="undergraduateStudents" />
                </div>

                <div class="container">
                    <PeopleSet title="Alumni" :group_people="alumni" />
                </div>
            </div>

            <div class="col"></div>

        </div>


    </div>
</template>



<script setup>
import PeopleSet from '@/components/PeopleSet.vue';
import { ref } from 'vue';

const postdocResearchers = ref([]);
const phdStudents = ref([]);
const masterStudents = ref([]);
const researchAssistants = ref([]);
const undergraduateStudents = ref([]);
const alumni = ref([]);

const fillPostDocResearchers = () => {
    const names = ['Thulasi Bikku', 'Ruben Fritz', 'Johan Triana'];
    const grade_name = ['PhD Computer Science 2018', 'PhD Applied Science 2018', 'PhD Physics 2019'];
    const university = ['J.N.T.U.A, Ananthapuramu', 'Universidad de Talca', 'Universidad de Antioquia'];

    for (let i = 0; i < names.length; i++) {
        postdocResearchers.value.push({
            name: names[i],
            grade_name: grade_name[i],
            university: university[i]
        });
    }
}

const fillPhdStudents = () => {
    const names = ['Katy Arauchan', 'Felipe Recabal', 'Athul Sivan',
        'Mauricio Arias'];
    const grade_name = ['BSc Physics 2017', 'MSc Physics 2021',
        'MSc Physics 2016', 'MSc Physics 2015'];
    const university = ['Universidad de Córdoba, Colombia', 'USACH',
        'ISER-TVM, India', 'UdeC. Visiting PhD student'];

    for (let i = 0; i < names.length; i++) {
        phdStudents.value.push(
            {
                name: names[i],
                grade_name: grade_name[i],
                university: university[i]
            })
    }
}

const fillMasterStudents = () => {
    const names = ['Simón Paiva'];
    const grade_name = ['BSc Engineering Physics 2020'];
    const university = ['USACH'];

    for (let i = 0; i < names.length; i++) {
        masterStudents.value.push(
            {
                name: names[i],
                grade_name: grade_name[i],
                university: university[i]
            }
        )
    }
}

const fillResearchAssistants = () => {
    const names = ['Gastón González'];
    const grade_name = ['MSc Physics 2021'];
    const university = ['USACH'];

    for (let i = 0; i < names.length; i++) {
        researchAssistants.value.push(
            {
                name: names[i],
                grade_name: grade_name[i],
                university: university[i]
            }
        )
    }
}

const fillUndergraduateStudents = () => {
    const names = ['Bastián Martínez', 'Fernanda Véliz', 'Felipe Osorio'];
    const grade_name = ['BSc Computer Science 2024', 'BSc Computer Science 2023',
        'BSc Computer Science 2023'];
    const university = ['USACH', 'USACH', 'USACH'];

    for (let i = 0; i < names.length; i++) {
        undergraduateStudents.value.push(
            {
                name: names[i],
                grade_name: grade_name[i],
                university: university[i]
            }
        )
    }
}

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

fillPostDocResearchers();
fillPhdStudents();
fillMasterStudents();
fillResearchAssistants();
fillUndergraduateStudents();
fillAlumni();


</script>


<style scoped>
ul {
    list-style-type: disc;
}

p {
    margin: 1px;
}

.small-p {
    font-size: 0.75em;
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