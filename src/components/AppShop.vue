<template>
  <br/>
  <div>
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
          </div>
        </div>
      </div>
    </template>
    <div class="button-container" >
      <button v-if="currentCollection === 'myCollection'" class="category-button" @click="showAddProductModal = true">
        Ajouter un produit
      </button>
    </div>


    <div class="button-container" v-if="isLoggedIn">
      <div class="category-buttons">
        <button class="category-button" @click="handleButtonClick">Ma Collection</button>
        <button class="category-button" @click="handleSiteCollectionClick">
          Collection du Site
        </button>
      </div>
      <button v-if="showMyCollection" class="category-button" @click="showAddProductModal = true">
      Ajouter un produit
      </button>
      <div v-if="showCategories" ref="categoryButtons">
        <button v-for="category in filteredCategories" :key="category" class="category-button" @click="fetchProducts(category); selectedCategory = category">
          {{ category }}
        </button>
      </div>
    </div>
    <div class="modal" tabindex="-1" v-if="showAddProductModal" :class="{ 'show d-block': showAddProductModal }">
    <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Ajouter un produit</h5>
            <button type="button" class="btn-close" @click="showAddProductModal = false"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label">Nom du produit</label>
              <input type="text" v-model="newProduct.name" class="form-control" placeholder="Entrez le nom du produit">
            </div>
            <div class="mb-3">
              <label class="form-label">Prix du produit</label>
              <input type="number" v-model="newProduct.price" class="form-control" placeholder="Entrez le prix du produit">
            </div>
            <div class="mb-3">
              <label class="form-label">Lien de la photo du produit ou télécharger un fichier</label>
              <div>
                <input type="radio" id="link" value="link" v-model="imageOption">
                <label for="link">Lien</label>
                <input type="radio" id="file" value="file" v-model="imageOption">
                <label for="file">Fichier</label>
              </div>
              <input v-if="imageOption === 'link'" type="text" v-model="newProduct.image" class="form-control" placeholder="Entrez le lien de l'image du produit">
              <input v-else type="file" @change="handleFileUpload" class="form-control">
            </div>
            <div class="mb-3">
              <label class="form-label">Catégorie du produit</label>
              <select v-model="newProduct.category" class="form-control">
                <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
                <option value="new">Ajouter une nouvelle catégorie</option>
              </select>
              <br/>
              <input v-if="newProduct.category === 'new'" type="text" v-model="newCategory" class="form-control" placeholder="Entrez le nom de la nouvelle catégorie">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="showAddProductModal = false">Fermer</button>
            <button type="button" class="btn btn-primary" @click="addProduct">Ajouter le produit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth } from "firebase/auth";
import { ref,nextTick, watch, computed } from 'vue';
import { useStore } from 'vuex';
import { getDatabase, ref as dbRef, set, onValue, remove } from "firebase/database";
import { getStorage, ref as storageRef, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default {
  data() {
    return {
      currentCollection: 'siteCollection', // Ajoutez cette ligne
      newCategory: '',
      userId: null,
      imageOption: 'link',
      showAddProductModal: false,
      newProduct: {
        name: '',
        price: '',
        image: '',
        category: ''
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
  methods: {

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
      this.currentCollection = 'siteCollection';
      this.resetView();
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
        this.$store.dispatch('showNotification', { message: 'Produit supprimé de votre collection avec succès !', type: 'success' }); // Affichez la notification
        // Mettez à jour la liste des produits
        const index = this.userProducts.findIndex(p => p.name === product.name && p.category === product.category);
        if (index !== -1) {
          this.userProducts.splice(index, 1);
          this.userProducts = [...this.userProducts]; // Créez une nouvelle instance du tableau
        }
        // Rafraîchir la collection après la suppression
        this.fetchMyCollection();
      });
    },
    addProductToMyCollection(product) {
      const db = getDatabase();
      const productRef = dbRef(db, `users/${this.userId}/myCollection/${product.category}/${product.name}`);
      set(productRef, product);
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      this.uploadedFile = file; // Stockez le fichier téléchargé
      this.newProduct.image = URL.createObjectURL(file);
    },
    handleButtonClick() {
      this.currentCollection = 'myCollection';
      console.log('Fetching my collection...');
      this.fetchMyCollection().then(() => {
        this.showCategories = false;
        this.products = []; // Réinitialisez les produits ici
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      });
    },
    addProduct: async function() {
      if (!this.newProduct.name || !this.newProduct.price || !this.newProduct.image || !this.newProduct.category) {
        this.$store.dispatch('showNotification', { message: 'Veuillez remplir tous les champs.', type: 'error' });
        return;
      }
      if (this.imageOption === 'file' && !(this.uploadedFile instanceof File)) {
        console.error('uploadedFile is not a File object');
        return;
      }

      let imageUrl = this.newProduct.image;
      if (this.imageOption === 'file') {
        imageUrl = await this.uploadImage(this.uploadedFile, this.userId);
      }

      const db = getDatabase();
      const category = this.newProduct.category === 'new' ? this.newCategory : this.newProduct.category;
      const productRef = dbRef(db, `users/${this.userId}/products/${category}/${this.newProduct.name}`);
      set(productRef, {
        name: this.newProduct.name,
        image: imageUrl,
        price: this.newProduct.price
      }).then(() => {
        this.newProduct.name = '';
        this.newProduct.price = '';
        this.newProduct.category = '';
        this.newProduct.image = '';
        this.newCategory = ''; // Réinitialisez newCategory
        this.uploadedFile = null;
        this.showAddProductModal = false;
        this.$store.dispatch('showNotification', { message: 'Produit ajouté avec succès !', type: 'success' });
        if (this.newProduct.category === 'new') {
          this.categories = [...this.categories, this.newCategory]; // Réaffectez le tableau entier
        }
      });
    },
    uploadImage: async function(file, userId) {
      const storage = getStorage();
      const storageReference = storageRef(storage, `users/${userId}/products/${file.name}`);
      const uploadTask = uploadBytesResumable(storageReference, file);

      return new Promise((resolve, reject) => {
        uploadTask.on('state_changed',
            (snapshot) => {
              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log('Upload is ' + progress + '% done');
            },
            (error) => {
              reject(error);
            },
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                resolve(downloadURL);
              });
            }
        );
      });
    },
  },
  mounted() {

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

    return {fetchSiteCollection, isAdmin,name, price, category, categories, products, fetchProducts, scrollToProduct, message, filteredCategories, isLoggedIn, showCategories, showMyCollection, categoryButtons, scrollToCategories, selectedCategory};
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

.add-to-collection-button {
  justify-content: center;
  padding: 10px 20px;
  background-color: gray;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin: 5px;
  transition: background-color 0.3s ease;
}

.add-to-collection-button:hover {
  background-color: darkgray;
}

.modal {
  margin-top: 75px;
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

.login-message .btn-primary {
  background-color: #007bff;
  color: white;
}

.login-message .btn-secondary {
  background-color: #6c757d;
  color: white;
}
</style>