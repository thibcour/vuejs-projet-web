<template>
  <div class="mt-5">
    <div class="col-6">
      <div class="mb-3">
        <label class="form-label">Gestion des Produits</label>
        <div>
          <button class="btn btn-outline-primary me-2" @click="selectedCategory = ''">Tous les produits</button>
          <button v-for="category in categories" :key="category" class="btn btn-outline-secondary me-2" @click="selectedCategory = category">{{ category }}</button>
        </div>
      </div>
      <div class="mb-3">
        <button class="btn btn-primary me-2" @click="openAddProductModal">Ajouter un produit</button>
        <button class="btn btn-danger me-2" @click="openDeleteCategoryModal">Supprimer une catégorie</button>
      </div>
    </div>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
        <tr>
          <th>Image</th>
          <th>Nom du produit</th>
          <th>Prix</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="product in filteredProducts" :key="product.name">
          <td><img :src="product.image" alt="Product image" class="product-image"></td>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>
            <button class="btn btn-primary me-2" @click="openEditModal(product)">Modifier</button>
            <button class="btn btn-danger me-2" @click="deleteProduct(product, product.category)">Supprimer</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

    <!-- Ajoutez ce modal pour l'édition de produit -->
    <div class="modal" tabindex="-1" v-if="isEditModalOpen" :class="{ 'show d-block': isEditModalOpen }">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modifier le produit</h5>
            <button type="button" class="btn-close" @click="closeEditModal"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label">Nom du produit</label>
              <input type="text" v-model="editedProduct.name" class="form-control">
            </div>
            <div class="mb-3">
              <label class="form-label">Prix du produit</label>
              <input type="number" v-model="editedProduct.price" class="form-control">
            </div>
            <div class="mb-3">
              <label class="form-label">Lien de la photo du produit</label>
              <input type="text" v-model="editedProduct.image" class="form-control">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closeEditModal">Fermer</button>
            <button type="button" class="btn btn-primary" @click="editProduct">Enregistrer les modifications</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Ajoutez ce modal pour l'ajout de produit -->
    <div class="modal" tabindex="-1" v-if="isAddProductModalOpen" :class="{ 'show d-block': isAddProductModalOpen }">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Ajouter un produit</h5>
            <button type="button" class="btn-close" @click="closeAddProductModal"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label">Nom du produit</label>
              <input type="text" v-model="newProduct.name" class="form-control">
            </div>
            <div class="mb-3">
              <label class="form-label">Prix du produit</label>
              <input type="number" v-model="newProduct.price" class="form-control">
            </div>
            <div class="mb-3">
              <label class="form-label">Lien de la photo du produit</label>
              <input type="text" v-model="newProduct.image" class="form-control">
            </div>
            <div class="mb-3">
              <label class="form-label">Catégorie du produit</label>
              <select v-model="newProduct.category" class="form-control" @change="handleCategoryChange">
                <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
                <option value="new">Ajouter une nouvelle catégorie</option>
              </select>
            </div>
            <div class="mb-3" v-if="isNewCategory">
              <label class="form-label">Nom de la nouvelle catégorie</label>
              <input type="text" v-model="newCategory" class="form-control">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closeAddProductModal">Fermer</button>
            <button type="button" class="btn btn-primary" @click="addProduct">Ajouter le produit</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Ajoutez ce modal pour la suppression de catégorie -->
    <div class="modal" tabindex="-1" v-if="isDeleteCategoryModalOpen" :class="{ 'show d-block': isDeleteCategoryModalOpen }">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Supprimer une catégorie</h5>
            <button type="button" class="btn-close" @click="closeDeleteCategoryModal"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label">Catégorie à supprimer</label>
              <select v-model="categoryToDelete" class="form-control">
                <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
              </select>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closeDeleteCategoryModal">Fermer</button>
            <button type="button" class="btn btn-danger" @click="deleteCategory">Supprimer la catégorie</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ref, onMounted, computed} from 'vue';
import {useStore} from 'vuex';
import {useRouter} from 'vue-router';
import {getDatabase, ref as dbRef, onValue, update, get, remove, set} from "firebase/database";

