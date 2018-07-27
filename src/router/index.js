import Vue from 'vue'
import Router from 'vue-router'

import Landing from '../views/Landing'
import PageOne from '../views/PageOne'
import PageTwo from '../views/PageTwo'

Vue.use(Router)

export default new Router({
  routes: [
  {
    path: '/',
    component: Landing,
    template: Landing
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
