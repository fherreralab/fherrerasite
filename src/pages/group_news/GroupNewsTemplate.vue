<template>
    <TripleColumna title="Title of my page" date="Nov 10, 2019">
        <template v-slot:contenido>
            <img src="/assets/image_route" alt="" class="img-fluid">
            <!-- 
                | This is the content of the page.   |
                | You can use any HTML element here. |
                | Take this template and use it      |
                | for your own pages.                |
             -->
        </template>
    </TripleColumna>
</template>

<script setup>
import TripleColumna from '@/components/TripleColumna.vue';

</script>