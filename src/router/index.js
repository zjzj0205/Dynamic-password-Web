// import RegisterVue from '@/views/Register.vue'
import LoginVue from '@/views/login.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  },
  {
	  path:'/main',
	  name:'main',
	  component:()=>import('../views/main.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//挂载路由导航守卫
router.beforeEach((to,from,next)=>{
    if(to.path==='/login')return next();
    //获取token
    const tokenStr = window.sessionStorage.getItem('token')
    if(!tokenStr)return next('/login')
    next()
})
export default router
