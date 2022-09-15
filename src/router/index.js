import { createRouter, createWebHistory } from 'vue-router'
import WhoWatchingView from '../views/WhoWatchingView.vue'

const routes = [
  {
    path: '/',
    name: 'whowatching',
    component: WhoWatchingView
  },
  {
    path: '/ManageProfiles',
    name: 'manageprofiles',
    component: () => import('../views/ManageProfiles.vue')
  },
  {
    path: '/browse',
    name: 'browse',
    component: () => import('../views/BrowseView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
