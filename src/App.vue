<template>
  <div>
    <AppNavbar />
    <NotificationApp :message="notification.message" :type="notification.type" />
    <br/>
    <br/>
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

