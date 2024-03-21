<template>
  <div class="map-container">
    <div class="geocoder-container flex-center" ref="geocoderContainer"></div>
    <div class="map" ref="map"></div>
    <div class="geolocate-container" ref="geolocateContainer">
      <div class="geolocate-control custom-geolocate-button"></div>
    </div>
    <div v-if="loading">Loading...</div>
    <div v-else-if="weatherData">
      <br>
      <div class="container">
        <div class="weather-side">
          <div class="weather-gradient"></div>
          <div class="date-container">
            <h2 class="date-dayname">{{searchText}}</h2>
            <span class="date-day">{{dayName.charAt(0).toUpperCase() + dayName.slice(1)}}</span><i class="location-icon" data-feather="map-pin"></i><span class="location">{{currentDate}}</span></div>
          <div class="weather-container"><i class="weather-icon" data-feather="sun"></i>
            <img style="width: 128px" :src="'https://openweathermap.org/img/wn/' + icon + '@2x.png'" alt="Icon">
            <h1 class="weather-temp" v-if="weatherData && weatherData.current && 'temp' in weatherData.current">{{ Math.round(weatherData.current.temp)}}°C</h1>
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
              <li class="active"><span class="day-name">{{ nextDays[0] }}</span><span class="day-temp">{{Math.round(weatherData.daily[1].temp.day)}}°C</span><img style="width: 64px" :src="'https://openweathermap.org/img/wn/' + this.icon2 + '@2x.png'" alt="Icon"><span class="day-temp">{{Math.round(weatherData.daily[1].temp.min)}} / {{Math.round(weatherData.daily[1].temp.max)}}°C</span></li>
              <li><span class="day-name">{{ nextDays[1] }}</span><span class="day-temp">{{Math.round(weatherData.daily[2].temp.day)}}°C</span><img style="width: 64px" :src="'https://openweathermap.org/img/wn/' + this.icon3 + '@2x.png'" alt="Icon"><span class="day-temp">{{Math.round(weatherData.daily[2].temp.min)}} / {{Math.round(weatherData.daily[2].temp.max)}}°C</span></li>
              <li><span class="day-name">{{ nextDays[2] }}</span><span class="day-temp">{{Math.round(weatherData.daily[3].temp.day)}}°C</span><img style="width: 64px" :src="'https://openweathermap.org/img/wn/' + this.icon4 + '@2x.png'" alt="Icon"><span class="day-temp">{{Math.round(weatherData.daily[3].temp.min)}} / {{Math.round(weatherData.daily[3].temp.max)}}°C</span></li>
              <li><span class="day-name">{{ nextDays[3] }}</span><span class="day-temp">{{Math.round(weatherData.daily[4].temp.day)}}°C</span><img style="width: 64px" :src="'https://openweathermap.org/img/wn/' + this.icon5 + '@2x.png'" alt="Icon"><span class="day-temp">{{Math.round(weatherData.daily[4].temp.min)}} / {{Math.round(weatherData.daily[4].temp.max)}}°C</span></li>
              <li><span class="day-name">{{ nextDays[4] }}</span><span class="day-temp">{{Math.round(weatherData.daily[5].temp.day)}}°C</span><img style="width: 64px" :src="'https://openweathermap.org/img/wn/' + this.icon6 + '@2x.png'" alt="Icon"><span class="day-temp">{{Math.round(weatherData.daily[5].temp.min)}} / {{Math.round(weatherData.daily[5].temp.max)}}°C</span></li>
            </ul>
            <div class="clear"></div>
          </div>
        </div>
      </div>
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
      daily: [],
      icon4: '',
      icon5: '',
      icon6: '',
      icon3: '',
      icon2: '',
      wind_speed: null,
      wind: null,
      humidity: null,
      clouds: null,
      weather: null,
      temp: null,
      map: null,
      icon: '',
      currentDate: '',
      loading: false,
      weatherData: null,
      mapboxAccessToken: process.env.VUE_APP_MAPBOX_ACCESS_TOKEN,
      latitude: 0,
      longitude: 0,
      nextDays: [],
      currentDateString: '', // Define currentDateString
      dayName: '', // Define dayName
      searchText: '', // Define searchText
    };
  },
  mounted() {
    mapboxgl.accessToken = this.mapboxAccessToken;

    // Set default coordinates to Paris
    const defaultLatitude = 48.8566;
    const defaultLongitude = 2.3522;

    // Create the map
    this.map = new mapboxgl.Map({
      container: this.$refs.map,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [defaultLongitude, defaultLatitude], // Set default center to Paris
      zoom: 11,
      attributionControl: false // Remove attribution
    });

    // Add geolocation control
    const geolocateControl = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true // Enable high accuracy
      },
      trackUserLocation: true, // Center map on user's location
      showUserLocation: true // Show user's location
    });

    // Listen to geolocate event
    geolocateControl.on('geolocate', (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      this.updateWeatherData(latitude, longitude); // Call method to update weather data
    });

    // Add control to the map
    this.map.addControl(geolocateControl);

    // Add geocoder
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      placeholder: 'Enter an address', // Placeholder text
    });

    // Add geocoder to the map
    this.map.addControl(geocoder, 'top-left');

    // Listen to geocoder search result event
    geocoder.on('result', (e) => {
      const coordinates = e.result.geometry.coordinates;
      const latitude = coordinates[1];
      const longitude = coordinates[0];
      this.updateWeatherData(latitude, longitude); // Call method to update weather data
    });

    // Update weather data for default city
    this.updateWeatherData(defaultLatitude, defaultLongitude);
  },
  methods: {
    getCityName(latitude, longitude) {
      const apiKey = '740ecf1f34a8de40fb609316e481a77e';
      const url = `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&lang=fr&appid=${apiKey}`;

      return axios.get(url)
          .then(response => {
            if (response.data && response.data.length > 0) {
              this.searchText = response.data[0].name;
            }
          })
          .catch(error => {
            console.error('Error fetching city name:', error);
          });
    },


    updateWeatherData(latitude, longitude) {
      this.loading = true;
      this.getCityName(latitude, longitude)
          .then(() => {
            this.getWeatherData(latitude, longitude);
          })
          .catch(error => {
            console.error('Error updating weather data:', error);
            this.loading = false;
          });
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
      const apiKey = '740ecf1f34a8de40fb609316e481a77e';
      const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&lang=fr&units=metric&exclude=minutely,hourly&appid=${apiKey}`;

      return axios.get(url)
          .then(response => {
            this.loading = false;
            this.weatherData = response.data;
            this.icon = this.weatherData.current.weather[0].icon;
            this.icon2 = this.weatherData.daily[1].weather[0].icon;
            this.icon3 = this.weatherData.daily[2].weather[0].icon;
            this.icon4 = this.weatherData.daily[3].weather[0].icon;
            this.icon5 = this.weatherData.daily[4].weather[0].icon;
            this.icon6 = this.weatherData.daily[5].weather[0].icon;
            this.nextDays = this.getNextFiveDays();
          })
          .catch(error => {
            console.error('Error fetching weather data:', error);
            this.loading = false;
          });
    },
  }

};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Poiret+One);
@import url(https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.9/css/weather-icons.min.css);

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


$border-radius: 20px;

body {
  background-color: #A64253;
  font-family: Poiret One,serif;
}

p{
  position: fixed;
  bottom: 0;
  right: 2%;
  a{
    text-decoration: none;
    color: #E4D6A7;
    font-size: 10px;
  }

  small {
      font-size: 50%;
    }
    ul.forecast > li {
      border-top: 1px solid #fff;
    }
}

@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700,900&display=swap');

:root {
  --gradient: linear-gradient( 135deg, #72EDF2 10%, #5151E5 100%);
}

* {
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
  width: 300px;
  box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.2);
  transition: transform 300ms ease;
  transform: translateZ(0) scale(1.02) perspective(1000px);
  float: left;
}

.weather-side:hover {
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
  transform: scale(1.1);
  background: #fff;
  color: #222831;
  box-shadow: 0 0 40px -5px rgba(0, 0, 0, 0.2);
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



.week-list>li .day-temp {
  display: block;
  text-align: center;
  margin: 10px 0 0 0;
  font-weight: 700;
}

</style>
