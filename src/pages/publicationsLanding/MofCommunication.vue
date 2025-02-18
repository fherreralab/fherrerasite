<template>
    <TripleColumna>
        <template v-slot:contenido>
            <h1 class="azulado-oscuro">Metal-Organic Frameworks for Quantum Communication</h1>
            <img class="img-fluid" src="/assets/mof-shg.jpeg" alt="imagen">
            <div class="container text-start">
                <p class="my-2 ">
                    Our group is currently developing high-throughput virtual-screening software using open-source RDKit
                    tools together with in-house physical modelling, for the automated discovery of experimentally
                    accessible single-crystal metal-organic frameworks (MOF) that can enable efficient second-harmonic
                    generation (SHG) and spontaneous parametric down conversion (SPDC). This computational material
                    discovery effort expands our previous work on the design of nanoscale nonlinear waveguides for
                    third-order quantum nonlinear optics.
                </p>
                <p class="my-2 ">
                    Our goal is to <strong>
                        build a large-scale computational and synthetic capacity to develop new entangled
                        photon sources and frequency doubling devices </strong> based on high-quality MOF crystals. This is one of the
                    main research directions of the new <router-link to="/miro">
                        Millennium Institute for Research in Optics.
                    </router-link>
                </p>

                <p class="my-2 ">
                    We are currently developing atomistic and phenomenological quantum decoherence models for <strong>
                        molecular spin qubits </strong> based on high-quality MOF crystals, opening new directions 
                        in quantum sensing and information processing.  
                </p>
                <strong>
                    <p class="my-2 ">
                        Representative Publications:
                    </p>
                </strong>

                <ul>

                    <li>
                        S. Paiva, R.A. Fritz, S. Raj, Y.J. Colón, F. Herrera, <i>
                        Efficient Generation of Polarization-Entangled Photons in Metal Organic Framework Waveguides</i>, Optics Express 32, 29514, 2024. 
                    </li>

                    <li>
                        S. Raj, S. Paiva, R.A. Fritz, F. Herrera, Y.J. Colón, <i>First-Principles Screening of Metal-Organic Frameworks for Entangled Photon Pair Generation</i>, 
                        Mater. Quantum. Technol. 4 015404, 2024.
                    </li>

                    <li>
                        K. Aruachan, Y. J. Colón, D. Aravena, F. Herrera, <i>Semi-Empirical Haken-Strobl Model 
                            for Molecular Spin Qubits</i>, New J. Phys. 25, 093031, 2023. 
                    </li>

                    <li>
                        D. Hidalgo, J. M. García-Garfido, J. Enríquez, R. Rojas-Aedo, R. A. Wheatley, 
                    R. A. Fritz, D. P. Singh, F. Herrera, B. Seifert, <i>Phase-Coherent Optical Frequency Up-Conversion 
                        with Millimeter-Size Zn(3-ptz)2 Metal-Organic Framework Single Crystals</i>, 
                        Adv. Opt. Mat. 2300142, 2023.
                    </li>

                    <li>
                        J. García-Garfido, J. Enríquez, I. Chi-Durán, I. Jara, L. Vivas, F.J. Hernández, F. Herrera,
                    D.P. Singh, <i> Millimeter-scale Zn(3-ptz)2 metal-organic framework single crystals: self-assembly mechanism and growth kinetics</i>, 
                    ACS Omega 6, 27, 17289–17298, 2021.
                    </li>

                    <li>
                        R.A. Fritz, Y. Colón, F. Herrera, <i>Engineering
                        entangled photon pairs using metal-organic frameworks</i>, Chem. Sci. 12, 3475-3482, 2021.
                    </li>
                    
                    <li>
                    I. Chi-Duran, J. Enriquez, C. Manquian, W. Cañon-Mancisidor, D. Venegas-Yazigi, F. Herrera, D. P.
                    Singh, <i>pH-controlled assembly of 3D and 2D zinc-based metal-organic frameworks with tetrazole
                    ligands</i>, ACS Omega 3, 801, 2018
                    </li>
                </ul>

            </div>
        </template>

    </TripleColumna>
</template>

<script setup>
import TripleColumna from '@/components/TripleColumna.vue';
</script>