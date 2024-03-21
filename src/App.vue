<template>
  <div class="app">
    <AppNavbar />
    <NotificationApp :message="notification.message" :type="notification.type" />
    <router-view />
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';
import NotificationApp from './components/NotificationApp.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';


export default {
  components: {
    AppNavbar,
    NotificationApp,
  },
  setup() {
    const store = useStore();
    const notification = computed(() => store.state.notification);
    return { notification };
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
/* Personnalisation de la barre de défilement pour tous les éléments */
*::-webkit-scrollbar {
  width: 10px; /* Largeur de la barre de défilement */
}

*::-webkit-scrollbar-track {
  background: #f1f1f1; /* Couleur de fond de la piste de défilement */
}

*::-webkit-scrollbar-thumb {
  background: #888; /* Couleur de la barre de défilement */
}

*::-webkit-scrollbar-thumb:hover {
  background: #555; /* Couleur de la barre de défilement au survol */
}
</style>

