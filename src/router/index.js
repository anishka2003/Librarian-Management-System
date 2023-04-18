import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Login',
        component: () =>
            import ('../views/Login.vue')
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/books',
        name: 'books',
        component: () =>
            import ('../views/Books.vue')
    },
    {
        path: '/authors',
        name: 'authors',
        component: () =>
            import ('../views/Authors.vue')
    },
    {
        path: '/members',
        name: 'members',
        component: () =>
            import ('../views/Members.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router