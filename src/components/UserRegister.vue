<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">Inscription</div>
          <div class="card-body">
            <form @submit.prevent="register">
              <div class="mb-3">
                <label class="form-label">Nom d'utilisateur</label>
                <input type="text" v-model="username" class="form-control" placeholder="Nom d'utilisateur" required>
              </div>
              <div class="mb-3">
                <label class="form-label">Email</label>
                <input type="email" v-model="email" class="form-control" placeholder="Email" required>
              </div>
              <div class="mb-3">
                <label class="form-label">Mot de passe</label>
                <input type="password" v-model="password" class="form-control" placeholder="Mot de passe" required>
              </div>
              <button type="submit" class="btn btn-primary">Inscription</button>
            </form>
            <br/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import {get, getDatabase, ref as dbRef, set} from "firebase/database";
import { createUserWithEmailAndPassword, getAuth , useDeviceLanguage} from "firebase/auth";
import router from "@/router";

export default {
  setup() {
    const store = useStore();
    const username = ref('');
    const password = ref('');
    const email = ref('');

    const register = async () => {
      const auth = getAuth();
      useDeviceLanguage(auth);
      const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
      if (!emailRegex.test(email.value)) {
        store.dispatch('showNotification', { message: 'L\'email n\'est pas valide', type: 'error' });
        return;
      }
      if (password.value.length < 6) {
        store.dispatch('showNotification', { message: 'Le mot de passe doit comporter au moins 6 caractères', type: 'error' });
        return;
      }
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
        const user = userCredential.user;
        const db = getDatabase();
        const userRef = dbRef(db, `users/${user.uid}`);
        await set(userRef, {
          admin: false,
          email: user.email,
          username: username.value
        });
        // Get the user data from the database
        const snapshot = await get(userRef);
        if (snapshot.exists()) {
          user.username = snapshot.val().username;
          user.admin = snapshot.val().admin;
        }
        const isAdmin = await store.dispatch('login', user);
        if (isAdmin) {
          router.push('/admin-dashboard');
        } else {
          router.push('/');
        }
        store.dispatch('showNotification', { message: 'Inscription réussie', type: 'success' });
        username.value = '';
        password.value = '';
        email.value = '';
      } catch (error) {
        console.error(error.code); // This will log the error code
        console.error(error.message); // This will log the error message
        store.dispatch('showNotification', { message: error.message, type: 'error' });
      }
    };

    return { username, password, email, register };
  }
};
</script>


<style scoped>
.card {
  width: 80%;
  margin: auto;
}
</style>
