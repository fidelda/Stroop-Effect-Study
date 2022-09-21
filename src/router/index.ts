import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'form',
      component: () => import('@/views/Form.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About.vue')
    },
    {
      path: '/instructions',
      name: 'instructions',
      component: () => import('@/views/Instructions.vue')
    },
    {
      path: '/letters0',
      name: 'letters0',
      component: () => import('@/views/studypages/letters/Letters0.vue')
    },
    {
      path: '/question',
      name: 'question',
      component: () => import('@/views/Question.vue')
    },
    {
      path: '/endscreen',
      name: 'endscreen',
      component: () => import('@/views/Endscreen.vue')
    },
  ]
})

export default router
