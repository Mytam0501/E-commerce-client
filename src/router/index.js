import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Shop from '../views/Shop.vue';
import PrivacyPolicy from '../views/pages/PrivacyPolicy.vue';
import AboutUs from '../views/pages/AboutUs.vue';
import Contact from '../views/pages/Contact.vue';
import Register from '../views/account/Register.vue';
import Login from '../views/account/Login.vue';
import DetailProduct from '../views/DetailProduct.vue';
import Blog from '../views/Blog.vue';
import DetailBlog from '../views/DetailBlog.vue';
import OurTeam from '../views/pages/OurTeam.vue';
import Wishlist from '../views/Wishlist.vue';
import Store from '../views/Store.vue';
import Mega from '../views/Mega.vue';
import Cart from '../views/Cart.vue';



Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/shop', name: 'Shop', component: Shop },
  { path: '/mega', name: 'Mega', component: Mega },
  { path: '/privacy-policy', name: 'Privace', component: PrivacyPolicy },
  { path: '/page/about-us', name: 'AboutUs', component: AboutUs },
  { path: '/page/our-team', name: 'OurTeam', component: OurTeam },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/account/register', name: 'Register', component: Register },
  { path: '/account/login', name: 'Login', component: Login },
  { path: '/shop/:slug', name: 'DetailProduct', component: DetailProduct },
  { path: '/blog', name: 'Blog', component: Blog },
  { path: '/blog/:slug', name: 'DetailBlog', component: DetailBlog },
  { path: '/wishlist', name: 'Wishlist', component: Wishlist },
  { path: '/shopping-cart', name: 'Cart', component: Cart },
  { path: '/store/brand/:slug', name: 'Store', component: Store },
  { path: '/store/category/:slug', name: 'Shop', component: Shop },
  { path: '/mega/category/:slug', name: 'Mega', component: Mega },
  { path: '*', redirect: '/' }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});


// router.beforeEach((to, from, next) => {
//   // go to login page if not logged in yet
//   const publicPages = ['/account/login', '/account/register'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');

//   if (authRequired && !loggedIn) {
//     return next('/account/login');
//   }

//   next();
// })


export default router;

