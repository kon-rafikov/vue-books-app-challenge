<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <article>
      id: {{ query }}
    </article>
  </div>
</template>

<script>
  export default {
    name: 'BookPage',
    props: {
      title: {
        type: String,
        default: 'Book Page'
      },
      apiData: {
        type: Array,
        default: null
      },
      query: String,
    },
    created() {

    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
