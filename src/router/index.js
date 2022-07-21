import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView  from '../views/AboutView.vue'
import ContactView  from '../views/ContactView.vue'
import ProjectsView  from '../views/ProjectsView.vue'
import ResumeView  from '../views/ResumeView.vue'
import SkillsView  from '../views/SkillsView.vue'
import TestimonialsView  from '../views/TestimonialsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView
  },
  {
    path: '/resume',
    name: 'resume',
    component: ResumeView
  },
  {
    path: '/skills',
    name: 'skills',
    component: SkillsView
  },
  {
    path: '/testimonials',
    name: 'testimonials',
    component: TestimonialsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
