<template>
  <div>
    <template v-if="!isLoggedIn">
      <div class="login-message">
        <h2>Bienvenue sur Toobo !</h2>
        <p>Pour accéder à la collection, veuillez vous connecter ou créer un compte.</p>
        <router-link to="/login" class="btn btn-primary">Se connecter</router-link>
        <router-link to="/register" class="btn btn-secondary">Créer un compte</router-link>
      </div>
    </template>
    <template v-else>
      <AppMaps />
      <AppShop />
    </template>
  </div>
</template>

<script>
import {computed} from 'vue';
import {useStore} from 'vuex';
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
      isAdmin, isLoggedIn
    };
  }
};
</script>

<style scoped>
.login-message {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background-color: #f8f9fa;
  color: #333;
}

.login-message h2 {
  font-size: 2.5em;
  margin-bottom: 1em;
}

.login-message p {
  font-size: 1.2em;
  margin-bottom: 2em;
}

.login-message .btn {
  margin: 0.5em;
  padding: 1em 2em;
  font-size: 1em;
  border-radius: 5px;
  text-decoration: none;
}

.login-message .btn-primary {
  background-color: #007bff;
  color: white;
}

.login-message .btn-secondary {
  background-color: #6c757d;
  color: white;
}
</style>