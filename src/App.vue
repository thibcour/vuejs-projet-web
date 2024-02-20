<template>
  <div>
    <HomePage />
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue'

export default {
  components: {
    HomePage,
  },
  data() {
    return {
      pageTitre: 'Accueil',
    }
  },
  mounted() {
    document.title = this.pageTitre;
  },
};
</script>

<style>
/* Ajoutez ici tout style global dont vous avez besoin */
</style>