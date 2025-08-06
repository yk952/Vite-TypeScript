import { createRouter, createWebHistory } from 'vue-router'

// 定义路由
const routes = [
  {
    path: '/',
    name: 'Home',
    // 懒加载组件（访问时才加载）
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  }
    path: '/settings',
    name: 'Settings',
    component: () => import('..Settings.vue')
  }
]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(), // 使用HTML5 history模式
  routes
})

export default router