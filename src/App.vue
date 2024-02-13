<template>
  <AppNavbar/>
  <AppMaps/>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue'
import AppMaps from "@/components/AppMaps.vue";

export default {
  components: {
    AppNavbar,
    AppMaps
  },
  data(){
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