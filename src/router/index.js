import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import UserLogin from '../components/UserLogin.vue';
import UserRegister from '../components/UserRegister.vue';
import NotFound from '../components/NotFound.vue';
import AdminDashboard from '../components/AdminDashboard.vue';
import store from '../store'; // Assurez-vous d'importer le store

const routes = [
    {
        path: '/admin-dashboard',
        name: 'AdminDashboard',
        component: AdminDashboard,
        meta: { requiresAdmin: true } // Ajoutez cette ligne
    },
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/login',
        name: 'Login',
        component: UserLogin
    },
    {
        path: '/register',
        name: 'Register',
        component: UserRegister
    },
    {
        path: '/admin-dashboard', // Ajoutez cette route
        name: 'AdminDashboard',
        component: AdminDashboard
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAdmin)) {
        if (!store.state.admin) {
            next({ name: 'Home' }); // Redirige vers la page d'accueil si l'utilisateur n'est pas un administrateur
        } else {
            next(); // Autorise l'accès à la route si l'utilisateur est un administrateur
        }
    } else {
        next(); // Autorise l'accès à la route si elle ne nécessite pas d'administrateur
    }
});

export default router;