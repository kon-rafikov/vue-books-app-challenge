<template>
  <div class="container error-page">
    <div class="col col-12 error-page__title">
      404
    </div>
    <div class="col col-12 error-page__description">
      This page doesn't exist
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ErrorPage',
    mounted() {
      this.$parent.isLoading = false;
    }
  }
</script>

<style lang="scss" scoped>
  @import "error-page";
</style>
