<template>

    <div class="container">
        <div class="row justify-content-center">

            <div class="col">

            </div>
            <div class="col-6 text-start">
                <h3>Group News</h3>

                <div class="container-fluid">
                    <GroupNewsLink v-for="(news, index) in groupNews" :key="index" :title="news.title" :name="news.name"
                        :date="news.date" />
                </div>

            </div>
            <div class="col">

            </div>
        </div>
    </div>

</template>

<script setup>
import GroupNewsLink from '@/components/GroupNewsLink.vue';
import { ref } from 'vue';

const groupNews = ref([]);

const iniciarGroupNews = () => {
    groupNews.value = [
        {
            title: "Ricky Parada returns to Stanford after Undergraduate Research Experience",
            date: "Aug 24, 2022",
            name: 'StanfordRicky',
        },
        {
            title: "The 2nd Workshop on Molecular Quantum Technolgy is open for submissions",
            date: "Jun 1, 2022",
            name: 'MQTSubmission',
        },
        {
            title: "Felipe Herrera receives Fondecyt Regular Grant from ANID",
            date: "Jan 15, 2022",
            name: 'FelipeFondecytGrant',
        },
        {
            title: "Felipe Herrera joins Editorial Advisory Board at The Journal of Chemical Physics",
            date: "Jan 15, 2022",
            name: 'FelipeEditorialAdvisoryBoard',
        },
        {
            title: "Vanessa Olaya starts her PhD in Sydney",
            date: "Dec 30, 2021",
            name: 'VanessaOlaya',
        },
        {
            title: "Undergrad student Melissa Silva joins our group as a visiting researcher from Universidad Mayor",
            date: "Aug 10, 2021",
            name: 'MelissaJoins',
        },
        {
            title: "Undergrad student Bastián Martínez joins our group as a Faculty of Science Fellow",
            date: "Aug 1, 2021",
            name: 'BastianJoins',
        },
        {
            title: "Gastón González successfully defends his master thesis",
            date: "May 31, 2021",
            name: 'GastonDefendsMasterThesis',
        },
        {
            title: "Felipe Recabal successfully defends his master thesis",
            date: "Apr 27, 2021",
            name: 'FelipeDefendsMasterThesis',
        },
        {
            title: "'Molecular Polariton' Perspective becomes one of JCP's most read articles in 2020",
            date: "Mar 15, 2021",
            name: 'MolecularPolariton',
        },
        {
            title: "Ignacio Chi starts his PhD in Chicago",
            date: "Dec 28, 2020",
            name: 'IgnacioChi',
        },
        {
            title: "Jonathan Sepúlveda starts his PhD in Spain",
            date: "Dec 10, 2020",
            name: 'JonathanSepulveda',
        },
        {
            title: "Dr. Thulasi Bikku joins our group as a postdoctoral researcher",
            date: "Nov 1, 2020",
            name: 'WelcomeThulasiBikku',
        },
    ];
}

iniciarGroupNews();
</script>