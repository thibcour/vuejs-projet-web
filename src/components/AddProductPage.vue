<template>
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Ajouter un produit</h5>
          <button type="button" class="btn-close" @click="closeAndRedirect"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <!-- Première colonne pour les informations du produit -->
            <div class="col-md-6 border-right">
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
                  <option value="" disabled selected>Choisir une catégorie</option>
                  <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
                  <option value="new">Ajouter une nouvelle catégorie</option>
                </select>
                <br/>
                <input v-if="newProduct.category === 'new'" type="text" v-model="newCategory" class="form-control" placeholder="Entrez le nom de la nouvelle catégorie">
              </div>
              <div class="mb-3">
                <label for="temperature" class="form-label">Température</label>
                <MultiRangeSlider
                    :baseClassName="'multi-range-slider'"
                    :min="-10"
                    :max="40"
                    :step="1"
                    :ruler="true"
                    :label="true"
                    :minValue="barMinValue"
                    :maxValue="barMaxValue"
                    @input="UpdateValues"
                />
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Température</h5>
                    <p class="card-text">
                      <i class="fas fa-temperature-low"></i> Minimum : {{ barMinValue }}°C
                    </p>
                    <p class="card-text">
                      <i class="fas fa-temperature-high"></i> Maximum : {{ barMaxValue }}°C
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <!-- Deuxième colonne pour la partie du corps -->
            <div class="col-md-6">
              <label class="form-label">Partie du corps</label>
              <div class="mb-3">
                <div class="row body-part-container"> <!-- Ajoutez la classe body-part-container ici -->
                  <div class="col">
                    <img src="@/assets/head.png" alt="Tête" @click="selectBodyPart('Tête')" class="body-part-image">
                  </div>
                  <div class="col">
                    <img src="@/assets/top.png" alt="Haut" @click="selectBodyPart('Haut')" class="body-part-image">
                  </div>
                  <div class="col">
                    <img src="@/assets/bottom.png" alt="Bas" @click="selectBodyPart('Bas')" class="body-part-image">
                  </div>
                  <div class="col">
                    <img src="@/assets/shoes.png" alt="Chaussures" @click="selectBodyPart('Chaussures')" class="body-part-image">
                  </div>
                </div>
                <!-- Ajoutez cet élément pour afficher la partie du corps sélectionnée -->
                <div v-if="selectBodyPart" class="selected-body-part">
                  Partie du corps sélectionnée : {{ selectedBodyPart }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="closeAndRedirect">Fermer</button>
          <button type="button" class="btn btn-primary" @click="addProduct">Ajouter le produit</button>
        </div>
      </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { getAuth } from "firebase/auth";
import { getDatabase, ref as dbRef, onValue, set } from "firebase/database";
import { getStorage, ref as storageRef, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import MultiRangeSlider from "multi-range-slider-vue";
export default {
  components: {
    MultiRangeSlider,
  },
  data() {
    return {
      categories: [],
      router: useRouter(),
      barMinValue: 0,
      barMaxValue: 20,
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
  },
  methods: {
    closeAndRedirect() {
      this.showAddProductModal = false;
      this.router.push({ name: 'Home' });
    },
    UpdateValues(e) {
      this.barMinValue = e.minValue;
      this.barMaxValue = e.maxValue;
    },
    selectBodyPart(part) {
      console.log(`Selected body part: ${part}`);
      this.selectedBodyPart = part;
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
    handleFileUpload(event) {
      const file = event.target.files[0];
      this.uploadedFile = file; // Stockez le fichier téléchargé
      this.newProduct.image = URL.createObjectURL(file);
    },
    addProduct: async function() {
      if (!this.newProduct.name || !this.newProduct.price || !this.newProduct.image || !this.newProduct.category || !this.selectedBodyPart) {
        this.$store.dispatch('showNotification', { message: 'Veuillez remplir tous les champs, y compris la sélection d\'une partie du corps.', type: 'error' });
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
        price: this.newProduct.price,
        bodyPart: this.selectedBodyPart,
        minTemperature: this.barMinValue, // Ajoutez cette ligne
        maxTemperature: this.barMaxValue  // Ajoutez cette ligne
      }).then(() => {
        this.newProduct.name = '';
        this.newProduct.price = '';
        this.newProduct.category = '';
        this.newProduct.image = '';
        this.newCategory = '';
        this.uploadedFile = null;
        this.showAddProductModal = false;
        this.$store.dispatch('showNotification', { message: 'Produit ajouté avec succès !', type: 'success' });
        if (this.newProduct.category === 'new') {
          this.categories = [...this.categories, this.newCategory];
        }
        this.closeAndRedirect();
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
};
</script>

<style scoped>

body {
  font-family: 'Roboto', sans-serif; /* Utilisez la police Roboto */
  color: #333; /* Couleur du texte */
}

h5 {
  letter-spacing: 1px; /* Espacement des lettres pour les titres */
  font-size: 24px; /* Taille de la police pour les titres */
}

.form-label {
  letter-spacing: 0.5px; /* Espacement des lettres pour les labels */
  font-size: 18px; /* Taille de la police pour les labels */
}

.form-control {
  letter-spacing: 0.5px; /* Espacement des lettres pour les champs de formulaire */
  font-size: 16px; /* Taille de la police pour les champs de formulaire */
}


 .selected-body-part {
   color: #007BFF; /* Changez la couleur du texte */
   font-size: 20px; /* Augmentez la taille de la police */
   text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Ajoutez une ombre au texte */
   margin-top: 10px; /* Ajoutez un peu d'espace au-dessus du texte */
 }

 .body-part-container {
   max-width: 600px; /* Définissez une largeur maximale pour le conteneur */

   margin: 0 auto; /* Centrez le conteneur */
 }


</style>