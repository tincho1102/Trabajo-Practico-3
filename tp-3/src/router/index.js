import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Argentina from '../views/Argentina.vue'
import América from '../views/América.vue'
import Internacional from '../views/Internacional.vue'
import Extra from '../views/Extra.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Argentina',
    name: 'Argentina',
    component: Argentina
  },
  {
    path: '/América',
    name: 'América',
    component: América
  },
  {
    path: '/Internacional',
    name: 'Internacional',
    component: Internacional
  },
  {
    path: '/Extra',
    name: 'Extra',
    component: Extra
  },
]

const router = new VueRouter({
  routes
})

export default router
