<template>
  <div class="container">
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'BookPage',
    props: {
      name: {
        type: String,
        default: 'Book Page'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
