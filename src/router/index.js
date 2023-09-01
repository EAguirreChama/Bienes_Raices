import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import ('../views/admin/AdminLayout.vue'),
      meta: { requireAuth: true},
      children: [
        {
          path: '/admin/propiedades',
          name: 'admin-propiedades',
          component: () => import ('../views/admin/AdminView.vue'),
        meta: { requireAuth: true}
        },
        {
          path: '/admin/nueva',
          name: 'nueva-propiedad',
          component: () => import ('../views/admin/NuevaPropiedadView.vue'),
          meta: { requireAuth: true}
        },
        {
          path: '/admin/editar/:id',
          name: 'editar-propiedad',
          component: () => import ('../views/admin/EditarPropiedadView.vue'),
          meta: { requireAuth: true}
        }
      ]
    }
  ]
})

// Guard de navegación
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(url => url.meta.requireAuth)
  if(requiresAuth){
    // Comprobar que el usuario este autenticado
  } else {
    // No esta protegido
    next()
  }
})

export default router
