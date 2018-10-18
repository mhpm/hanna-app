import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Main from './views/Main.vue'
import Historial from './views/Historial.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Main',
      name: 'Main',
      component: Main,
      params: true,
      beforeEnter: (to, from, next) => {
        if (to.params.User)
          next()
        else
          next({
            name: 'Login'
          })
      }
    },
    {
      path: '/Historial',
      name: 'Historial',
      component: Historial,
      params: true,
      beforeEnter: (to, from, next) => {
        if (to.params.User)
          next()
        else
          next({
            name: 'Login'
          })
      }
    }
  ]
})