<template>
  <div id="app">
    <div>
      <router-link to="/">Logo</router-link>
    </div>
    <router-view
        :apiData="info"
    ></router-view>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: 'App',
    data: function () {
      return {
        info: null
      };
    },
    methods: {
      apiGetBooksList() {
        if (this.$route.params.id) {
          console.log(this.$route.params.id);
          axios
            .get('http://localhost:3000/books/' + this.$route.params.id)
            .then(
              response => (this.info = response.data.books)
            )
            .catch(function (error) {
              console.warn(error);
            });
        } else {
          axios
            .get('http://localhost:3000/books')
            .then(
              response => (this.info = response.data.books)
            )
            .catch(function (error) {
              console.warn(error);
            });
        }
      },
    },
    created() {
      this.apiGetBooksList();
    },
    watch: {
      // call again the method if the route changes
      '$route': 'apiGetBooksList'
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
