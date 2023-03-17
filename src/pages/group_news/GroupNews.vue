<template>
    <TripleColumna>
        <template v-slot:contenido>
            <h3 class="text-center">Group News</h3>

            <GroupNewsLink v-for="(news, index) in groupNews" :key="index" :title="news.title" :name="news.name"
                :date="news.date" />

        </template>

    </TripleColumna>
</template>

<script setup>
import GroupNewsLink from '@/components/GroupNewsLink.vue';
import { group_news_routes } from '@/routes';

import TripleColumna from '@/components/TripleColumna.vue';

const groupNews = group_news_routes;

console.log(groupNews);

</script>