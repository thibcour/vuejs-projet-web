<template>
  <div class="map-container">
    <div ref="geocoderContainer" class="geocoder-container flex-center"></div>
    <div ref="map" class="map"></div>
    <div ref="geolocateContainer" class="geolocate-container">
      <div class="geolocate-control custom-geolocate-button"></div>
    </div>
    <div v-if="loading">Loading...</div>
    <div v-else-if="weatherData">
      <!-- <p>Température: {{ weatherData.current.temp }}°c</p>
      <p>Humidité: {{ weatherData.current.humidity }}%</p>
      <p>Wind speed: {{weatherData.current.wind_speed}}km/H</p>
      <p>Weather: {{weatherData.current.weather.description}}</p>
      Add more weather data fields here as needed -->
      <!-- <article class="widget">
        <div class="weatherIcon"><i class="wi wi-day-cloudy"></i></div>
        <div class="weatherInfo">
          <div class="temperature"><span>{{ Math.round(weatherData.current.temp) }}&deg;</span></div>
          <div class="description">
            <div class="weatherCondition">{{weatherData.current.weather[0].description }}</div>
            <div class="place">{{searchText}}</div>
          </div>
        </div>
        <div class="date">{{currentDate}}</div>
      </article>-->

      <br>
      <div class="container">
        <div class="weather-side">
          <div class="weather-gradient"></div>
          <div class="date-container">
            <h2 class="date-dayname">{{searchText}}</h2><span class="date-day">{{dayName.charAt(0).toUpperCase() + dayName.slice(1)}}</span><i class="location-icon" data-feather="map-pin"></i><span class="location">{{currentDate}}</span></div>
          <div class="weather-container"><i class="weather-icon" data-feather="sun"></i>
            <img style="width: 128px" :src="'https://openweathermap.org/img/wn/' + icon + '@2x.png'" alt="Icon">
            <h1 class="weather-temp">{{ Math.round(weatherData.current.temp)}}°C</h1>
            <h3 class="weather-desc">{{weatherData.current.weather[0].description }}</h3>
          </div>
        </div>
        <div class="info-side">
          <div class="today-info-container">
            <div class="today-info">
              <div class="precipitation"> <span class="title">Précipitation</span><span class="value">{{weatherData.current.clouds}} %</span>
                <div class="clear"></div>
              </div>
              <div class="humidity"> <span class="title">Humidité</span><span class="value">{{weatherData.current.humidity}} %</span>
                <div class="clear"></div>
              </div>
              <div class="wind"> <span class="title">Vent</span><span class="value">{{Math.round(weatherData.current.wind_speed)}} km/h</span>
                <div class="clear"></div>
              </div>
            </div>
          </div>
          <div class="week-container">
            <ul class="week-list">
              <li class="active"><span class="day-name">{{ nextDays[0] }}</span><span class="day-temp">{{Math.round(weatherData.daily[1].temp.day)}}°C</span><img style="width: 64px" :src="'https://openweathermap.org/img/wn/' + icon2 + '@2x.png'" alt="Icon"><span class="day-temp">{{Math.round(weatherData.daily[1].temp.min)}} / {{Math.round(weatherData.daily[1].temp.max)}}°C</span></li>
              <li><span class="day-name">{{ nextDays[1] }}</span><span class="day-temp">{{Math.round(weatherData.daily[2].temp.day)}}°C</span><img style="width: 64px" :src="'https://openweathermap.org/img/wn/' + icon3 + '@2x.png'" alt="Icon"><span class="day-temp">{{Math.round(weatherData.daily[2].temp.min)}} / {{Math.round(weatherData.daily[2].temp.max)}}°C</span></li>
              <li><span class="day-name">{{ nextDays[2] }}</span><span class="day-temp">{{Math.round(weatherData.daily[3].temp.day)}}°C</span><img style="width: 64px" :src="'https://openweathermap.org/img/wn/' + icon4 + '@2x.png'" alt="Icon"><span class="day-temp">{{Math.round(weatherData.daily[3].temp.min)}} / {{Math.round(weatherData.daily[3].temp.max)}}°C</span></li>
              <li><span class="day-name">{{ nextDays[3] }}</span><span class="day-temp">{{Math.round(weatherData.daily[4].temp.day)}}°C</span><img style="width: 64px" :src="'https://openweathermap.org/img/wn/' + icon5 + '@2x.png'" alt="Icon"><span class="day-temp">{{Math.round(weatherData.daily[4].temp.min)}} / {{Math.round(weatherData.daily[4].temp.max)}}°C</span></li>
              <li><span class="day-name">{{ nextDays[4] }}</span><span class="day-temp">{{Math.round(weatherData.daily[5].temp.day)}}°C</span><img style="width: 64px" :src="'https://openweathermap.org/img/wn/' + icon6 + '@2x.png'" alt="Icon"><span class="day-temp">{{Math.round(weatherData.daily[5].temp.min)}} / {{Math.round(weatherData.daily[5].temp.max)}}°C</span></li>
              <div class="clear"></div>
            </ul>
          </div>
        </div>
      </div>
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
      longitude: 0,
      nextDays: [] // Ajouter cette ligne pour déclarer la propriété nextDays
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
      //this.searchText = ;
      this.updateWeatherData(latitude, longitude); // Appeler la méthode pour mettre à jour les données météorologiques
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
      //this.searchText = e.result.text;
      this.updateWeatherData(latitude, longitude); // Appeler la méthode pour mettre à jour les données météorologiques
    });
  },
  methods: {
    getCityName(latitude, longitude) {
      const apiKey = '740ecf1f34a8de40fb609316e481a77e'; // Remplacez YOUR_API_KEY par votre propre clé API de géocodage inverse
      const url = `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&lang=fr&appid=${apiKey}`;

      axios.get(url)
          .then(response => {
            if (response.data && response.data.length > 0) {
              const cityName = response.data[0].name;
              this.searchText = cityName; // Mettre à jour le texte de recherche avec le nom de la ville
            }
          })
          .catch(error => {
            console.error('Error fetching city name:', error);
          });
    },

    updateWeatherData(latitude, longitude) {
      this.loading = true; // Afficher l'indicateur de chargement
      this.getCityName(latitude, longitude); // Appeler la méthode pour récupérer le nom de la ville
      this.getWeatherData(latitude, longitude); // Appeler la méthode pour obtenir les données météorologiques
    },
    getNextFiveDays() {
      const options = { weekday: 'short' }; // Options pour obtenir les noms abrégés des jours
      const nextFiveDays = []; // Initialiser un tableau pour stocker les noms abrégés des jours suivants

      // Boucle pour obtenir les noms abrégés des cinq jours suivants
      for (let i = 1; i <= 5; i++) {
        const nextDay = new Date(); // Créer une nouvelle date pour chaque jour suivant
        nextDay.setDate(nextDay.getDate() + i); // Ajouter i jours à la date actuelle
        const dayName = nextDay.toLocaleDateString('fr-FR', options); // Obtenir le nom abrégé du jour en français
        const abbreviatedDayName = dayName.substring(0, 3); // Extraire les trois premières lettres du nom du jour
        nextFiveDays.push(abbreviatedDayName); // Ajouter le nom abrégé du jour au tableau
      }

      return nextFiveDays; // Retourner les noms abrégés des cinq jours suivants
    },

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

      const options = { weekday: 'long' };
      const dayName = currentDate.toLocaleDateString('fr-FR', options); // 'fr-FR' pour obtenir le nom du jour en français, vous pouvez changer cela selon vos besoins de langue


      this.loading = true;
      const apiKey = '740ecf1f34a8de40fb609316e481a77e';
      const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&lang=fr&units=metric&exclude=minutely,hourly&appid=${apiKey}`;
      axios.get(url)
          .then(response => {
            this.loading = false;
            this.weatherData = response.data;
            this.temperature = Math.round(this.weatherData.temp);
            this.currentDate = currentDateString; // Stocker la date actuelle dans une propriété
            this.dayName = dayName;
            this.icon = this.weatherData.current.weather[0].icon;
            this.icon2 = this.weatherData.daily[1].weather[0].icon
            this.icon3 = this.weatherData.daily[2].weather[0].icon
            this.icon4 = this.weatherData.daily[3].weather[0].icon
            this.icon5 = this.weatherData.daily[4].weather[0].icon
            this.icon6 = this.weatherData.daily[5].weather[0].icon
            this.nextDays = this.getNextFiveDays();
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

  .main {
    margin-top: 50px;
  }
  .weather-panel {
    color: #0a53be;
    background-size: cover;
    border-radius: 20px;
    box-shadow: 25px 25px 40px 0px rgba(0,0,0,0.33);
    position: relative;

    small {
      font-size: 50%;
    }
    ul.forecast > li {
      border-top: 1px solid #fff;
    }
    .temperature {
      & > span {
        font-size: 2em;
      }
    }
  }
}

@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700,900&display=swap');

:root {
  --gradient: linear-gradient( 135deg, #72EDF2 10%, #5151E5 100%);
}

* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  line-height: 1.25em;
}

.clear {
  clear: both;
}

body {
  margin: 0;
  width: 100%;
  height: 100vh;
  font-family: 'Montserrat', sans-serif;
  background-color: #343d4b;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.container {
  border-radius: 25px;
  -webkit-box-shadow: 0 0 70px -10px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 70px -10px rgba(0, 0, 0, 0.2);
  background-color: #222831;
  color: #ffffff;
  height: 400px;
}

.weather-side {
  position: relative;
  height: 100%;
  border-radius: 25px;
  background-color: #0a53be;
  //background-image: url("https://images.unsplash.com/photo-1559963110-71b394e7494d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80");
  width: 300px;
  -webkit-box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.2);
  -webkit-transition: -webkit-transform 300ms ease;
  transition: -webkit-transform 300ms ease;
  -o-transition: transform 300ms ease;
  transition: transform 300ms ease;
  transition: transform 300ms ease, -webkit-transform 300ms ease;
  -webkit-transform: translateZ(0) scale(1.02) perspective(1000px);
  transform: translateZ(0) scale(1.02) perspective(1000px);
  float: left;
}

.weather-side:hover {
  -webkit-transform: scale(1.1) perspective(1500px) rotateY(10deg);
  transform: scale(1.1) perspective(1500px) rotateY(10deg);
}

.weather-gradient {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-image: var(--gradient);
  border-radius: 25px;
  opacity: 0.8;
}

.date-container {
  position: absolute;
  top: 25px;
  left: 25px;
}

.date-dayname {
  margin: 0;
}

.date-day {
  display: block;
}

.location {
  display: inline-block;
  margin-top: 10px;
}

.location-icon {
  display: inline-block;
  height: 0.8em;
  width: auto;
  margin-right: 5px;
}

.weather-container {
  position: absolute;
  bottom: 25px;
  left: 25px;
}

.weather-icon.feather {
  height: 60px;
  width: auto;
}

.weather-temp {
  margin: 0;
  font-weight: 700;
  font-size: 4em;
}

.weather-desc {
  margin: 0;
}

.info-side {
  position: relative;
  float: left;
  height: 100%;
  padding-top: 25px;
}

.today-info {
  padding: 15px;
  margin: 0 25px 25px 25px;
  /* 	box-shadow: 0 0 50px -5px rgba(0, 0, 0, 0.25); */
  border-radius: 10px;
}

.today-info>div:not(:last-child) {
  margin: 0 0 10px 0;
}

.today-info>div .title {
  float: left;
  font-weight: 700;
}

.today-info>div .value {
  float: right;
}

.week-list {
  list-style-type: none;
  padding: 0;
  margin: 10px 35px;
  -webkit-box-shadow: 0 0 50px -5px rgba(0, 0, 0, 0.25);
  box-shadow: 0 0 50px -5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background: #
}

.week-list>li {
  float: left;
  padding: 15px;
  cursor: pointer;
  -webkit-transition: 200ms ease;
  -o-transition: 200ms ease;
  transition: 200ms ease;
  border-radius: 10px;
}

.week-list>li:hover {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
  background: #fff;
  color: #222831;
  -webkit-box-shadow: 0 0 40px -5px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 40px -5px rgba(0, 0, 0, 0.2)
}

.week-list>li.active {
  background: #fff;
  color: #222831;
  border-radius: 10px;
}

.week-list>li .day-name {
  display: block;
  margin: 10px 0 0 0;
  text-align: center;
}

.week-list>li .day-icon {
  display: block;
  height: 30px;
  width: auto;
  margin: 0 auto;
}

.week-list>li .day-temp {
  display: block;
  text-align: center;
  margin: 10px 0 0 0;
  font-weight: 700;
}

.location-container {
  padding: 25px 35px;
}

.location-button {
  outline: none;
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border: none;
  border-radius: 25px;
  padding: 10px;
  font-family: 'Montserrat', sans-serif;
  background-image: var(--gradient);
  color: #ffffff;
  font-weight: 700;
  -webkit-box-shadow: 0 0 30px -5px rgba(0, 0, 0, 0.25);
  box-shadow: 0 0 30px -5px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  -webkit-transition: -webkit-transform 200ms ease;
  transition: -webkit-transform 200ms ease;
  -o-transition: transform 200ms ease;
  transition: transform 200ms ease;
  transition: transform 200ms ease, -webkit-transform 200ms ease;
}

.location-button:hover {
  -webkit-transform: scale(0.95);
  -ms-transform: scale(0.95);
  transform: scale(0.95);
}

.location-button .feather {
  height: 1em;
  width: auto;
  margin-right: 5px;
}
</style>
