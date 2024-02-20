<template>
  <div>
    <AppNavbar/>
    <AppMaps />
    <MeteoApp />
  </div>
</template>

<script>
import AppNavbar from './AppNavbar.vue'
import AppMaps from './AppMaps.vue'
import MeteoApp from "./MeteoApp.vue";

export default {
  name: 'HomePage',
  components: {
    AppNavbar,
    AppMaps,
    MeteoApp,
  },
};
</script>