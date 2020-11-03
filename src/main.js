import {createApp} from "vue";
import App from "./App.vue";
import VueRouter from 'vue-router'
import BooksList from './components/pages/books-list/books-list.vue'
import BookPage from './components/pages/book-page/book-page.vue'

// App.use(VueRouter);

const routes = [
  {
    path: '/',
    component: BooksList,
  },
  {
    path: '/:id',
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

const app = createApp(
  App,
  {
    router,
    components: {
      BooksList,
      BookPage
    },
  });

app.config = {
  productionTip: false
};

app.mount("#app");

