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
    path: '/info/list',
    name: 'info',
    component: () => import('../views/info/list.vue')
  },
  {
    path: '/info/issue',
    name: 'issue',
    component: () => import('../views/info/issue.vue')
  },
  {
    path: '/info/checkclass',
    name: 'checkclass',
    component: () => import('../views/info/checkclass.vue')
  },
  {
    path: '/leave/list',
    name: 'leave',
    component: () => import('../views/leave/list.vue')
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
    path: '/class/detail',
    name: 'class_detail',
    component: () => import('../views/class/detail.vue')
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
  },
  //作业
  {
    path: '/homework/assign',
    name: 'assign',
    component: () => import('../views/homework/assign.vue')
  },
  {
    path: '/homework/list',
    name: 'homework_list',
    component: () => import('../views/homework/list.vue')
  },
  {
    path: '/homework/checkclass',
    name: 'homework_checkclass',
    component: () => import('../views/homework/checkclass.vue')
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
