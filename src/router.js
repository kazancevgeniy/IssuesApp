import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Issues from './views/Issues.vue'
import Issue from './views/Issue.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/issues',
      name: 'issues',
      component: () => import('./views/Issues.vue')
    },
    {
      path: '/issues/:id',
      name: 'issue',
      component: () => import('./views/Issue.vue')
    }
  ]
})
