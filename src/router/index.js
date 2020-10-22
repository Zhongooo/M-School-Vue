import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home/Home.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/user/User.vue')
  },
  {
    path: '/myclass',
    name: 'myclass',
    component: () => import('../views/class/Class.vue')
  },
  {
    path: '/chat',
    name: 'chat',
    component: () => import('../views/chat/Chat.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/basic/Login.vue')
  },
  {
    path: '/register/:identity',
    name: 'register',
    component: () => import('../views/basic/register.vue')
  },
  {
    path: '/identity',
    name: 'identity',
    component: () => import('../views/basic/identity.vue')
  },
  {
    path: '/chat/chatroom',
    name: 'chatroom',
    component: () => import('../views/chat/chatroom.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
