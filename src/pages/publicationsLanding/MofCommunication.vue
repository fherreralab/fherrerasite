<template>
    <PublicationTemplate title="Metal-Organic Frameworks for Quantum Communication" imageName="mof-shg.jpeg">

        <template v-slot:publicationContent>
            <div class="container text-start">
                <p class="my-2 mx-5">
                    Our group is currently developing high-throughput virtual-screening software using open-source RDKit
                    tools together with in-house physical modelling, for the automated discovery of experimentally
                    accessible single-crystal metal-organic frameworks (MOF) that can enable efficient second-harmonic
                    generation (SHG) and spontaneous parametric down conversion (SPDC). This computational material
                    discovery effort expands our previous work on the design of nanoscale nonlinear waveguides for
                    third-order quantum nonlinear optics.
                </p>
                <p class="my-2 mx-5">
                    Our goal is to
                    <strong>
                        build a large-scale computational and synthetic capacity to develop new entangled
                        photon sources and frequency doubling devices
                    </strong>
                    based on high-quality MOF crystals. This is one of the
                    main research directions of the new 
                    <a href="/miro">Millennium Institute for Research in Optics</a>
                    .
                </p>

                <strong>
                    <p class="my-2 mx-5">
                        Representative Publications:
                    </p>
                </strong>

                <p class="my-2 mx-5">
                    J. Enríquez, I. Chi-Durán, C. Manquián, F. Herrera, D. P. Singh, Controlled growth of the
                    non-centrosymmetric Zn(3-ptz)2 and Zn(OH)(3-ptz) metal-organic frameworks, chemrxiv.7588640.v1
                </p>

                <p class="my-2 mx-5">
                    I. Chi-Duran, J. Enriquez, C. Manquian, W. Cañon-Mancisidor, D. Venegas-Yazigi, F. Herrera, D. P.
                    Singh, pH-controlled assembly of 3D and 2D zinc-based metal-organic frameworks with tetrazole
                    ligands, ACS Omega 3, 801, 2018
                </p>

            </div>
        </template>

    </PublicationTemplate>

</template>

<script setup>
import PublicationTemplate from '@/components/PublicationTemplate.vue';
</script>