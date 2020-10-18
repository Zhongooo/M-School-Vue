import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/User.vue')
  },
  {
    path: '/myclass',
    name: 'myclass',
    component: () => import('../views/Class.vue')
  },
  {
    path: '/chat',
    name: 'chat',
    component: () => import('../views/Chat.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../secondaryViews/Login.vue')
  },
  {
    path: '/register/:identity',
    name: 'register',
    component: () => import('../secondaryViews/register.vue')
  },
  {
    path: '/identity',
    name: 'identity',
    component: () => import('../secondaryViews/identity.vue')
  },
  {
    path: '/chat/chatroom',
    name: 'chatroom',
    component: () => import('../secondaryViews/chatroom.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
