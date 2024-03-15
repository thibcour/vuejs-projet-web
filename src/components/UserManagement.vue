<template>
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
          <th>Admin</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(user, username) in users" :key="username">
          <td>{{ username }}</td>
          <td>
            <svg v-if="user.admin" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill svg-icon" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323A.75.75 0 0 0 4.616 8.03l2.363 2.394a.75.75 0 0 0 1.06 0l4.886-4.976a.75.75 0 0 0-.025-1.065z"/>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill svg-icon" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.293-2.707a1 1 0 0 0-1.414-1.414L8 6.586 5.707 4.293a1 1 0 0 0-1.414 1.414L6.586 8l-2.293 2.293a1 1 0 0 0 1.414 1.414L8 9.414l2.293 2.293a1 1 0 0 0 1.414-1.414L9.414 8l2.293-2.293z"/>
            </svg>
          </td>
          <td>
            <button class="btn btn-primary me-2" @click="openEditModal(user, username)">Modifier</button>
            <button class="btn btn-danger me-2" @click="deleteUser(username)">Supprimer</button>
            <button class="btn btn-secondary me-2" @click="toggleAdmin(username)">Changer le statut d'admin</button>
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
              <label class="form-label">Mot de passe</label>
              <input type="password" v-model="editedUser.password" class="form-control">
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
            <button type="button" class="btn btn-primary" @click="editUser">Enregistrer les modifications</button>
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
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { getDatabase, ref as dbRef, onValue, update, remove, get } from "firebase/database";
import {SHA256} from "crypto-js";

export default {
  setup() {
    const users = ref([]);
    const db = getDatabase();
    const router = useRouter();
    const vuexStore = useStore();
    const isEditUserModalOpen = ref(false);
    const editedUser = ref({});
    const isAddUserModalOpen = ref(false);
    const newUser = ref({});
    const oldUsername = ref('');

    onMounted(async () => {
      if (!vuexStore.state.admin) {
        await router.push('/');
      } else {
        const userRef = dbRef(db, 'users');
        onValue(userRef, (snapshot) => {
          const usersData = snapshot.val();
          if (usersData && typeof usersData === 'object') {
            users.value = usersData; // conservez les utilisateurs en tant qu'objet
          } else {
            console.error('usersData is not an object:', usersData);
          }
        });
      }
    });

    const toggleAdmin = (username) => {
      if (username && typeof username === 'string') {
        const userRef = dbRef(db, `users/${username}`);
        get(userRef).then((snapshot) => {
          if (snapshot.exists()) {
            const user = snapshot.val();
            update(userRef, { admin: !user.admin })
                .catch((error) => {
                  console.error(`Failed to toggle admin status for user: ${username}`, error);
                });
          } else {
            console.error('User does not exist:', username);
          }
        });
      } else {
        console.error('Invalid username:', username);
      }
    };

    const openEditModal = (user, username) => {
      oldUsername.value = username; // Utilisez le deuxième argument pour définir oldUsername
      editedUser.value = {...user, username}; // Ajoutez le username à l'objet user
      isEditUserModalOpen.value = true;
    };

    const closeEditUserModal = () => {
      isEditUserModalOpen.value = false;
    };

    const editUser = async () => {
      let hashedPassword = editedUser.value.password;

      // Vérifiez si le mot de passe a été modifié avant de le hacher à nouveau
      const oldUserRef = dbRef(db, `users/${oldUsername.value}`);
      const oldUserSnapshot = await get(oldUserRef);
      const oldUser = oldUserSnapshot.val();
      if (oldUser.password !== editedUser.value.password) {
        hashedPassword = SHA256(editedUser.value.password).toString();
      }

      // Utilisez le nom d'utilisateur original (oldUsername) comme clé pour mettre à jour l'utilisateur
      const newUserRef = dbRef(db, `users/${editedUser.value.username}`);

      // Supprimez l'ancien utilisateur
      await remove(oldUserRef).catch((error) => {
        console.error(`Échec de la suppression de l'utilisateur : ${oldUsername.value}`, error);
      });

      // Créez le nouvel utilisateur avec le nouveau nom d'utilisateur
      await update(newUserRef, {
        password: hashedPassword,
        admin: editedUser.value.admin
      }).catch((error) => {
        console.error(`Échec de la modification de l'utilisateur : ${editedUser.value.username}`, error);
      });

      closeEditUserModal();
    };


    const deleteUser = async (username) => {
      const usersRef = dbRef(db, 'users');
      const snapshot = await get(usersRef);
      const usersData = snapshot.val();
      const numberOfUsers = Object.keys(usersData).length;

      if (numberOfUsers <= 1) {
        console.error('Cannot delete user. At least one user must remain.');
        return;
      }

      const userRef = dbRef(db, `users/${username}`);
      await remove(userRef).catch((error) => {
        console.error(`Failed to delete user: ${username}`, error);
      });
    };

    const openAddUserModal = () => {
      newUser.value = { username: '', password: '', admin: false };
      isAddUserModalOpen.value = true;
    };

    const closeAddUserModal = () => {
      isAddUserModalOpen.value = false;
    };

    const addUser = async () => {
      const hashedPassword = SHA256(newUser.value.password).toString();
      const userRef = dbRef(db, `users/${newUser.value.username}`);
      const snapshot = await get(userRef);
      if (snapshot.exists()) {
        newUser.value.errorMessage = 'Utilisateur déjà existant';
      } else {
        const userRefTests = dbRef(db, `users/${newUser.value.username}s`); // Pour "tests"
        const snapshotTests = await get(userRefTests); // Pour "tests"
        if (snapshotTests.exists()) {
          newUser.value.errorMessage = 'Un utilisateur avec un nom similaire existe déjà';
        } else {
          await update(userRef, {
            password: hashedPassword,
            admin: newUser.value.admin
          }).catch((error) => {
            console.error(`Échec de l'ajout de l'utilisateur : ${newUser.value.username}`, error);
          });
          closeAddUserModal();
        }
      }
    };

    return {
      users,
      toggleAdmin,
      isEditUserModalOpen,
      editedUser,
      openEditModal,
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

</style>