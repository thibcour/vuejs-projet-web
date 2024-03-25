import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import UserLogin from '../components/UserLogin.vue';
import UserRegister from '../components/UserRegister.vue';
import NotFound from '../components/NotFound.vue';
import AdminDashboard from '../components/AdminDashboard.vue';
import store from '../store'; // Assurez-vous d'importer le store
import UserManagement from '../components/UserManagement.vue';
import ProductManagement from '../components/ProductManagement.vue';
import AddProductPage from "@/components/AddProductPage.vue";
import AddProductPageAdmin from "@/components/AddProductPageAdmin.vue";


const routes = [
    {
        path: '/admin-dashboard',
        name: 'AdminDashboard',
        component: AdminDashboard,
        meta: { requiresAdmin: true }
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
        path: '/admin-dashboard',
        name: 'AdminDashboard',
        component: AdminDashboard,
        meta: { requiresAdmin: true }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    },
    {
        path: '/admin-dashboard',
        name: 'AdminDashboard',
        component: AdminDashboard,
        meta: { requiresAdmin: true }
    },
    {
        path: '/user-management',
        name: 'UserManagement',
        component: UserManagement,
        meta: { requiresAdmin: true }
    },
    {
        path: '/product-management',
        name: 'ProductManagement',
        component: ProductManagement,
        meta: { requiresAdmin: true }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    },
    {
        path: '/add-product',
        name: 'AddProduct',
        component: AddProductPage
    },
    {
        path: '/add-product-admin',
        name: 'AddProductAdmin',
        component: AddProductPageAdmin,
        meta: { requiresAdmin: true }
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAdmin)) {
        if (!store.state.admin) {
            next({ name: 'Home' });
        } else {
            next();
        }
    } else if (to.name === 'Login' || to.name === 'Register') {
        if (store.state.isLoggedIn) {
            next({ name: 'Home' }); // Redirige vers la page Home si l'utilisateur est déjà connecté
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;