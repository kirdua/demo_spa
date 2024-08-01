const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/Home.vue'),
    beforeEnter(to, from, next) {
      next()
    },
    meta: {
      requiresAuth: true,
      header: 'Home'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/Login.vue'),
    meta: {
      header: 'Login'
    }
  },
  {
    path: '/:catchAll(.*)*',
    redirect: { name: 'home' }
  }
]

export default routes
