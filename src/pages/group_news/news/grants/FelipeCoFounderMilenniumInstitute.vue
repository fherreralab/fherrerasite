<template>
    <TripleColumna title="Felipe becomes a co-founder of new Millenium Institute" date="Jan 5, 2018">
        <template v-slot:contenido>
            <p class="my-3">
                The Millenium Scientific Initiative (<a href="http://www.iniciativamilenio.cl/">ICM</a>) at the Chilean
                Ministry of Economy published the results of the
                2017 competition to create two new Millenium Institutes in Chile, and we are happy to announce that our
                proposed Millenium Institute for Research in Optics (MIRO) was recommended to receive funding of
                <strong>US$1.600.000</strong> per year for up to
                <strong>10 years</strong>, to pursue cutting-edge research in key areas of
                experimental and theoretical optical science.
            </p>
            <p class="my-3">
                A few new <a href="https://www.iniciativamilenio.cl/en/millennium-institutes-and-nucleus/">Millenium
                    Institutes</a> are selected each year by an accomplished international scientific committee
                after a competitive process with rigorous <a
                    href="https://www.iniciativamilenio.cl/en/what-are-they/">evaluation criteria</a>.
            </p>
            <p class="my-3">
                Our Lab is proud to become one of co-founding partners of MIRO. In very close collaboration with the
                Nanosynthesis Lab led by
                <a href="https://scholar.google.cl/citations?user=j_0nksgAAAAJ&hl=en">Dinesh Pratap Singh</a> at USACH and
                the Quantum Cryptography Lab led by
                <a href="https://scholar.google.com/citations?user=aJHQ4PwAAAAJ">Gustavo Lima</a> at Universidad de
                Concepción, we are <strong>computationally designing, fabricating and testing new optical materials</strong>
                based on
                <router-link to="/mof-nlo">
                    metal-organic frameworks
                </router-link> (MOF), as novel sources of non-classical light to
                be used in entanglement-based quantum communication protocols.
            </p>
        </template>
    </TripleColumna>
</template>
<script setup>
import TripleColumna from '@/components/TripleColumna.vue';

</script>