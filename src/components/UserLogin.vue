<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">Login</div>
          <div class="card-body">
            <form @submit.prevent="login">
              <div class="mb-3">
                <label class="form-label">Email</label>
                <input type="email" v-model="email" class="form-control" placeholder="Email" required>
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
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { getDatabase, ref as dbRef, get } from "firebase/database";
import router from "@/router";

export default {
  setup() {
    const store = useStore();
    const password = ref('');
    const email = ref('');

    const login = async () => {
      const auth = getAuth();
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
        const user = userCredential.user;
        const db = getDatabase();
        const userRef = dbRef(db, `users/${user.uid}`);
        const snapshot = await get(userRef);
        if (snapshot.exists()) {
          user.username = snapshot.val().username;
        }
        const isAdmin = await store.dispatch('login', user); // get the returned value from the action
        if (isAdmin) {
          router.push('/admin-dashboard'); // use router.push here
        } else {
          router.push('/'); // Redirect non-admin users to the home page
        }
        store.dispatch('showNotification', { message: 'Connexion réussie', type: 'success' });
        email.value = '';
        password.value = '';
      } catch (error) {
        console.error(error.code); // This will log the error code
        console.error(error.message); // This will log the error message
        store.dispatch('showNotification', { message: error.message, type: 'error' });
      }
    };

    return { email, password, login };
  }
};
</script>

<style scoped>
.card {
  width: 120%;
  margin: auto;
}
</style>