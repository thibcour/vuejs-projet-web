// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Slide } from 'vue3-carousel';
import 'mapbox-gl/dist/mapbox-gl.css';
import { initializeApp } from "firebase/app";
import 'firebase/database';
import store from './store';
import router from './router';
import VueCookies from 'vue-cookies';

// Votre configuration Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAJRp8WxcFUDzBzsRnqG-TZTUQG3jWGjnQ",
    authDomain: "vuejs-ae8a0.firebaseapp.com",
    databaseURL: "https://vuejs-ae8a0-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "vuejs-ae8a0",
    storageBucket: "vuejs-ae8a0.appspot.com",
    messagingSenderId: "104652181195",
    appId: "1:104652181195:web:9bba7498e6fb88baa7d54e",
    measurementId: "G-2CJPHT3X6K"
};

// Initialisation de Firebase
initializeApp(firebaseConfig);

// Restaurer l'état de connexion à partir des cookies
const isLoggedIn = VueCookies.get('isLoggedIn');
let user = VueCookies.get('user');
if (isLoggedIn === 'true' && user) {
    if (typeof user === 'string' && user.startsWith('{') && user.endsWith('}')) {
        try {
            user = JSON.parse(user);
        } catch (error) {
            console.error("Failed to parse user cookie: ", error);
        }
    } else if (typeof user === 'object') {
        // user is already an object, no need to parse
    } else {
        console.error("User cookie is not a valid JSON string or object: ", user);
    }
    store.state.isLoggedIn = true;
    store.state.user = user;
    store.state.admin = user.admin;
}

// Vérifiez le statut d'administrateur de l'utilisateur
store.dispatch('checkAdminStatus').then(() => {
    const app = createApp(App);
    app.use(store);
    app.use(router);

    // eslint-disable-next-line vue/multi-word-component-names
    app.component('Carousel', Carousel);
    // eslint-disable-next-line vue/multi-word-component-names
    app.component('Slide', Slide);

    app.mount('#app');
}).catch(error => {
    console.error("Failed to check admin status: ", error);
});