<template>
  <div class="container">
    <h1>{{ name }}</h1>
    <div
        v-for="book in books" :key="book.author"
        class="book"
    >
      <div class="book__cover">
        <img scr="" alt="">
      </div>
      <div class="book__info">
        <div class="title">{{book.title}}</div>
        <div class="author">{{book.author}}</div>
        <div class="synopsis">{{book.synopsis}}</div>
      </div>
      <div class="book__actions">
        <button>Vote</button>
        <span class="rating">{{book.rating}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BooksList',
    props: {
      books: {
        type: Array,
        default: null
      },
      name: {
        type: String,
        default: 'Books List'
      },
      methods: {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
