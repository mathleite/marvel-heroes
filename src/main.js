import Vue from 'vue';
import './plugins/vuetify';
import VueI18n from 'vue-i18n';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

const messages = require('./translations/pt_BR.js');

Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: 'pt_BR',
  messages,
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
