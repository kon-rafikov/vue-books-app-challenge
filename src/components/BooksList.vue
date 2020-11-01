<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <div
        v-for="book in apiData" :key="book.author"
        class="book"
    >
      <div class="book__cover">
        <img scr="" alt="">
      </div>
      <div class="book__info">
        <div class="title">
          <router-link
              v-bind:to="'/' + book.slug"
              >
            {{book.title}}
          </router-link>

        </div>
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
      apiData: {
        type: Array,
        default: null
      },
      title: {
        type: String,
        default: 'Books List'
      }
    },
    mounted() {
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
