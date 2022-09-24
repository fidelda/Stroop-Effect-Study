import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/users'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      component: () => import('@/views/About.vue')
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('@/views/Form.vue'),      
      meta: {
        auth: true // A protected route
      },
    },
    {
      path: '/instructions',
      name: 'instructions',
      component: () => import('@/views/Instructions.vue'),
      meta: {
        auth: true // A protected route
      },
    },
    {
      path: '/trials',
      name: 'trials',
      component: () => import('@/views/Trials.vue'),
      meta: {
        auth: true // A protected route
      },
    },
    {
      path: '/question',
      name: 'question',
      component: () => import('@/views/Question.vue'),
      meta: {
        auth: true // A protected route
      },
    },
    {
      path: '/endscreen',
      name: 'endscreen',
      component: () => import('@/views/Endscreen.vue'),
      meta: {
        auth: true // A protected route
      },
    },
  ]
})

const beforeMap = new Map();
beforeMap.set('question', 'trials');
beforeMap.set('trials', 'instructions');
beforeMap.set('instructions', 'form');

router.beforeEach((to, from, next) => {
  const store = useUserStore();
  if (from.name == 'endscreen' && to.name =='question' || to.meta.auth && from.name != 'about' && store.user.uid == '') {
    next('/');
  } 
  else if (to.meta.auth && beforeMap.get(from.name) == to.name && from.name != 'endscreen') 
  {
    window.alert('Your progress is lost.');
    next('/');
  }  
  else {
    next();
  }    
})

export default router
