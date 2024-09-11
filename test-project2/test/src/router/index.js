import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LogIn',
      component: () => import('../views/LogIn.vue')
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: () => import('../views/SignUp.vue')
    },
    {
      path: '/admin',
      name: 'AdminPage',
      component: () => import('../views/AdminPage.vue')
    },
    {
      path: '/ownermenu',
      name: 'OwnerMenu',
      component: () => import('../views/OwnerMenu.vue')
    },
    {
      path: '/confirm-orders',
      name: 'ConfirmOrders',
      component: () => import('../views/ConfirmOrders.vue')
    },
    {
      path: '/search',
      name: 'SearchPage',
      component: () => import('../views/SearchPage.vue')
    },
    {
      path: '/search/:id',
      name: 'ClientMenu',
      component: () => import('../views/ClientMenu.vue')
    },
    {
      path: '/cartp',
      name: 'CartPage',
      component: () => import('../views/CartPage.vue')
    },
    {
      path: '/order-history',
      name: 'OrderHistory',
      component: () => import('../views/OrderHistory.vue')
    },

  ]
})

export default router
