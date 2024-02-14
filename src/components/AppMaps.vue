<template>
  <div class="map-container">
    <div ref="geocoderContainer" class="geocoder-container flex-center"></div>
    <div ref="map" class="map"></div>
    <div ref="geolocateContainer" class="geolocate-container">
      <div class="geolocate-control custom-geolocate-button"></div>
    </div>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

export default {
  data() {
    return {
      searchQuery: '',
      mapboxAccessToken: process.env.VUE_APP_MAPBOX_ACCESS_TOKEN
    };
  },
  mounted() {
    mapboxgl.accessToken = this.mapboxAccessToken;

    // Créer la carte
    this.map = new mapboxgl.Map({
      container: this.$refs.map,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [2.3522, 48.8566], // Paris par défaut
      zoom: 11,
      attributionControl: false // Supprimer l'attribution
    });
// Ajouter le contrôle de géolocalisation
    const geolocateControl = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true // Activer la haute précision
      },
      trackUserLocation: true, // Centrer la carte sur l'emplacement de l'utilisateur
      showUserLocation: true // Afficher l'emplacement de l'utilisateur
    });

    // Ajouter le contrôle à la carte
    this.map.addControl(geolocateControl);

    if (window.innerWidth <= 600) {
      // Ajouter le géocodeur
      const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        placeholder: 'Entrez une adresse', // Texte de préremplissage
      });

      // Obtenir le conteneur DOM du géocodeur
      const geocoderContainer = geocoder.onAdd(this.map);

      // Ajouter le conteneur à un autre élément
      this.$refs.geocoderContainer.appendChild(geocoderContainer);
    }
    else {
      // Ajouter le géocodeur
      const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        placeholder: 'Entrez une adresse', // Texte de préremplissage
      });

      // Ajouter le géocodeur à la carte
      this.map.addControl(geocoder, 'top-left');
      // Ajouter les boutons de zoom uniquement sur les grands écrans
      this.map.addControl(new mapboxgl.NavigationControl({ showCompass: false })); // Ajoute le zoom et supprime la boussole
    }


  }
};
</script>

<style scoped>
.map-container {
  width: 70%;
  margin: 40px auto;
  position: relative;
}

.map {
  position: relative;
  width: 100%;
  height: 700px;
}

.flex-center {
  display: flex;
  justify-content: center;
}

@media (max-width: 600px) {
  .map {
      position: relative;
    height: 500px;
    width: auto;
  }
}




</style>
