import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/user/user.vue'
import userDetail from '../views/user/user-detail.vue'
import SearchWeather from '../views/search.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/users',
        name: 'users',
        component: User
    },
    {
        path: '/search',
        name: 'search',
        component: SearchWeather
    },
    {
        path: '/user/:id',
        name: 'userDetail',
        component: userDetail
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router