<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
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
      store.dispatch('logout'); // Call the logout action from the store
      store.commit('logout'); // Call the logout mutation from the store
      router.push('/'); // Redirect to the home page after logout
      store.dispatch('showNotification', { message: 'Logged out successfully', type: 'success' }); // Add this line to show a notification
    };

    return {username, isLoggedIn, logout, isAdmin }; // Ajout de isAdmin aux propriétés retournées
  },
};
</script>

<style scoped>
.navbar-logo {
  height: 30px;
  margin-right: 10px;
}
</style>