import { createRouter, createWebHistory } from 'vue-router'
import CreateTodo from '../views/CreateTodo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/new-todo',
      name: 'CreateTodo',
      component: CreateTodo,
    },
  ],
})

export default router
