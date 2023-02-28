<template>

    <div class="container px-5">
        <slot name="imagen"></slot>
        <h3>
            <strong>{{ name }}</strong>
        </h3>

        <slot name="contenido"></slot>
        <slot name="redessociales"></slot>

    </div>

</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    name: String,
})

</script>