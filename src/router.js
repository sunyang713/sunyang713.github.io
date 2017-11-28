import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const routes = [{
  path: '/',
  name: 'Home',
  component: resolve => require(['pages/Home'], resolve),
  showInNav: true
}, {
  path: '*',
  component: resolve => require(['pages/NotFound'], resolve),
  showInNav: false
}]

export default new VueRouter({
  mode: 'history',
  base: process.env.PUBLIC_PATH,
  linkActiveClass: 'is-active', // for is-active
  scrollBehavior: (to, from, savedPosition) => savedPosition || { x: 0, y: 0 },
  routes
})
