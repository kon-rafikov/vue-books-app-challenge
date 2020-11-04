<template>
  <div id="app">
    <spinner
        v-show="isLoading"
    ></spinner>
    <app-header></app-header>
    <div class="main">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Spinner from "@/components/ui/spinner/spinner";
  import AppHeader from "@/components/app/app-header/app-header";
  import AppFooter from "@/components/app/app-footer/app-footer";

  export default {
    name: 'App',
    components: {AppFooter, AppHeader, Spinner},
    data: function() {
      return {
        isLoading: {
          type: Boolean,
          default: false
        }
      }
    }
  }
</script >

<style lang="scss">
  // Transitions
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .15s ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }

  // this part is global
  @import "assets/styles/style";

  // this part is scoped
  @import "components/app/app.scss";
</style>
