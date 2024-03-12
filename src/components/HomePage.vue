<template>
  <div>
    <AppNavbar/>
    <AppMaps />
    <MeteoApp />
    <AppShop />
  </div>
</template>

<script>
import AppNavbar from './AppNavbar.vue'
import AppMaps from './AppMaps.vue'
import MeteoApp from "./MeteoApp.vue";
import AppShop from "@/components/AppShop.vue";

export default {
  name: 'HomePage',
  components: {
    AppNavbar,
    AppMaps,
    MeteoApp,
    AppShop,
  },
};
</script>