<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-2 col-sm-1">

            </div>
            <div class="col-md-8 col-sm-10 text-start">
                <div class="container-fluid">
                    <div v-if="title" class="row mt-4 text-center">
                        <h2 class="azulado-oscuro">
                            {{title}}
                        </h2>
                    </div>
                    <div v-if="date" class="row mb-4">
                        <small class="date-color">{{date}}</small>
                    </div>

                    <div class="mt-3">
                        <slot name="contenido"></slot>
                    </div>
                </div>
            </div>
            <div class="col-md-2 col-sm-1">

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