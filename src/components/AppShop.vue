<template>
  <div>
    <h2 class="text-center mt-4 mb-4 bg-primary text-white p-3 rounded">{{ currentTitle }}</h2>
    <template v-if="currentCollection === 'myCollection'">
      <div ref="productsSection" class="products-container">
        <div v-for="product in userProducts" :key="product.name" class="product-item card">
          <img :src="product.image" :alt="product.name" class="product-image card-img-top" @load="scrollToProduct">
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">{{ product.price }}€</p>
            <button v-if="isLoggedIn" class="remove-from-collection-button btn btn-primary" @click="removeProductFromMyCollection(product)">Supprimer de ma collection</button>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div ref="productsSection" class="products-container">
        <div v-for="product in products" :key="product.name" class="product-item card">
          <img :src="product.image" :alt="product.name" class="product-image card-img-top" @load="scrollToProduct">
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">{{ product.price }}€</p>
            <button v-if="isLoggedIn" class="add-to-collection-button btn btn-primary" @click="addProductToMyCollection(product)">Ajouter à ma collection</button>
          </div>
        </div>
      </div>
    </template>
    <div v-if="personalizedStyle && personalizedStyle.length > 0" class="products-container">
      <div v-for="product in personalizedStyle" :key="product && product.name" class="product-item card">
        <img v-if="product" :src="product.image" :alt="product.name" class="product-image card-img-top">
        <div class="card-body">
          <h5 class="card-title">{{ product && product.name }}</h5>
        </div>
      </div>
    </div>
    <div class="button-container" v-if="isLoggedIn">
      <div class="category-buttons">
        <button class="category-button" @click="handleButtonClick">Ma Collection</button>
        <button class="category-button" @click="handleSiteCollectionClick">Collection du Site</button>
        <button class="category-button" @click="fetchPersonalizedStyle">Votre Style Perso</button>
        <button class="category-button" @click="fetchPersonalizedBangerStyle">The Banger Style </button>
      </div>
      <div v-if="showCategories" ref="categoryButtons">
        <button v-for="category in filteredCategories" :key="category" class="category-button" @click="fetchProducts(category); selectedCategory = category">{{ category }}</button>
      </div>
      <div class="button-container" v-if="currentCollection === 'myCollection'">
        <button v-if="currentCollection === 'myCollection'" class="category-button" @click="goToAddProductPage">Ajouter un produit</button>
      </div>
    </div>
  </div>
</template>



<script>
import { getAuth } from "firebase/auth";
import { ref, nextTick, watch, computed } from 'vue';
import { useStore } from 'vuex';
import { getDatabase, ref as dbRef, onValue, remove,set} from "firebase/database";

