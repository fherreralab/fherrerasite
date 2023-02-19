<template>
    <nav class="navbar navbar-expand-lg colorNav mt-1">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navBarToggler"
                aria-controls="navBarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navBarToggler">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                    <router-link class="navbar-brand text-color" to="/">
                        Herrera Lab
                    </router-link>
                    <router-link class="navbar-brand text-color" to="/publications">
                        Publications
                    </router-link>
                    <li class="nav-item">
                        <a class="nav-link text-color" href="/people">People</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-color" href="/openings">Openings</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-color" href="/news">Group News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-color" href="/resources">Resources</a>
                    </li>
                </ul>
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
    margin:0;
    float:none;
}

.navbar-inner{
    text-align:center;
}

</style>