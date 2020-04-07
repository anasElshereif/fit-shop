import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Home from './components/home/home.vue';
import ProductDetails from './components/product-details/product-details.vue';
Vue.use(VueRouter);
var routes =  [
  {path:'/',component:Home,name:'home'},
  {path:'/product_details/:id',component:ProductDetails,name:'product details'},
]
var router = new VueRouter({
  routes:routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})