export default {
  data() {
    return {
      currentTitle: 'Faites votre choix',
      isButtonClicked: false,
      personalizedStyle: [],
      userProducts: [],
      barMinValue: 0,
      barMaxValue: 20,
      currentCollection: 'siteCollection', // Ajoutez cette ligne
      selectedBodyPart: null,
      newCategory: '',
      userId: null,
      imageOption: 'link',
      showAddProductModal: false,
      newProduct: {
        name: '',
        price: '',
        image: '',
        category: '',
      },
      uploadedFile: null, // Ajoutez cette ligne
    };
  },
  created() {
    const auth = getAuth();
    this.userId = auth.currentUser ? auth.currentUser.uid : null;
    this.fetchCategories(); // Appelez fetchCategories lors de la création du composant
    if (this.userId) {
      this.currentCollection = 'myCollection';
    }
  },
  computed: {
    weatherData() {
      return this.$store.state.weatherData;

    },
  },
  methods: {
    addProductToMyCollection(product) {
      const db = getDatabase();
      const productRef = dbRef(db, `users/${this.userId}/products/${product.category}/${product.name}`);
      set(productRef, product).then(() => {
        this.$store.dispatch('showNotification', { message: 'Produit ajouté à votre collection avec succès !', type: 'success' });
        this.userProducts.push(product);
        this.userProducts = [...this.userProducts];
        this.handleButtonClick(); // Simuler le clic sur le bouton
      }).catch(error => {
        console.error('Error adding product:', error);
      });
    },
    hidePreviousContent() {
      this.userProducts = [];
      this.personalizedStyle = [];
      this.products = [];
    },
    fetchPersonalizedStyle() {
      this.currentTitle = 'Votre Style Perso';
      // Clear the userProducts array
      this.userProducts = [];

      this.hidePreviousContent();
      this.showCategories = false;
      console.log('fetchPersonalizedStyle called');
      if (this.weatherData && this.weatherData.current) {
        const currentTemperature = this.weatherData.current.temp;
        const db = getDatabase();
        const productRef = dbRef(db, `users/${this.userId}/products`);
        const siteProductRef = dbRef(db, 'siteCollection'); // Reference to site products
        const siteProducts = [];

        // Fetch site products
        onValue(siteProductRef, (snapshot) => {
          const data = snapshot.val();
          if (data) {
            Object.keys(data).forEach(category => {
              siteProducts.push(...Object.values(data[category]));
            });
          }
        });

        // Fetch user products
        onValue(productRef, (snapshot) => {
          const data = snapshot.val();
          if (data) {
            const userProducts = Object.keys(data).flatMap(category => {
              return Object.values(data[category]);
            });

            const allProducts = [...siteProducts, ...userProducts]; // Merge products

            const bodyParts = ['Tête', 'Haut', 'Bas', 'Chaussures'];
            const personalizedStyle = bodyParts.map(bodyPart => {
              const matchingProducts = allProducts.filter(product =>
                  product.bodyPart === bodyPart &&
                  product.minTemperature <= currentTemperature &&
                  product.maxTemperature >= currentTemperature
              );
              if (matchingProducts.length > 0) {
                const randomIndex = Math.floor(Math.random() * matchingProducts.length);
                return matchingProducts[randomIndex];
              }
              return null;
            });

            this.personalizedStyle = personalizedStyle;

            // Add this check here
            if (document.readyState === 'complete') {
              this.$nextTick(() => {
                setTimeout(() => {
                  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                }, 150); // Add a delay of 500ms
              });
            } else {
              window.addEventListener('load', () => {
                this.$nextTick(() => {
                  setTimeout(() => {
                    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                  }, 150); // Add a delay of 500ms
                });
              });
            }
          }
        });
      } else {
        console.error('weatherData or weatherData.current is undefined');
      }
    },
    fetchPersonalizedBangerStyle() {
      this.currentTitle = 'The Banger Style';
      this.hidePreviousContent();
      this.showCategories = false;
      console.log('fetchPersonalizedBangerStyle called');
      if (this.weatherData && this.weatherData.current) {
        const currentTemperature = this.weatherData.current.temp;
        const db = getDatabase();
        const productRef = dbRef(db, `products`);
        const siteProductRef = dbRef(db, 'siteCollection'); // Référence aux produits du site
        const siteProducts = [];

        // Récupération des produits du site
        onValue(siteProductRef, (snapshot) => {
          const data = snapshot.val();
          if (data) {
            Object.keys(data).forEach(category => {
              siteProducts.push(...Object.values(data[category]));
            });
          }
        });

        // Récupération des produits de l'utilisateur
        onValue(productRef, (snapshot) => {
          const data = snapshot.val();
          if (data) {
            const userProducts = Object.keys(data).flatMap(category => {
              return Object.values(data[category]);
            });

            const allProducts = [...siteProducts, ...userProducts]; // Fusion des produits

            const bodyParts = ['Tête', 'Haut', 'Bas', 'Chaussures'];
            const personalizedStyle = bodyParts.map(bodyPart => {
              const matchingProducts = allProducts.filter(product =>
                  product.bodyPart === bodyPart &&
                  product.minTemperature <= currentTemperature &&
                  product.maxTemperature >= currentTemperature
              );
              if (matchingProducts.length > 0) {
                const randomIndex = Math.floor(Math.random() * matchingProducts.length);
                return matchingProducts[randomIndex];
              }
              return null;
            });

            this.personalizedStyle = personalizedStyle;

            // Ajoutez cette vérification ici
            if (document.readyState === 'complete') {
              this.$nextTick(() => {
                setTimeout(() => {
                  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                }, 150); // Add a delay of 500ms
              });
            } else {
              window.addEventListener('load', () => {
                this.$nextTick(() => {
                  setTimeout(() => {
                    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                  }, 150); // Add a delay of 500ms
                });
              });
            }
          }
        });
      } else {
        console.error('weatherData or weatherData.current is undefined');
      }
    },
    fetchMyCollection: function() {
      return new Promise((resolve) => {
        const db = getDatabase();
        const productRef = dbRef(db, `users/${this.userId}/products`);
        console.log(`Fetching products from: users/${this.userId}/products`); // Log the database path
        onValue(productRef, (snapshot) => {
          const data = snapshot.val();
          console.log('Fetched data:', data); // Log the fetched data
          if (data) {
            // Transformez l'objet de produits en tableau de produits
            this.userProducts = Object.keys(data).map(category => {
              return Object.keys(data[category]).map(name => {
                return {
                  category: category,
                  name: name,
                  ...data[category][name]
                };
              });
            }).flat();
          }
          resolve();
        });
      });
    },

    fetchCategories: async function() {
      const db = getDatabase();
      const categoriesRef = dbRef(db, `products`); // Récupérez les catégories de 'products'
      onValue(categoriesRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          this.categories = Object.keys(data);
        }
      });
    },
    handleSiteCollectionClick() {
      this.currentTitle = 'Collection du Site';
      console.log('handleSiteCollectionClick called');
      this.currentCollection = 'siteCollection';
      console.log('currentCollection:', this.currentCollection);
      this.resetView();
      this.personalizedStyle = []; // Reset the personalized collection here
    },
    resetView() {
      this.showCategories = !this.showCategories;
      this.showMyCollection = false;
      this.scrollToCategories();
      this.selectedCategory = null;
      this.products = []; // Réinitialisez les produits ici
    },
    removeProductFromMyCollection(product) {
      const db = getDatabase();
      const productRef = dbRef(db, `users/${this.userId}/products/${product.category}/${product.name}`);
      remove(productRef).then(() => {
        this.$store.dispatch('showNotification', { message: 'Produit supprimé de votre collection avec succès !', type: 'success' });
        const index = this.userProducts.findIndex(p => p.name === product.name && p.category === product.category);
        if (index !== -1) {
          this.userProducts.splice(index, 1);
          this.userProducts = [...this.userProducts];
        } else {
          console.error('Product not found in userProducts array');
        }
        this.handleButtonClick(); // Simuler le clic sur le bouton
      }).catch(error => {
        console.error('Error removing product:', error);
      });
    },
    handleButtonClick() {
      this.currentTitle = 'Ma Collection';
      this.hidePreviousContent();
      console.log('handleButtonClick called');
      this.currentCollection = 'myCollection';
      console.log('currentCollection:', this.currentCollection);
      console.log('Fetching my collection...');
      this.fetchMyCollection().then(() => {
        this.showCategories = false;
        this.products = []; // Reset the products here
        this.personalizedStyle = []; // Reset the personalized collection here
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      });
    },
    goToAddProductPage() {
      this.$router.push('/add-product');
    },
  },
  watch: {
    isButtonClicked: {
      handler() {
        this.fetchPersonalizedStyle();
      },
      immediate: false // Change this to false
    },
    weatherData: {
      handler() {
        if (this.isButtonClicked) {
          this.fetchPersonalizedStyle();
        }
      },
      deep: true
    }
  },
  setup() {
    const name = ref('');
    const price = ref('');
    const category = ref('');
    const categories = ref(['Jeans', 'T-shirt', 'Chaussette', 'Chaussure']);
    const products = ref([]);
    const message = ref('');
    const store = useStore();
    const isAdmin = computed(() => store.state.admin);
    const isLoggedIn = computed(() => store.state.isLoggedIn);
    const showCategories = ref(false);
    const showMyCollection = ref(false);
    const categoryButtons = ref(null);
    const selectedCategory = ref(null);
    const scrollToCategories = () => {
      nextTick(() => {
        if (categoryButtons.value) {
          categoryButtons.value.scrollIntoView({ behavior: 'smooth' });
        }
      });
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

    const fetchSiteCollection = async () => {
      const db = getDatabase();
      const productRef = dbRef(db, `siteCollection`);
      onValue(productRef, (snapshot) => {
        products.value = snapshot.val();
      });
    };

    return {
      fetchSiteCollection,
      isAdmin,
      name,
      price,
      category,
      categories,
      products,
      fetchProducts,
      scrollToProduct,
      message,
      filteredCategories,
      isLoggedIn,
      showCategories,
      showMyCollection,
      categoryButtons,
      scrollToCategories,
      selectedCategory
    };
  },
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
  flex-direction: column; /* Change this to column */
  align-items: center;
  margin-top: 20px;
}

