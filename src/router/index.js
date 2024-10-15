import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import PizzaBuilder from '../pages/PizzaBuilder.vue'
import SelectIngrediente from '../pages/SelectIngrediente.vue'
import Resume from '../pages/Resume.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/pizza-builder', component: PizzaBuilder },
  { path: '/select-ingrediente', component: SelectIngrediente },
  { path: '/resume', component: Resume },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router