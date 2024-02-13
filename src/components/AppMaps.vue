<script setup>

</script>

<template>
  <div style="display: flex; justify-content: center;">
    <div class="map-container" v-if="geolocationFinished">
      <l-map ref="map" v-model:zoom="zoom" :center="center">
        <l-tile-layer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            layer-type="base"
            name="OpenStreetMap"
        ></l-tile-layer>
      </l-map>
    </div>
  </div>
</template>


<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
  },
  data() {
    return {
      zoom: 2,
      center: [47.41322, -1.219482], // Valeur par défaut
      geolocationFinished: false, // Ajoutez cette ligne
    };
  },
  mounted() {
    this.getUserLocation();
  },
  methods: {
    getUserLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.center = [position.coords.latitude, position.coords.longitude];
          this.zoom = 14;
          this.geolocationFinished = true; // Ajoutez cette ligne
        });
      } else {
        console.log("La géolocalisation n'est pas supportée par votre navigateur.");
        this.geolocationFinished = true; // Ajoutez cette ligne
      }
    },
  },
};
</script>

<style scoped>
.map-container {
  height: 80vh;
  width: 80vw;
  margin: auto;
  margin-top: 20px;
}

/* Pour les écrans de plus de 1200px de large */
@media (min-width: 1200px) {
  .map-container {
    width: 60vw; /* Réduisez la largeur à 60% de la largeur de la fenêtre */
  }
}
</style>