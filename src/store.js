// src/store.js
import { createStore } from 'vuex';

export default createStore({
    state: {
        isLoggedIn: false,
        user: null,
        admin: false,
        notification: {
            message: '',
            type: 'info'
        }
    },
    mutations: {
        setNotification(state, notification) {
            state.notification = notification;
        }
    },
    actions: {
        showNotification({ commit }, notification) {
            commit('setNotification', notification);
            setTimeout(() => {
                commit('setNotification', { message: '', type: 'info' });
            }, 3000);
        }
    },
    modules: {

    },
});