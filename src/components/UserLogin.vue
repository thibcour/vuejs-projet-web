<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">Login</div>
          <div class="card-body">
            <form @submit.prevent="login">
              <div class="mb-3">
                <label class="form-label">Username</label>
                <input type="text" v-model="username" class="form-control" placeholder="Username" required>
              </div>
              <div class="mb-3">
                <label class="form-label">Password</label>
                <input type="password" v-model="password" class="form-control" placeholder="Password" required>
              </div>
              <button type="submit" class="btn btn-primary">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { getDatabase, ref as dbRef, get } from "firebase/database";
import { SHA256 } from 'crypto-js';

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const username = ref('');
    const password = ref('');

    const login = async () => {
      const db = getDatabase();
      const userRef = dbRef(db, `users/${username.value}`);
      const snapshot = await get(userRef);
      const user = snapshot.val();
      if (user && SHA256(password.value).toString() === user.password) {
        store.commit('setUser', { ...user, username: username.value }); // Utilisez une mutation pour mettre à jour l'état
        console.log('User logged in:', store.state.user); // Ajoutez cette ligne
        store.dispatch('showNotification', { message: 'Logged in successfully', type: 'success' });
        router.push('/');
      } else {
        store.dispatch('showNotification', { message: 'Invalid username or password', type: 'error' });
      }
    };

    return { username, password, login };
  }
};
</script>