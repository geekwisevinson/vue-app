import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Nice from 'components/nice/Nice';
import Home from 'components/pages/home/home';
import Signup from 'components/pages/signup/signup';
import Login from 'components/pages/login/login';

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  mode:'history',
  base: __dirname,
  routes:[
    {path:'/nice', component: Nice},
    {name: 'home', path:'/', component: Home},
    {name: 'sign_up', path:'/sign_up', component: Signup},
    {name: 'login', path:'/login', component: Login}
  ]
});

new Vue({
  el: "#app",
  router,
  render: h=>h(App)
});

