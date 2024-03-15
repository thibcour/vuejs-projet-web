// src/store.js
import {createStore} from 'vuex';
import {getAuth, onAuthStateChanged} from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

async function checkIfUserIsAdmin(userId) {
    const db = getFirestore();
    const userRef = doc(db, 'users', userId);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
        return userSnap.data().admin === true;
    } else {
        throw new Error('User does not exist');
    }
}

export default createStore({
    state: {
        // Ajoutez un état de chargement
        isLoading: true,
        isLoggedIn: false,
        user: null,
        admin: false,
        users: {},
        notification: {
            message: '',
            type: 'info'
        }
    },
    mutations: {
        // Ajoutez une mutation pour définir l'état de chargement
        setLoading(state, isLoading) {
            state.isLoading = isLoading;
        },
        setUser(state, user) {
            console.log('setUser called with:', user);
            state.user = user;
            state.isLoggedIn = !!user;
            state.admin = user ? user.admin : false;

            // Stockez uniquement le jeton d'authentification dans le stockage local
            localStorage.setItem('authToken', user.authToken);
        },
        setNotification(state, notification) {
            state.notification = notification;
        }
    },
    actions: {
        async init({ dispatch }) {
            return new Promise((resolve, reject) => {
                const unsubscribe = onAuthStateChanged(getAuth(), () => {
                    dispatch('checkAdminStatus');
                    unsubscribe();
                    resolve();
                }, reject);
            });
        },
        login({ commit }, user) {
            commit('setUser', user);
        },
        logout({ commit }) {
            commit('setUser', null);
        },
        showNotification({ commit }, notification) {
            commit('setNotification', notification);
            setTimeout(() => {
                commit('setNotification', { message: '', type: 'info' });
            }, 3000);
        },
        async checkAdminStatus({ commit }) {
            const auth = getAuth();
            const user = auth.currentUser;
            if (user) {
                try {
                    const isAdmin = await checkIfUserIsAdmin(user.uid);
                    commit('setUser', { ...user, admin: isAdmin });
                    return Promise.resolve();
                } catch (error) {
                    return Promise.reject(error);
                }
            } else {
                const storedUser = JSON.parse(localStorage.getItem('user'));
                if (storedUser) {
                    commit('setUser', storedUser);
                }
            }
        }
    }
});