export default {
  setup() {
    const products = ref({});
    const selectedCategory = ref('');
    const db = getDatabase();
    const router = useRouter();
    const vuexStore = useStore();
    const searchTerm = ref('');
    const store = useStore();
    const isEditModalOpen = ref(false);
    const editedProduct = ref({});
    const isAddProductModalOpen = ref(false);
    const newProduct = ref({});
    const isAddCategoryModalOpen = ref(false);
    const newCategory = ref('');
    const isNewCategory = ref(false);
    const isDeleteCategoryModalOpen = ref(false);
    const categoryToDelete = ref('');

    const openDeleteCategoryModal = () => {
      categoryToDelete.value = '';
      isDeleteCategoryModalOpen.value = true;
    };

    const closeDeleteCategoryModal = () => {
      isDeleteCategoryModalOpen.value = false;
    };

    const deleteCategory = async () => {
      const categoryRef = dbRef(db, `products/${categoryToDelete.value}`);
      const categorySnapshot = await get(categoryRef);
      const categoryProducts = categorySnapshot.val();

      // Supprimez tous les produits de la catégorie
      for (const product in categoryProducts) {
        const productRef = dbRef(db, `products/${categoryToDelete.value}/${product}`);
        await remove(productRef).catch((error) => {
          console.error(`Échec de la suppression du produit : ${product} dans la catégorie : ${categoryToDelete.value}`, error);
        });
      }

      // Supprimez la catégorie
      await remove(categoryRef).catch((error) => {
        console.error(`Échec de la suppression de la catégorie : ${categoryToDelete.value}`, error);
      });
      closeDeleteCategoryModal();
    };

    const handleCategoryChange = () => {
      if (newProduct.value.category === 'new') {
        isNewCategory.value = true;
        newProduct.value.category = '';
      } else {
        isNewCategory.value = false;
      }
    };

    const openAddProductModal = () => {
      newProduct.value = {};
      isAddProductModalOpen.value = true;
    };

    const closeAddProductModal = () => {
      isAddProductModalOpen.value = false;
    };

    const addProduct = async () => {
      // Si une nouvelle catégorie a été créée, utilisez son nom comme catégorie du produit
      if (isNewCategory.value) {
        newProduct.value.category = newCategory.value;
      }

      const productRef = dbRef(db, `products/${newProduct.value.category}/${newProduct.value.name}`);
      await set(productRef, {
        name: newProduct.value.name,
        price: newProduct.value.price,
        image: newProduct.value.image
      }).catch((error) => {
        console.error(`Échec de l'ajout du produit : ${newProduct.value.name} dans la catégorie : ${newProduct.value.category}`, error);
      });
      closeAddProductModal();
    };

    const openAddCategoryModal = () => {
      newCategory.value = '';
      isAddCategoryModalOpen.value = true;
    };

    const closeAddCategoryModal = () => {
      isAddCategoryModalOpen.value = false;
    };

    const addCategory = async () => {
      const categoryRef = dbRef(db, `products/${newCategory.value}`);
      const newCategoryData = {
        name: newCategory.value,
        products: {}
      };
      await set(categoryRef, newCategoryData).catch((error) => {
        console.error(`Échec de l'ajout de la catégorie : ${newCategory.value}`, error);
      });
      closeAddCategoryModal();
    };

    onMounted(async () => {
      if (!vuexStore.state.admin) {
        router.push('/');
      } else {
        const productRef = dbRef(db, 'products');
        onValue(productRef, (snapshot) => {
          products.value = snapshot.val();
        });
      }
    });

    const openEditModal = (product) => {
      editedProduct.value = {...product};
      isEditModalOpen.value = true;
    };

    const closeEditModal = () => {
      isEditModalOpen.value = false;
    };

    const editProduct = async () => {
      const productRef = dbRef(db, `products/${editedProduct.value.category}/${editedProduct.value.name}`);
      await update(productRef, {
        name: editedProduct.value.name,
        price: editedProduct.value.price,
        image: editedProduct.value.image // Ajoutez cette ligne
      }).catch((error) => {
        console.error(`Échec de la modification du produit : ${editedProduct.value.name} dans la catégorie : ${editedProduct.value.category}`, error);
      });
      closeEditModal();
    };

    const deleteProduct = async (product, category) => {
      if (category && product.name) {
        const categoryRef = dbRef(db, `products/${category}`);
        const categorySnapshot = await get(categoryRef);
        const categoryProducts = categorySnapshot.val();

        if (Object.keys(categoryProducts).length === 1) {
          // Si le produit à supprimer est le dernier dans sa catégorie
          store.dispatch('showNotification', {
            message: `Échec de la suppression du produit : ${product.name} est le dernier produit de la catégorie : ${category}. Vous ne pouvez pas supprimer le dernier produit d'une catégorie.`,
            type: 'error'
          });
          return;
        }

        const productRef = dbRef(db, `products/${category}/${product.name}`);
        await remove(productRef).catch((error) => {
          console.error(`Échec de la suppression du produit : ${product.name} dans la catégorie : ${category}`, error);
        });
      } else {
        console.error(`Échec de la suppression du produit : La catégorie ou le nom du produit n'est pas défini. Catégorie : ${category}, Nom du produit : ${product.name}`);
      }
    };

    const categories = computed(() => {
      return Object.keys(products.value);
    });

    const filteredProducts = computed(() => {
      let localProducts = [];
      if (products.value) {
        for (const category in products.value) {
          const categoryProducts = Object.values(products.value[category]);
          for (const product of categoryProducts) {
            product.category = category; // Ajoutez la catégorie à chaque produit
            localProducts.push(product);
          }
        }
        if (selectedCategory.value) {
          localProducts = localProducts.filter(product => product.category === selectedCategory.value);
        }
        if (searchTerm.value) {
          localProducts = localProducts.filter(product => product.name.includes(searchTerm.value));
        }
      }
      return localProducts;
    });

    return {
      products,
      editProduct,
      deleteProduct,
      categories,
      selectedCategory,
      filteredProducts,
      searchTerm,
      isEditModalOpen,
      editedProduct,
      openEditModal,
      closeEditModal,
      isAddProductModalOpen,
      newProduct,
      openAddProductModal,
      closeAddProductModal,
      addProduct,
      isAddCategoryModalOpen,
      newCategory,
      openAddCategoryModal,
      closeAddCategoryModal,
      addCategory,
      isNewCategory,
      handleCategoryChange,
      isDeleteCategoryModalOpen,
      categoryToDelete,
      openDeleteCategoryModal,
      closeDeleteCategoryModal,
      deleteCategory
    };
  }
};
</script>

<style scoped>
.product-image {
  width: 100px;
  height: 100px;
}

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