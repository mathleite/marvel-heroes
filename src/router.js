import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import { getRouteByName } from './utils/constants';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: getRouteByName.HOME,
      component: Home,
    },
    {
      path: '/heroes-grid',
      name: getRouteByName.HEROES_GRID,
      component: () => import('./views/Heroes.vue'),
    },
  ],
});
