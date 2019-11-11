import Vue from 'vue'
import Router from 'vue-router'
import Jobs from './views/Jobs.vue'
import Companies from './views/Companies.vue'
import Events from './views/Events.vue'


Vue.use(Router)

export default new Router ({
  routes: [
    {
      path: '/jobs',
      name: 'jobs',
      component: Jobs
    },
    {
      path: '/companies',
      name: 'companies',
      component: Companies
    },
    {
      path: '/events',
      name: 'events',
      component: Events
    }
  ]
})
