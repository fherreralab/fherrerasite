<template>
    <NavBar />
    <router-view />
    <FooterPage />
</template>

<script>
import FooterPage from './components/FooterPage.vue';
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    FooterPage,
    NavBar
  }
}
</script>