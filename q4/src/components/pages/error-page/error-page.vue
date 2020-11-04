<template>
  <div class="container">
    <not-found-block>
      This page doesn't exist
    </not-found-block>
  </div>
</template>

<script>
  import NotFoundBlock from "@/components/ui/not-found-block/not-found-block";
  export default {
    name: 'ErrorPage',
    components: {NotFoundBlock},
    mounted() {
      this.$parent.isLoading = false;
    }
  }
</script>

