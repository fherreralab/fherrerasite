<template>
    <nav class="navbar navbar-expand-sm colorNav">
        <div class="container-fluid">
            <div class="mx-auto d-flex justify-content-center flex-wrap">
                <button class="navbar-toggler mx-4" type="button" data-bs-toggle="collapse" data-bs-target="#navBarToggler"
                    aria-controls="navBarToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggle-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </button>
                <router-link class="navbar-brand text-color ms-auto" to="/">
                    Herrera Lab
                </router-link>

                <div class="collapse navbar-collapse" id="navBarToggler">
                    <ul class="navbar-nav">
                        <router-link class="nav-link text-color" to="/publications">
                            Publications
                        </router-link>
                        <li class="nav-item">
                            <router-link class="nav-link text-color" to="/people">
                                People
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link text-color" to="/openings">
                                Openings
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link text-color" to="/news">
                                Group News
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link text-color" to="/resources">
                                Resources
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.colorNav {
    background-color: #0B518E;
}

.text-color {
    color: #FDFDFD;
}

.nav.nav-center {
    margin: 0;
    float: none;
}

.navbar-inner {
    text-align: center;
}

.navbar-toggle-icon {
    display: block;
    width: 24px;
    height: 24px;
    position: relative;
    cursor: pointer;
}

.navbar-toggle-icon span {
    display: block;
    width: 100%;
    height: 3px;
    background-color: #438ac7;
    position: absolute;
    left: 0;
    transition: transform 0.3s ease-in-out;
}

.navbar-toggle-icon span:nth-child(1) {
    top: 0;
}

.navbar-toggle-icon span:nth-child(2) {
    top: 50%;
    transform: translateY(-50%);
}

.navbar-toggle-icon span:nth-child(3) {
    bottom: 0;
}

.navbar-toggle-icon.active span:nth-child(1) {
    transform: translateY(50%) rotate(45deg);
}

.navbar-toggle-icon.active span:nth-child(2) {
    transform: scale(0);
}

.navbar-toggle-icon.active span:nth-child(3) {
    transform: translateY(-50%) rotate(-45deg);
}
</style>