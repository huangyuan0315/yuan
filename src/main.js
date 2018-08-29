import Vue from 'vue';
import App from './App';
import router from './router/main';
import globalVar from './config/globalVariable';
import './config';

new Vue({
  el: '#app',
  globalVar,
  router,
  components: { App },
  template: '<App/>'
});
// router.beforeEach((to, from, next) => {
//   console.log(to);
//   next();
// });
