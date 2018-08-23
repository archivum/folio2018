import Vue from 'vue';
import Router from 'vue-router'

import Home from '../views/Home'
import PageOne from '../views/PageOne'
import PageTwo from '../views/PageTwo'

Vue.use(Router)

export default new Router({
  routes: [
  {
    path: '/',
    component: Home,
    template: Home
  },
  {
    path: '/one',
    component: PageOne,
    template: PageOne
  },
  {
    path: '/two',
    component: PageTwo,
    template: PageTwo
  }
  ]
})
