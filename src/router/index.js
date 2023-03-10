import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home')
  },
  {
    path: '/expand',
    name: 'Expand',
    component: () => import('@/views/expand')
  },
  {
    path: '/compensation',
    name: 'Compensation',
    component: () => import('@/views/compensation')
  },
  {
    path: '/indent',
    name: 'Indent',
    component: () => import('@/views/indent')
  },
  {
    path: '/poster',
    name: 'Poster',
    component: () => import('@/views/poster')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login')
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('@/views/order')
  },
  {
    path: '/details',
    name: 'Details',
    component: () => import('@/views/details')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
