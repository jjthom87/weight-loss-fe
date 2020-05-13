import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';

import Home from './components/Home.vue';
import Login from './components/SignIn.vue';
import Register from './components/SignUp.vue';

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login},
    { path: '/register', component: Register}
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
