<template>
  <div class="top-books">
    <h1>{{ title }}</h1>
    <div class="books-list" v-if="fetchedData.length > 1">
      <div v-for="book in fetchedData" :key="book.slug"
           class="col col-4 col-m-12 col-xs-12">
        <div class="book">
          <router-link
              class="book-cover"
              v-bind:to="'/' + book.slug"
              :title="book.title"
              :style="{ backgroundImage: `url(${book.cover})` }">
          </router-link>

          <div class="book-info">
            <div class="title">
              <router-link
                  v-bind:to="'/' + book.slug"
              >
                {{ book.title }}
              </router-link>
            </div>
            <div class="author">{{ book.author }}</div>
            <div class="synopsis">{{ book.synopsis }}</div>

            <div class="book-actions">
              <button>Vote</button>
              <span class="rating">{{ book.rating }}</span>
            </div>
          </div>
        </div>
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
      default: 'Top books of all time'
    }
  },
  data: function () {
    return {
      fetchedData: {
        type: Array,
        default: null
      },
    }
  },
  created() {
    const baseUrl = window.currentBuild.baseUrl;

    axios
        .get(baseUrl + 'books')
        .then(
            response => {
              this.fetchedData = response.data.books;
              this.$parent.isLoading = false;
              // TODO: migrate to v.3 and replace it with a custom event emitting
              // this.$emit('loading', {isLoading: false})
            })
        .catch(error => {
          // TODO: this error message output is not for production
          if (error.response) {
            // client received an error response
            console.warn(this.$options.name, error.response);
          } else if (error.request) {
            // client didn't receive a response, or request never left
            console.warn(this.$options.name, error.request);
          } else {
            // anything else
            console.warn(this.$options.name, error);
          }
        })
  }
}
</script>

<style lang="scss" scoped>
@import "books-list";
</style>
