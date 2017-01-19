import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';
import Nice from 'components/nice/Nice';
import Hello from 'components/Hello';
Vue.use(VueRouter);

const router = new VueRouter({
  mode:'history',
  base: __dirname,
  routes:[
    {path:'/', component: Nice},
    {path:'/hello', component: Hello}
  ]
});

new Vue({
  router,
  template: `
    <div id="app">
        <ul>
            <li > <router-link  to="/">Nice</router-link></li>
            <li > <router-link  to="/hello">Hello</router-link></li>
        </ul>
        <router-view></router-view>
    </div>`,
}).$mount('#app');
