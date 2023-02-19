<template>
    <TripleColumna title="The 2nd Workshop on Molecular Quantum Technolgy is open for submissions" date="Jun 1, 2022">
        <template v-slot:contenido>
            <div class="col text-start mt-4">
                <div class="row">
                    <img class="img-fluid" src="/assets/group_news_images/mqt2022-announcement.jpeg" alt="">
                </div>

                <p class="my-3">
                    The 2nd Workshop on Molecular Quantum Technology (MQT 2022) is now open for abstract submissions at
                    https://mqt2022.org, until <strong>August 30, 2022.</strong>
                </p>

                <p class="my-3">
                    MQT 2022 an in-person workshop that will bring together scientists across disciplines to discuss
                    fundamental science and applications where molecules and molecular materials could contribute to the
                    field of quantum technology in novel ways.
                </p>

                <p class="my-3">
                    Submissions are encouraged in the following topics: <strong>Cold Molecules, Molecular Spins, Strong
                        Light-Matter Interaction, Molecular Nanophotonics.</strong>
                </p>

                <p class="my-3">
                    Please address your inquires to any of the organizers: Sandrine Heutz (UCL), Rosario González-Feréz
                    (Granada), Markus Raschke (CU Boulder), Jeffrey Owrutsky (NRL), and Felipe Herrera (USACH).
                </p>

                <p v-for="(speaker, index) in invited_speakers" :key="index">
                    {{ speaker }}
                </p>

                <p class="my-3">
                    MQT is generously sponsored by ANID - MIllennium Institute for Research in Optics (MIRO). Learn more
                    about MIRO <a href="https://www.miroptics.cl/">here</a>.
                </p>
            </div>

        </template>


    </TripleColumna>
</template>

<script setup>
import TripleColumna from '@/components/TripleColumna.vue';

const invited_speakers = [
    'Alexey Belyanin, Texas A&M University',
    'Josh Caldwell, Vanderbilt University',
    'Jianshy Cao, Massachusetts Institute of Technology',
    'Simon Cornish, Durham University',
    'Eugenio Coronado, Universitat de Valencia',
    'Adam Dunkelberger, U.S. Naval Research Laboratory',
    'Gilad Haran, Weizmann Institute of Science',
    'Tijs Karman, Radboud University',
    'Stephane Kena-Cohen, Polytechnique Montreal Technological University',
    'Kevin Kubarych, University of Michigan',
    'Shaul Mukamel, University of California Irvine',
    'Prineha Narang, Harvard University',
    'Abraham Nitzan, University of Pennsylvania',
    'Hossein Sadeghpour, Institute for Theoretical Atomic Molecular and Optical Physics',
    'Vahid Sandoghdar, Max Planck Institute for the Science of Light',
    'Marissa Weichman, Princeton University',
    'Hanna Williams, Durham University',
    'Joel Yuen-Zhou, University of California San Diego',
];

</script>