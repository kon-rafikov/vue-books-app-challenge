<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <div
        v-for="book in apiData" :key="book.slug"
        class="book"
    >
      <div class="book__cover">
        <img :scr="book.cover" :alt="book.title">
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
  import axios from "axios";

  export default {
    name: 'BooksList',
    props: {
      title: {
        type: String,
        default: 'Books List'
      }
    },
    data: function() {
      return {
        apiData: {
          type: Array,
          default: null
        },
      }
    },
    created() {
      axios
        .get('http://localhost:3000/books')
        .then(
          response => (this.apiData = response.data.books)
        )
        .catch(function (error) {
          console.warn(error);
        });
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
