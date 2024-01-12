<template>
    <div class="container people-card px-5">
        <slot class="container-imagen" name="imagen"></slot>
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

<style scoped>

.people-card {
    padding: 15px; /* Ajusta según sea necesario */
    margin-bottom: 15px; /* Espaciado entre tarjetas */
}

.container {
    padding: 20px; /* Esto añade un relleno en todos los lados del contenedor */
}

</style>