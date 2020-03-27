import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Produk from '../views/produk.vue'
import Sidebar from '../views/layout/Sidebar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: {default: Login}
  },
  {
    path: '/',
    name: 'home',
    components: {default: Home, sidebar: Sidebar},
  },
  {
    path: '/produk',
    name: 'produk',
    components: {default: Produk, sidebar : Sidebar},
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
