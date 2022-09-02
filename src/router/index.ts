import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../app/shared/domain/collections/infraestructure/views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../app/shared/domain/collections/infraestructure/views/LoginView.vue')
  },
  {
    path: '/users',
    name: 'users.index',
    component: () => import('../app/users/infraestructure/views/UsersIndexView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../app/shared/domain/collections/infraestructure/views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
