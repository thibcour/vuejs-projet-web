<template>
  <div>
    <AppMaps />
    <AppShop />
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import AppMaps from './AppMaps.vue'
import AppShop from "@/components/AppShop.vue";


export default {
  name: 'HomePage',
  components: {
    AppMaps,
    AppShop,
  },
  setup() {
    const store = useStore();
    const isAdmin = computed(() => store.state.admin);
    const isLoggedIn = computed(() => store.state.isLoggedIn);

    return {
      isAdmin , isLoggedIn
    };
  }
};
</script>