.category-button {
  justify-content: center;
  padding: 10px 20px;
  background-color: #4CAF50;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin: 5px;
  transition: background-color 0.3s ease;
}

.category-button:hover {
  background-color: #45a049;
}

.product-image {
  max-width: 100%;
  max-height: 200px; /* Ajustez cette valeur selon vos besoins */
  object-fit: cover;
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

.modal {
  margin-top: 30px;
  tabindex: -1;
}

.remove-from-collection-button {
  justify-content: center;
  padding: 10px 20px;
  background-color: red; /* Changez la couleur de fond en rouge */
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin: 5px;
  transition: background-color 0.3s ease;
}

.remove-from-collection-button:hover {
  background-color: darkred; /* rouge foncé lors du survol  */
}


.add-product-button {
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 20px;
}

.product-item {
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.products-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  background-color: #f8f9fa;
}

.product-item {
  margin: 20px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: white;
}

.product-image {
  max-width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 5px;
}

.card-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.card-title {
  font-size: 20px;
  font-weight: bold;
}

.card-text {
  font-size: 20px;
  color: #6c757d;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #0056b3;
}

.login-message {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background-color: #f8f9fa;
  color: #333;
}


.login-message h2 {
  font-size: 2.5em;
  margin-bottom: 1em;
}

.login-message p {
  font-size: 1.2em;
  margin-bottom: 2em;
}

.login-message .btn {
  margin: 0.5em;
  padding: 1em 2em;
  font-size: 1em;
  border-radius: 5px;
  text-decoration: none;
}

/* Ajoutez une bordure à droite de la première colonne */
.col-md-6:first-child {
  border-right: 1px solid #000; /* Changez la couleur et l'épaisseur de la bordure selon vos préférences */
  padding-right: 15px; /* Ajoutez un peu d'espace entre la bordure et le contenu de la colonne */
}

/* Assurez-vous que le contenu de la modal ne déborde pas */
.modal-content {
  overflow: auto; /* Ajoutez un défilement si nécessaire */
}

/* Assurez-vous que l'image du corps ne dépasse pas de la modal */
.form-label img {
  max-width: 100%; /* Limitez la largeur de l'image à la largeur de la modal */
  height: auto; /* Conservez les proportions de l'image */
}

.form-label {
  font-weight: bold;
}

.modal-dialog {
  display: inline;
  z-index: auto;
}

.body-parts-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.selected-body-part {
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
}

.multi-range-slider .track {
  background: #ddd;
  height: 10px;
  border-radius: 10px;
}

.multi-range-slider .thumb {
  width: 20px;
  height: 20px;
  background: #007bff;
  border-radius: 50%;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
}

.multi-range-slider .track .selected {
  background: #007bff;
}

.personalized-style-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  background-color: #f8f9fa;
}

.add-to-collection-button {
  background-color: grey; /* Changez la couleur de fond en gris */
}

.add-to-collection-button:hover {
  background-color: darkgrey; /* gris foncé lors du survol  */
}

.remove-from-collection-button {
  background-color: red; /* Changez la couleur de fond en rouge */
}

.remove-from-collection-button:hover {
  background-color: darkred; /* rouge foncé lors du survol  */
}
</style>