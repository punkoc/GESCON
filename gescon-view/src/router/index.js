import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Administradora from '../views/Administradora.vue'
import Servico from '../views/Servico.vue'
import Condominio from '../views/Condominio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/administradora',
    name: 'Administradora',
    component: Administradora
  },
  {
    path: '/servico',
    name: 'Servico',
    component: Servico
  },
  {
    path: '/condominio',
    name: 'Condominio',
    component: Condominio
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
