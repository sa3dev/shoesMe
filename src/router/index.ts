import { createRouter, createWebHistory } from 'vue-router'

const useContact = import('./../views/ContactView.vue')
const useHome    = import('./../views/HomeView.vue')


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => useHome
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => useContact
    },
    {
      path: '/our-store',
      name: 'stores',
      component: () => import('../views/StoreView.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartView.vue')
    },
    {
      path: '/login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/employee',
      component: () => import('../views/EmployeView.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }

    // could also be
    // el: document.getElementById('main'),
    // return {
    //   el: '#main',
    //   top: -10,
    // }
  },
})

export default router
