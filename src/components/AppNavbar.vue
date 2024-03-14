<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <img :src="logoUrl" alt="Logo" class="navbar-logo">
      <a class="navbar-brand" href="#">Toboo</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item"><router-link class="nav-link active" to="/">Home</router-link></li>
          <li class="nav-item" v-if="!isLoggedIn"><router-link class="nav-link" to="/login">Login</router-link></li>
          <li class="nav-item" v-if="!isLoggedIn"><router-link class="nav-link" to="/register">Register</router-link></li>
          <li class="nav-item" v-if="isLoggedIn">
            <span class="nav-link">{{ user.username }}</span>
          </li>
          <li class="nav-item" v-if="isLoggedIn">
            <button class="btn btn-link nav-link" @click="logout">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  data() {
    return {
      logoUrl: require('@/assets/LogoToboo.png') // chemin du logo
    };
  },
  setup() {
    const store = useStore();
    const isLoggedIn = computed(() => store.state.isLoggedIn);
    const user = computed(() => store.state.user);

    const logout = () => {
      store.state.isLoggedIn = false;
      store.state.user = null;
      store.state.admin = false; // Mettre à jour le statut d'administrateur
    };

    return { isLoggedIn, user, logout };
  },
};
</script>

<style scoped>
.navbar-logo {
  height: 30px;
  margin-right: 10px;
}
</style>