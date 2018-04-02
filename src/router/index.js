import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/indexPage'
import TechnologyPage from '@/components/technologyPage'
import WebPage from '@/components/webPage'
import AboutusPage from '@/components/aboutusPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/indexPage',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/technologyPage',
      name: 'TechnologyPage',
      component: TechnologyPage
    },
    {
      path: '/webPage',
      name: 'WebPage',
      component: WebPage
    },
    {
      path: '/aboutusPage',
      name: 'AboutusPage',
      component: AboutusPage
    }
  ]
})
