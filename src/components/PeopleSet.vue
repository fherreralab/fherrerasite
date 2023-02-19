<template>
<ul>
    <h2>{{ title }}</h2>
    <li v-for="(people, index) in group_people" :key="index">
        <p>
            <strong>
                {{ people.name }}
            </strong>,
            {{ people.grade_name }}, {{ people.university }}.
        </p>
    </li>
</ul>

</template>

<script setup>
import { defineProps } from 'vue';


defineProps(
    {
        group_people: Array,
        title: String
    }
);


</script>