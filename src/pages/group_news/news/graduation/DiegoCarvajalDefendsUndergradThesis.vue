<template>
    <TripleColumna title="Diego Carvajal successfully defends his undergrad thesis" date="Dec 1, 2018">
        <template v-slot:contenido>
            <p class="my-3">
                After successfully defending his undergraduate thesis entitled “<strong>Oscilador armónico cuántico
                    amortiguado bajoforzamiento periódico</strong>” (￼Damped Quantum Harmonic Oscillator under Periodic
                Driving), Diego fulfilled all requirements to obtain a professional title in Engineering Mathematics at USACH.
            </p>
            <p class="my-3">
                The thesis can be downloaded
                <router-link to="/resources">here</router-link>.
            </p>
            <p class="my-3">
                <strong>Congratulations Diego for a job well done!</strong>
            </p>
        </template>
    </TripleColumna>
</template>
<script setup>
import TripleColumna from '@/components/TripleColumna.vue';

</script>