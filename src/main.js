// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { initializeApp } from "firebase/app";
import 'firebase/database';
import store from './store';
import router from './router';


// Votre configuration Firebase
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};

// Initialisation de Firebase
initializeApp(firebaseConfig);

// Vérifiez le statut d'administrateur de l'utilisateur
store.dispatch('init').then(() => {
    const app = createApp(App);
    app.use(store);
    app.use(router);
    app.mount('#app');
}).catch(error => {
    console.error("Failed to init store: ", error);
});

