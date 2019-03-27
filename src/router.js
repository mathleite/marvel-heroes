import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import { routeName } from './utils/constants';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: routeName.HOME,
      component: Home,
    },
    {
      path: '/heroes-grid',
      name: routeName.HEROES_GRID,
      component: () => import('./views/Heroes.vue'),
    },
  ],
});
