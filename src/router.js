import Vue from 'vue'
import Router from 'vue-router'

const lazy = {
  nu: {
    Container: () => import('./components/NewUserContainer'),
    Landing: () => import('./views/nu/Landing'),
    Register: () => import('./views/nu/Register'),
    Login: () => import('./views/nu/Login')
  },
  ex: {
    Container: () => import('./components/ExistingUserContainer')
  },
  admin: {
    Container: () => import('./components/AdminContainer')
  }
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/nu/'
    },
    {
      path: '/nu',
      component: lazy.nu.Container,
      children: [
        {
          path: '',
          component: lazy.nu.Landing
        },
        {
          path: 'login',
          component: lazy.nu.Login
        },
        {
          path: 'register',
          component: lazy.nu.Register
        }
      ]
    },
    {
      path: '/ex',
      component: lazy.ex.Container
    },
    {
      path: '/admin',
      component: lazy.admin.Container
    }
  ]
})
