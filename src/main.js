import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import BooksList from './components/pages/books-list/books-list.vue'
import BookPage from './components/pages/book-page/book-page.vue'

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { path: '/',
    component: BooksList,
  },
  { path: '/:id',
    component: BookPage,
    props:
      route => ({
      query: route.params.id,
    })
  }
];

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  render: h => h(App),
  router,
  components: {
    BooksList,
    BookPage
  },
}).$mount('#app');

