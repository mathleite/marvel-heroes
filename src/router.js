import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [];
const routeLoader = require.context('./views', true, /\.route.js$/);
routeLoader.keys().forEach((routeFile) => {
  const route = routeLoader(routeFile).default;
  routes.push(route);
});

export default new Router({
  routes,
  mode: 'history',
  base: process.env.BASE_URL,
});
