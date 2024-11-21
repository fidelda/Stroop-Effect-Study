import { createRouter, createWebHistory } from 'vue-router'
import { useUserDataStore } from '@/store'
import About from '@/views/About.vue';
import Form from '@/views/Form.vue';
import Instructions from '@/views/Instructions.vue';
import Trials from '@/views/Trials.vue';
import Question from '@/views/Question.vue';
import Endscreen from '@/views/Endscreen.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      component: About
    },
    {
      path: '/form',
      name: 'form',
      component: Form,   
    },
    {
      path: '/instructions',
      name: 'instructions',
      component: Instructions,
    },
    {
      path: '/trials',
      name: 'trials',
      component: Trials,
    },
    {
      path: '/question',
      name: 'question',
      component: Question,
    },
    {
      path: '/endscreen',
      name: 'endscreen',
      component: Endscreen,
    },
  ]
})

router.beforeEach((to, from, next) => {
  const store = useUserDataStore();
  
  // Avoiding that a user participates twice
  if (from.name != 'endscreen' && to.name != 'endscreen' && store.hasParticipated()) {
    window.alert('You have already participated.');
    next('/endscreen');
  } 
  // Handling the user going back during the trial (Abort Trial)
  else if (from.name == 'trials' && to.name != 'question') {
    store.abortStudy();
    window.alert('You have aborted the study.');
    next('/endscreen');
  }
  // Handling the user going back at the end screen question
  else if (from.name == 'question' && to.name != 'endscreen') {
    window.alert('Please close the tab if you wish to abort the study.');
    next('/question');
  }
  // Default
  else {
    next();
  }    
})

export default router
