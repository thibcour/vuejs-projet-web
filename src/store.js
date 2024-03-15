// src/store.js
import { createStore } from 'vuex';
import { getAuth } from "firebase/auth";
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
        isLoggedIn: false,
        user: null,
        admin: false,
        users: {}, // Add this line
        notification: {
            message: '',
            type: 'info'
        }
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
            state.isLoggedIn = !!user;
            state.admin = user ? user.admin : false;
        },
        setNotification(state, notification) {
            state.notification = notification;
        }
    },
    actions: {
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
                return Promise.resolve();
            }
        }
    },
    modules: {

    },
});