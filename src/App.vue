<template>
  <div id="app">
    <spinner
        @loading="isAppLoading"
        v-show="isLoaded"
    ></spinner>
    <div class="top-actions">
      <router-link to="/">Logo</router-link>
    </div>
    <div class="main">
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Spinner from "@/components/ui/spinner/spinner";

  export default {
    name: 'App',
    components: {Spinner},
    data: function() {
      return {
        isLoaded: false
      }
    },
    methods: {
      isAppLoading() {
        console.log('hello event');
      }
    },
    mounted() {
      console.log(this.isLoaded);
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
