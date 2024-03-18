<template>
  <button class="btn btn-secondary float-right go-back-button" @click="goBack">Retour</button>
  <div class="mt-5">
    <div class="col-6">
      <div class="mb-3">
        <label class="form-label">Gestion des utilisateurs</label>
        <hr>
        <button class="btn btn-success mb-3" @click="openAddUserModal">Ajouter un utilisateur</button>
        <div>
        </div>
      </div>
    </div>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
        <tr>
          <th>Nom d'utilisateur</th>
          <th>Email</th>
          <th>UID</th>
          <th>Admin</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(user, uid) in users" :key="uid">
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>{{ uid }}</td>
          <td>
            <svg v-if="user.admin" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill svg-icon" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323A.75.75 0 0 0 4.616 8.03l2.363 2.394a.75.75 0 0 0 1.06 0l4.886-4.976a.75.75 0 0 0-.025-1.065z"/>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill svg-icon" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.293-2.707a1 1 0 0 0-1.414-1.414L8 6.586 5.707 4.293a1 1 0 0 0-1.414 1.414L6.586 8l-2.293 2.293a1 1 0 0 0 1.414 1.414L8 9.414l2.293 2.293a1 1 0 0 0 1.414-1.414L9.414 8l2.293-2.293z"/>
            </svg>
          </td>
          <td>
            <button class="btn btn-primary me-2" @click="openEditUserModal(user, uid)">Modifier</button>
            <button class="btn btn-danger me-2" @click="deleteUser(uid)">Supprimer</button>
            <button class="btn btn-secondary me-2" @click="toggleAdmin(uid)">Changer le statut d'admin</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

    <!-- Ajoutez ce modal pour la modification d'utilisateur -->
    <div class="modal" tabindex="-1" v-if="isEditUserModalOpen" :class="{ 'show d-block': isEditUserModalOpen }">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modifier l'utilisateur</h5>
            <button type="button" class="btn-close" @click="closeEditUserModal"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label">Nom d'utilisateur</label>
              <input type="text" v-model="editedUser.username" class="form-control">
            </div>
            <div class="mb-3">
              <label class="form-label">Admin</label>
              <select v-model="editedUser.admin" class="form-control">
                <option :value="true">True</option>
                <option :value="false">False</option>
              </select>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closeEditUserModal">Fermer</button>
            <button type="button" class="btn btn-primary" @click="editUser(editedUser, editedUser.uid)">Enregistrer les modifications</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Ajoutez ce modal pour l'ajout d'utilisateur -->
    <div class="modal" tabindex="-1" v-if="isAddUserModalOpen" :class="{ 'show d-block': isAddUserModalOpen }">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Ajouter un utilisateur</h5>
            <button type="button" class="btn-close" @click="closeAddUserModal"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label">Nom d'utilisateur</label>
              <input type="text" v-model="newUser.username" class="form-control">
            </div>
            <div class="mb-3">
              <label class="form-label">Mot de passe</label>
              <input type="password" v-model="newUser.password" class="form-control">
            </div>
            <div class="mb-3">
              <label class="form-label">Email</label>
              <input type="email" v-model="newUser.email" class="form-control">
            </div>
            <div class="mb-3">
              <label class="form-label">Admin</label>
              <select v-model="newUser.admin" class="form-control">
                <option :value="true">True</option>
                <option :value="false">False</option>
              </select>
            </div>
            <div v-if="newUser.errorMessage" class="alert alert-danger">{{ newUser.errorMessage }}</div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closeAddUserModal">Fermer</button>
            <button type="button" class="btn btn-primary" @click="addUser">Ajouter l'utilisateur</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import {getDatabase, ref as dbRef, onValue, update, get} from "firebase/database";
import { getAuth, createUserWithEmailAndPassword, updateProfile, deleteUser as firebaseDeleteUser } from "firebase/auth";
import store from "@/store";
import { remove } from "firebase/database";

