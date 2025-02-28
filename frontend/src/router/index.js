import Vue from 'vue'
import VueRouter from 'vue-router'
//import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: () =>
            import ('../views/HomeView.vue')
    },
    {
        path: '/home',
        name: 'homs',
        component: () =>
             import ('../views/HomeView.vue')
        },
    {
        path: '/standart',
        name: 'standart',
        component: () =>
            import ('../views/StandartView.vue')
    },
    {
        path: '/addstandard',
        name: 'addstandard',
        component: () =>
            import ('../components/FormForAddExspertise.vue')
    },
    {
        path: '/addexpertise',
        name: 'addexpertise',
        component: () =>
            import ('../components/FormForAddStandard.vue')
    },
    {
        path: '/adminexpertise',
        name: 'adminexpertise',
        component: () =>
            import ('../components/ExpertiseComponent.vue')
    },
    {
        path: '/adminstandart',
        name: 'adminstandart',
        component: () =>
            import ('../components/StandardComponent.vue')
    },
    {
        path: '/superadmin',
        name: 'superadmin',
        component: () =>
            import ('../views/SuperAdminView.vue')
    },
    {
        path: '/admin',
        name: 'admin',
        component: () =>
            import ('../views/AdminView.vue')
    },
    {
        path: '/news',
        name: 'news',
        component: () =>
            import ('../views/NewsView.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        component: () =>
            import ('../views/ContactView.vue')
    },
    {
        path: '/admin',
        name: 'admin',
        component: () =>
            import ('../views/ContactView.vue')
    },
    {
        path: '*',
        redirect: '/404',
    },
    {
        path: '/404',
        name: '404',
        component: () =>
            import ('../components/NotFound.vue')
    },
]

const router = new VueRouter({
    routes
})

export default router