import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/main',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/main',
        name: 'main',
        component: function () {
           return import(/* webpackChunkName: "Main" */ '../views/Main.vue')
        },
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach( async (to, from, next) => {
  if (to.name!='main') {
    return next('/');
  }
  return next(true);
});

export default router;
