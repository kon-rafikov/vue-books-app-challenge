<template>
  <div id="app">
    <books-list :books="info"></books-list>
  </div>
</template>

<script>
  import axios from "axios";
  import BooksList from './components/BooksList.vue'
  // import BookPage from './components/BookPage.vue'

  export default {
    name: 'App',
    components: {
      BooksList,
    },
    data: function() {
      return {
        info: null
      };
    },
    mounted() {
      axios
        .get('http://localhost:3000/books')
        .then(
          response => (this.info = response.data.books)
        )
        .catch(function (error) {
          console.warn(error);
        });
    },
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