export default {
  methods: {
    goBack() {
      this.$router.push('/admin-dashboard');
    },
  },
  setup() {
    const db = getDatabase();
    const users = ref({});
    const isEditUserModalOpen = ref(false);
    const editedUser = ref({});
    const isAddUserModalOpen = ref(false);
    const newUser = ref({});

    onMounted(async () => {
      const usersRef = dbRef(db, 'users');
      onValue(usersRef, (snapshot) => {
        users.value = snapshot.val();
      });
    });

    const toggleAdmin = async (uid) => {
      const userRef = dbRef(db, `users/${uid}`);
      const snapshot = await get(userRef);
      const user = snapshot.val();
      await update(userRef, { admin: !user.admin });
    };

    const openEditUserModal = (user, uid) => {
      editedUser.value = { ...user, uid };
      isEditUserModalOpen.value = true;
      console.log(editedUser.value);
    };

    const closeEditUserModal = () => {
      isEditUserModalOpen.value = false;
    };

    const editUser = async (editedUser, uid) => {
      const userRef = dbRef(db, `users/${uid}`);
      await update(userRef, { admin: editedUser.admin, username: editedUser.username });

      closeEditUserModal();
    };


    const deleteUser = async (uid) => {
      const auth = getAuth();
      const user = auth.currentUser;

      if (user && user.uid === uid) {
        // Supprime l'utilisateur de Firebase Authentication
        await firebaseDeleteUser(user).catch((error) => {
          console.error(`Failed to delete user: ${uid}`, error);
        });

        // Supprime l'utilisateur de la base de données en temps réel de Firebase
        const db = getDatabase();
        const userRef = dbRef(db, `users/${uid}`);
        await remove(userRef).catch((error) => {
          console.error(`Failed to delete user from database: ${uid}`, error);
        });
      } else {
        console.error('User does not exist or is not currently signed in:', uid);
      }
    };

    const openAddUserModal = () => {
      newUser.value = { username: '', password: '', admin: false };
      isAddUserModalOpen.value = true;
    };

    const closeAddUserModal = () => {
      isAddUserModalOpen.value = false;
    };

    const addUser = async () => {
      const auth = getAuth();
      const { username, password, email, admin } = newUser.value;

      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        await updateProfile(user, { displayName: username });

        const db = getDatabase();
        const userRef = dbRef(db, `users/${user.uid}`);
        await update(userRef, { admin: admin, email: email, username: username }); // Ajoutez le nom d'utilisateur ici

        closeAddUserModal();

        // Ajoutez cette ligne pour afficher une notification de succès
        store.dispatch('showNotification', { message: 'Utilisateur ajouté avec succès', type: 'success' });
      } catch (error) {
        console.error(`Failed to create user: ${username}`, error.code, error.message);

        // Ajoutez cette ligne pour afficher une notification d'erreur
        store.dispatch('showNotification', { message: `Échec de l'ajout de l'utilisateur : ${error.message}`, type: 'error' });
      }
    };

    return {
      users,
      toggleAdmin,
      isEditUserModalOpen,
      editedUser,
      openEditUserModal,
      closeEditUserModal,
      editUser,
      deleteUser,
      isAddUserModalOpen,
      newUser,
      openAddUserModal,
      closeAddUserModal,
      addUser
    };
  }
};
</script>


<style scoped>
.table-responsive {
  overflow-x: auto;
}

.table-responsive table th, .table-responsive table td {
  max-width: 200px; /* Ajustez cette valeur en fonction de vos besoins */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #333; /* Couleur du texte */
  font-size: 16px; /* Taille du texte */
}

.modal-content {
  background-color: #f8f9fa; /* Couleur de fond du modal */
  color: #333; /* Couleur du texte du modal */
}

.btn-primary {
  background-color: #007bff; /* Couleur de fond du bouton */
  color: #fff; /* Couleur du texte du bouton */
}

.form-label {
  font-size: 20px; /* Augmente la taille de la police */
  color: #333; /* Change la couleur du texte */
  margin-bottom: 10px; /* Ajoute une marge en bas */
  font-weight: bold; /* Rend le texte en gras */
}

.go-back-button {
  position: fixed;
  top: 70px; /* Augmentez cette valeur pour déplacer le bouton vers le bas */
  right: 10px;
  z-index: 1000;
}

</style>

