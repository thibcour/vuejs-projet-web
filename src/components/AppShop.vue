<template>
  <div>
    <div class="form-container" v-if="isAdmin">
      <form @submit.prevent="addProduct" class="product-form">
        <input type="text" v-model="name" placeholder="Nom du produit" class="form-input">
        <input type="text" v-model="image" placeholder="URL de l'image" class="form-input">
        <input type="text" v-model="price" placeholder="Prix du produit" class="form-input">
          <select v-model="category" class="form-input">
            <option disabled value="">Veuillez sélectionner une catégorie</option>
            <option>Jeans</option>
            <option>T-shirt</option>
            <option>Chaussette</option>
            <option>Chaussure</option>
            <!-- Ajoutez d'autres options de catégorie ici -->
          </select>
        <button type="submit" class="form-button">Ajouter le produit</button>
      </form>
    </div>

    <!-- Carrousel de produits -->
    <div ref="productsSection" class="products-container">
      <div v-for="product in products" :key="product.name" class="product-item">
        <img :src="product.image" :alt="product.name" class="product-image" @load="scrollToProduct">
        <div>{{ product.name }}</div>
        <div>{{ product.price }}</div>
      </div>
    </div>

    <!-- Boutons de catégorie -->
    <div class="button-container">
      <div v-if="isLoggedIn">
        <button class="category-button" @click="showMyCollection = !showMyCollection; showCategories = false">
          Ma Collection
        </button>
        <button class="category-button" @click="showCategories = !showCategories; showMyCollection = false; scrollToCategories()">
          Collection du Site
        </button>
        <div v-if="showCategories" ref="categoryButtons">
          <button v-for="category in filteredCategories" :key="category" class="category-button" @click="fetchProducts(category)">
            {{ category }}
          </button>
        </div>
        <div v-if="showMyCollection">
          <!-- Ici, vous pouvez afficher votre collection -->
        </div>
      </div>
      <div v-else>
        <button v-for="category in filteredCategories" :key="category" class="category-button" @click="fetchProducts(category)">
          {{ category }}
        </button>
      </div>
    </div>

  </div>
</template>

<script>
import { ref, nextTick, watch,computed } from 'vue';
import { useStore } from 'vuex';
import { getDatabase, ref as dbRef, set, onValue } from "firebase/database";

export default {
  setup() {
    const name = ref('');
    const image = ref('');
    const price = ref('');
    const category = ref(''); // Ajout d'une référence pour la catégorie
    const categories = ref(['Jeans', 'T-shirt', 'Chaussette', 'Chaussure']);
    const products = ref([]);
    const message = ref('');
    const store = useStore();
    const isAdmin = computed(() => store.state.admin);
    const isLoggedIn = computed(() => store.state.isLoggedIn);
    const showCategories = ref(false);
    const showMyCollection = ref(false);
    const categoryButtons = ref(null);

    const scrollToCategories = () => {
      nextTick(() => {
        if (categoryButtons.value) {
          categoryButtons.value.scrollIntoView({ behavior: 'smooth' });
        }
      });
    };


    const addProduct = async () => {
      // Vérifier si les champs sont vides
      if (!name.value || !image.value) {
        store.dispatch('showNotification', { message: 'Veuillez remplir tous les champs.', type: 'error' });
        return; // Arrêter l'exécution de la méthode
      }
      // Vérifier si l'URL est valide
      const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
      if (!urlRegex.test(image.value)) {
        store.dispatch('showNotification', { message: 'Veuillez entrer une URL valide.', type: 'error' });
        return; // Arrêter l'exécution de la méthode
      }

      // Vérifier si le prix est un entier
      if (!Number.isInteger(Number(price.value))) {
        store.dispatch('showNotification', { message: 'Le prix doit être un nombre entier.', type: 'error' });
        return; // Arrêter l'exécution de la méthode
      }

      // Vérifier si une catégorie est sélectionnée
      if (!category.value) {
        store.dispatch('showNotification', { message: 'Veuillez sélectionner une catégorie.', type: 'error' });
        return; // Arrêter l'exécution de la méthode
      }

      // Obtenir une référence à la base de données Firebase
      const db = getDatabase();

      // Créer un nouvel objet dans Firebase avec les détails du produit
      const productRef = dbRef(db, `products/${category.value}/${name.value}`); // Utilisation de la catégorie comme clé parente
      set(productRef, {
        name: name.value,
        image: image.value,
        price: price.value
      });
      // Réinitialiser les valeurs du formulaire
      name.value = '';
      image.value = '';
      price.value = '';
      category.value = '';

      // Afficher le message
      store.dispatch('showNotification', { message: 'Le produit a été ajouté avec succès !', type: 'success' });
    };

    const fetchProducts = async (category) => {
      const db = getDatabase();
      const productRef = dbRef(db, `products/${category}`);
      onValue(productRef, (snapshot) => {
        products.value = snapshot.val();
      });
    };

    const scrollToProduct = () => {
      nextTick(() => {
        const firstProductImage = document.querySelector('.product-image');
        if (firstProductImage) {
          firstProductImage.scrollIntoView({ behavior: 'smooth' });
        }
      });
    };



    watch(products, () => {
      // Scroll to the products section after products are updated
      nextTick(() => {
        const firstProductImage = document.querySelector('.product-image');
        if (firstProductImage) {
          firstProductImage.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    const filteredCategories = computed(() => {
      return categories.value;
    });

    const fetchMyCollection = async () => {
      const db = getDatabase();
      const productRef = dbRef(db, `myCollection`);
      onValue(productRef, (snapshot) => {
        products.value = snapshot.val();
      });
    };

    const fetchSiteCollection = async () => {
      const db = getDatabase();
      const productRef = dbRef(db, `siteCollection`);
      onValue(productRef, (snapshot) => {
        products.value = snapshot.val();
      });
    };


    return {isAdmin,name, image, price, category, categories, products, addProduct, fetchProducts, fetchMyCollection, fetchSiteCollection, scrollToProduct, message, filteredCategories, isLoggedIn, showCategories, showMyCollection, categoryButtons, scrollToCategories};  }
};
</script>

<style scoped>
.products-container {
  display: flex;
  flex-direction: row; /* Change this to row */
  flex-wrap: wrap;
  justify-content: center;
}
.button-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
}

.category-button {
  padding: 10px 20px;
  background-color: #4CAF50; /* Vous pouvez changer la couleur de fond */
  border: none;
  border-radius: 5px;
  color: white; /* Vous pouvez changer la couleur du texte */
  font-size: 16px; /* Vous pouvez changer la taille du texte */
  cursor: pointer;
  margin: 5px;
  transition: background-color 0.3s ease;
}

.category-button:hover {
  background-color: #45a049; /* Vous pouvez changer la couleur de fond au survol */
}

.product-image {
  max-width: 100%;
  max-height: 200px; /* Ajustez cette valeur selon vos besoins */
  object-fit: cover;
}

.form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.product-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  border-radius: 5px;
  background-color: #f8f9fa;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-size: 16px;
}

.form-button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.form-button:hover {
  background-color: #0056b3;
}

.products-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.product-item {
  margin: 10px;
}

.product-image {
  max-width: 100%;
  max-height: 200px;
  object-fit: cover;
}

.message {
  margin-top: 20px;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border-radius: 5px;
  transition: opacity 1s ease-out;
}

.message[hidden] {
  opacity: 0;
}
</style>