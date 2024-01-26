<template>
  <BootstrapTemplate/>
</template>

<script>
import BootstrapTemplate from './components/BootstrapTemplate.vue'

export default {
  components: {
    BootstrapTemplate
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