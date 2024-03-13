<template>
  <div>
    <!-- Contenu de votre composant -->
    <button @click="fetchData('shoes')">Rechercher des chaussures</button>
    <button @click="fetchData('t-shirt')">Rechercher des t-shirts</button>

    <template v-if="responseData">
      <div v-for="(product, index) in responseData.searchProductDetails.slice(0, 3)" :key="index">
        <h2>{{ product.productDescription }}</h2>
        <img :src="product.imgUrl" alt="Image du produit">
        <p>Prix : {{ product.price }} $</p>
        <p>ASIN : {{ product.asin }}</p>
      </div>
    </template>
  </div>
</template>

<!-- Rest of your code -->

<script>
import axios from 'axios';

export default {
  data() {
    return {
      responseData: null,
      cache: {} // Ajout de la propriété cache
    };
  },
  methods: {
    fetchData(keyword) {
      // Vérifiez si les résultats pour le mot-clé sont dans le cache
      if (this.cache[keyword]) {
        this.responseData = this.cache[keyword];
        return;
      }

      const options = {
        method: 'GET',
        url: `https://axesso-axesso-amazon-data-service-v1.p.rapidapi.com/amz/amazon-search-by-keyword-asin`,
        params: {
          domainCode: 'com',
          keyword: keyword,
          page: '1',
          excludeSponsored: 'false',
          sortBy: 'relevanceblender',
          withCache: 'true'
        },
        headers: {
          'X-RapidAPI-Key': process.env.VUE_APP_RAPIDAPI_KEY,
          'X-RapidAPI-Host': 'axesso-axesso-amazon-data-service-v1.p.rapidapi.com'
        }
      };

      axios.request(options).then(response => {
        this.responseData = response.data;
        // Stockez les résultats dans le cache
        this.cache[keyword] = response.data;
        console.log(this.responseData);
      }).catch(error => {
        console.error(error);
      });
    }
  }
};
</script>
<style scoped>

</style>