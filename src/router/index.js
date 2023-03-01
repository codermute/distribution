import { createRouter, createWebHashHistory } from 'vue-router'
import Order from '@/views/order'

const routes = [
  {
    path: '/',
    redirect: '/order'
  },
  {
    path: '/order',
    name: 'Order',
    component: Order
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
