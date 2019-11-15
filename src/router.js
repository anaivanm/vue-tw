import Vue from 'vue';
import Router from 'vue-router';
import Jobs from './views/Jobs.vue';
import Companies from './views/Companies.vue';
import Events from './views/Events.vue';
import ProfileCoffeeTickets from './views/ProfileCoffeeTickets.vue';
import Notifications from './views/Notifications.vue';
import Profile from './views/Profile.vue';
import ProfileSaved from './views/ProfileSaved.vue';
import ProfileSettings from './views/ProfileSettings.vue';


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
    },
    {
      path: '/notifications',
      name: 'notifications',
      component: Notifications
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      children: [
        {
          path: '/saved',
          name: 'saved',
          component: ProfileSaved
        },
        {
          path: '/coffee-tickets',
          name: 'coffee-tickets',
          component: ProfileCoffeeTickets
        },
        {
          path: '/settings',
          name: 'settings',
          component: ProfileSettings
        }
      ]
    }
  ]
})
