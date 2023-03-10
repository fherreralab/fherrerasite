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
import { group_news_routes } from '@/routes';

const groupNews = group_news_routes;

</script>