<template>
  <div class="map-container">
    <div ref="geocoderContainer" class="geocoder-container flex-center"></div>
    <div ref="map" class="map"></div>
    <div ref="geolocateContainer" class="geolocate-container">
      <div class="geolocate-control custom-geolocate-button"></div>
    </div>
    <div v-if="loading">Loading...</div>
    <div v-else-if="weatherData">
      <p>Température: {{ weatherData.current.temp }}°c</p>
      <p>Humidité: {{ weatherData.current.humidity }}%</p>
      <p>Wind speed: {{weatherData.current.wind_speed}}km/H</p>
      <p>Weather: {{weatherData.current.weather.description}}</p>
      <!-- Add more weather data fields here as needed -->
      <article class="widget">
        <div class="weatherIcon"><i class="wi wi-day-cloudy"></i></div>
        <div class="weatherInfo">
          <div class="temperature"><span>{{ Math.round(weatherData.current.temp) }}&deg;</span></div>
          <div class="description">
            <div class="weatherCondition">{{ weatherData.current.weather[0].description }}</div>
            <div class="place">{{searchText}}</div>
          </div>
        </div>
        <div class="date">{{currentDate}}</div>
      </article>
    </div>
    <div v-else>
      <p>No weather data available.</p>
    </div>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import axios from 'axios';

export default {
  data() {
    return {
      loading: false,
      weatherData: null,
      mapboxAccessToken: process.env.VUE_APP_MAPBOX_ACCESS_TOKEN,
      latitude: 0,
      longitude: 0
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

    // Écouter l'événement de géolocalisation
    geolocateControl.on('geolocate', (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      this.getWeatherData(latitude, longitude);
    });

    // Ajouter le contrôle à la carte
    this.map.addControl(geolocateControl);

    // Ajouter le géocodeur
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      placeholder: 'Entrez une adresse', // Texte de préremplissage
    });

    // Ajouter le géocodeur à la carte
    this.map.addControl(geocoder, 'top-left');

    // Écouter l'événement de résultat de recherche du géocodeur
    geocoder.on('result', (e) => {
      const coordinates = e.result.geometry.coordinates;
      const latitude = coordinates[1];
      const longitude = coordinates[0];
      this.searchText = e.result.text;
      this.getWeatherData(latitude, longitude);
    });
  },
  methods: {
    getWeatherData(latitude, longitude) {
      // Obtenir la date actuelle
      const currentDate = new Date();
      const dayOfMonth = currentDate.getDate(); // Obtenir le jour du mois
      const monthIndex = currentDate.getMonth(); // Obtenir l'indice du mois (0-11)
      const monthNames = [
        'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
        'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
      ];
      const monthName = monthNames[monthIndex]; // Obtenir le nom du mois correspondant à l'indice
      const currentDateString = `${dayOfMonth} ${monthName}`; // Concaténer le jour du mois et le nom du mois


      this.loading = true;
      const apiKey = '740ecf1f34a8de40fb609316e481a77e';
      const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&lang=fr&units=metric&exclude=minutely,hourly&appid=${apiKey}`;
      axios.get(url)
          .then(response => {
            this.loading = false;
            this.weatherData = response.data;
            this.temperature = Math.round(this.weatherData.temp);
            this.currentDate = currentDateString; // Stocker la date actuelle dans une propriété
          })
          .catch(error => {
            console.error('Error fetching weather data:', error);
            this.loading = false;
          });
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

@import url(https://fonts.googleapis.com/css?family=Poiret+One);
@import url(https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.9/css/weather-icons.min.css);

$border-radius: 20px;

body {
  background-color: #A64253;
  font-family: Poiret One;
}

.widget {
  position: absolute;
  top: 100%;
  left: 50%;
  display: flex;
  height: 300px;
  width: 600px;
  transform: translate(-50%, -50%);
  flex-wrap: wrap;
  cursor: pointer;
  border-radius: $border-radius;
  box-shadow: 0 27px 55px 0 rgba(0, 0, 0, 0.3), 0 17px 17px 0 rgba(0, 0, 0, 0.15);

  .weatherIcon{
    flex: 1 100%;
    height: 60%;
    border-top-left-radius: $border-radius;
    border-top-right-radius: $border-radius;
    background: #FAFAFA;
    font-family: weathericons;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 100px;

    i{
      padding-top: 30px;
    }
  }

  .weatherInfo{
    flex: 0 0 70%;
    height: 40%;
    background: #080705;
    border-bottom-left-radius: $border-radius;
    display: flex;
    align-items: center;
    color: white;

    .temperature{
      flex: 0 0 40%;
      width: 100%;
      font-size: 65px;
      display: flex;
      justify-content: space-around;
    }

    .description{
      flex: 0 60%;
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      justify-content: center;

      .weatherCondition{
        text-transform: uppercase;
        font-size: 35px;
        font-weight: 100;
      }

      .place{
        font-size: 15px;
      }
    }
  }

  .date{
    flex: 0 0 30%;
    height: 40%;
    background: #70C1B3;
    border-bottom-right-radius: $border-radius;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
    font-size: 30px;
    font-weight: 800;
  }
}

p{
  position: fixed;
  bottom: 0%;
  right: 2%;
  a{
    text-decoration: none;
    color: #E4D6A7;
    font-size: 10px;
  }
}
</style>
