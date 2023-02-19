<template>
    <div class="container">
        <div class="row justify-content-center">

            <div class="col">

            </div>
            <div class="col-6 text-start">
                <div class="container-fluid">
                    <div v-if="title" class="row mt-4">
                        <h2 class="azulado-oscuro">
                            {{title}}
                        </h2>
                    </div>
                    <div v-if="date" class="row mb-4">
                        <small class="date-color">{{date}}</small>
                    </div>
                    <slot name="contenido"></slot>
                </div>
            </div>
            <div class="col">

            </div>
        </div>
    </div>
</template>

<script setup>

import { defineProps } from 'vue';

defineProps({
    title: {
        type: String,
        required: false
    },
    date: {
        type: String,
        required: false
    }
}
);
</script>