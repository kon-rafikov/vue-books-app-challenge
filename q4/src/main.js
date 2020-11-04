import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import BooksList from './components/pages/books-list/books-list.vue'
import BookPage from './components/pages/book-page/book-page.vue'
import ErrorPage from './components/pages/error-page/error-page.vue'

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { path: '/',
    component: BooksList,
  },
  {
    path: '*',
    component: ErrorPage,
  },
  { path: '/book/:id',
    component: BookPage,
    props:
      route => ({
      query: route.params.id,
    })
  },
];

const router = new VueRouter({
  routes,
});

window.BuildEnv = {
  production: {
    baseUrl: ''
  },
  development: {
    baseUrl: 'http://localhost:3000/'
  }
};

window.currentBuild = window.BuildEnv.development;

new Vue({
  router,
  components: {
    BooksList,
    BookPage,
  },
  render: h => h(App),
}).$mount('#app');

