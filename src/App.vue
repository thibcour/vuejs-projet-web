<template>
  <div>
    <AppNavbar/>
    <AppMaps />
    <MeteoApp />
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue'
import AppMaps from './components/AppMaps.vue'
import MeteoApp from "@/components/MeteoApp.vue";

export default {
  components: {
    AppNavbar,
    AppMaps,
    MeteoApp,
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
