// src/store.js
import {createStore} from 'vuex';
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import { getDatabase, ref as dbRef, get } from "firebase/database";

async function checkIfUserIsAdmin(userId) {
    const db = getDatabase();
    const userRef = dbRef(db, `users/${userId}`);
    const snapshot = await get(userRef);
    const user = snapshot.val();
    if (user) {
        return user.admin === true;
    } else {
        throw new Error('User does not exist');
    }
}

export default createStore({
    state: {
        weatherData: null,
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
        setWeatherData(state, weatherData) {
            state.weatherData = weatherData;
        },
        setLoading(state, isLoading) {
            state.isLoading = isLoading;
        },
        setUser(state, user) {
            state.user = user;
            state.isLoggedIn = !!user;
            state.admin = user ? user.admin : false;
            localStorage.setItem('authToken', user.authToken);
        },
        setNotification(state, notification) {
            state.notification = notification;
        }
    },
    actions: {
        async init({ dispatch }) {
            return new Promise((resolve, reject) => {
                const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
                    if (user) {
                        dispatch('checkAdminStatus');
                    }
                    unsubscribe();
                    resolve();
                }, reject);
            });
        },
        async login({ commit, dispatch }, user) {
            const isAdmin = await checkIfUserIsAdmin(user.uid);
            commit('setUser', { ...user, admin: isAdmin });
            dispatch('checkAdminStatus');
            return isAdmin; // return isAdmin from the action
        },
        logout({ commit, dispatch }) {
            const auth = getAuth();
            signOut(auth).then(() => {
                commit('setUser', null);
                localStorage.removeItem('authToken');
                localStorage.removeItem('user');
                dispatch('checkAdminStatus');
            }).catch((error) => {
                console.error(error);
            });
        },
        showNotification({ commit, dispatch }, notification) {
            commit('setNotification', notification);
            setTimeout(() => {
                commit('setNotification', { message: '', type: 'info' });
            }, 3000);
            dispatch('checkAdminStatus');
        },
        async checkAdminStatus({ commit }) {
            const auth = getAuth();
            const user = auth.currentUser;
            if (user) {
                try {
                    const isAdmin = await checkIfUserIsAdmin(user.uid);
                    const db = getDatabase();
                    const userRef = dbRef(db, `users/${user.uid}`);
                    const snapshot = await get(userRef);
                    if (snapshot.exists()) {
                        user.username = snapshot.val().username;
                    }
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
        },
        async checkUserStatus({ commit, dispatch }) {
            const auth = getAuth();
            const user = auth.currentUser;
            if (user) {
                const db = getDatabase();
                const userRef = dbRef(db, `users/${user.uid}`);
                const snapshot = await get(userRef);
                if (snapshot.exists()) {
                    user.username = snapshot.val().username;
                }
                commit('setUser', user);
                dispatch('checkAdminStatus');
            } else {
                const storedUser = JSON.parse(localStorage.getItem('user'));
                if (storedUser) {
                    commit('setUser', storedUser);
                    dispatch('checkAdminStatus');
                }
            }

        }
    }
});