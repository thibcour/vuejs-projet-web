<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">Register</div>
          <div class="card-body">
            <form @submit.prevent="register">
              <div class="mb-3">
                <label class="form-label">Username</label>
                <input type="text" v-model="username" class="form-control" placeholder="Username" required>
              </div>
              <div class="mb-3">
                <label class="form-label">Password</label>
                <input type="password" v-model="password" class="form-control" placeholder="Password" required>
              </div>
              <button type="submit" class="btn btn-primary">Register</button>
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
import { getDatabase, ref as dbRef, set, get } from "firebase/database";
import { SHA256 } from 'crypto-js';

export default {
  setup() {
    const store = useStore();
    const username = ref('');
    const password = ref('');

    const register = async () => {
      const db = getDatabase();
      const userRef = dbRef(db, `users/${username.value}`);
      const snapshot = await get(userRef);
      const user = snapshot.val();
      if (user) {
        store.dispatch('showNotification', { message: 'User already exists', type: 'error' });
      } else {
        const hashedPassword = SHA256(password.value).toString();
        await set(userRef, {
          password: hashedPassword,
          admin: false
        });
        store.dispatch('showNotification', { message: 'Registered successfully', type: 'success' });
      }
    };

    return { username, password, register };
  }
};
</script>