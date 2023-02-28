<template>
    <TripleColumna>
        <template v-slot:contenido>
            <h1 class="azulado-oscuro">Quantum Control with Ultracold Molecules</h1>
            <img class="img-fluid" src="/assets/driven-polar-molecules.jpeg" alt="imagen">
            <div class="container text-start">
                <p class="my-2 ">
                    Atomic, molecular and optical (AMO) physics is at the core of all our research activities. We have
                    studied a number of coherent control schemes designed to manipulate ultracold atomic and molecular
                    collisions using electric and magnetic fields in optical traps, proposing a solution to the
                    well-known difficulty of achieving coherent control of two-body processes via path-interference. We
                    have also studied the collective dynamics of cold polar molecules in optical lattices with tunable
                    phonons arising from the long-range dipole-dipole interactions induced by static electric fields,
                    proposing the first quantum simulator of Holstein polaron physics beyond the conventional regimes
                    commonly found in condensed-matter systems. We have also shown that open-shell polar molecules in
                    optical lattices can be used to implement universal two-qubit quantum gates with single-site
                    resolution using static magnetic fields and far-detuning near-infrared lasers.
                </p>
                <p class="my-2 ">
                    We are currently exploring novel sympathetic cooling schemes based on laser-driven atom-molecule
                    collisions between ultracold Rydberg-dressed atoms and polar polyatomic molecules in
                    three-dimensional dipole traps. Designing a general realistic scheme for bringing polyatomic
                    molecules from the millikelvin regime to the microkelvin regime without would allow researchers to
                    explore new cold molecule physics and chemistry.
                </p>

                <strong>
                    <p class="my-2 ">
                        Representative Publications:
                    </p>
                </strong>

                <p class="my-2 ">
                    F. Herrera, Y. Cao, S. Kais, K. B. Whaley, Infrared-dressed entanglement of cold open-shell polar
                    molecules for universal matchgate quantum computing, New J. Phys. 16, 075001, 2014
                </p>

                <p class="my-2 ">
                    F. Herrera, K. W. Madison, R. V. Krems, M. Berciu, Investigating polaron transitions with polar
                    molecules, Phys. Rev. Lett. 110, 223002, 2013
                </p>

                <p class="my-2 ">
                    F. Herrera and R. V. Krems, Tunable Holstein model with cold polar molecules, Phys. Rev. A 84,
                    051401(R), 2011
                </p>

                <p class="my-2 ">
                    F. Herrera, Quantum control of binary and many-body interactions in ultracold molecular gases, PhD
                    Thesis, University of British Columbia, 2012
                </p>

            </div>
        </template>

    </TripleColumna>

</template>

<script setup>
import TripleColumna from "@/components/TripleColumna.vue";


</script>