<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top ">
    <div class="container">
      <img :src="logoUrl" alt="Logo" class="navbar-logo">
      <a class="navbar-brand" href="#">Toobo</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item"><router-link class="nav-link active" to="/">Home</router-link></li>
          <li class="nav-item" v-if="!isLoggedIn"><router-link class="nav-link" to="/login">Login</router-link></li>
          <li class="nav-item" v-if="!isLoggedIn"><router-link class="nav-link" to="/register">Register</router-link></li>
          <li class="nav-item" v-if="isLoggedIn">
            <span class="nav-link">{{ username }}</span>
          </li>
          <li class="nav-item" v-if="isLoggedIn">
            <button class="btn btn-link nav-link" @click="logout">Logout</button>
          </li>
          <!-- Lien vers le tableau de bord pour les administrateurs -->
          <li class="nav-item" v-if="isAdmin"><router-link class="nav-link" to="/admin-dashboard">Dashboard</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import router from "@/router";

export default {
  data() {
    return {
      logoUrl: require('@/assets/LogoToboo.png') // chemin du logo
    };
  },
  setup() {
    const store = useStore();
    const isLoggedIn = computed(() => store.state.isLoggedIn);
    const username = computed(() => store.state.user ? store.state.user.username : ''); // Change this line
    const isAdmin = computed(() => store.state.admin); // Ajout de la propriété calculée isAdmin

    const logout = () => {
      store.dispatch('logout'); // action de déconnexion
      store.commit('logout'); // mutation de déconnexion (pour effacer les données de l'utilisateur)
      router.push('/'); // Rediriger vers la page d'accueil
        store.dispatch('showNotification', { message: 'Deconnexion réussie', type: 'success' }); // Afficher une notification de déconnexion
    };

    return {username, isLoggedIn, logout, isAdmin };
  },
};
</script>

<style scoped>
.navbar-logo {
  height: 30px;
  margin-right: 10px;
}
</style>