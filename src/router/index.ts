import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/',      name: 'home', component: () => import('./../views/HomeView.vue') },
    { path: '/cart',  name: 'cart', component: () => import('../views/CartView.vue') },
    { path: '/login', name: 'login',component: () => import('../views/LoginView.vue') },
    { path: '/employee', name: 'employe' , component: () => import('../views/EmployeView.vue')}
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
