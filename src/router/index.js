import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/Home.vue'
import Subitem from '../components/Subitem.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/',
    //   name: 'index',
    //   component: Index
    // },
    {
      path:'/item/:cid',
      name:'item',
      component: Subitem
    },
    {
      path:'/subitem/:sid',
      name:'subitem',
      component: Subitem
    },
    {
      path:'/detailitem/:dit',
      name:'detailitem',
      component: Subitem
    },
  ]
})

export default router
