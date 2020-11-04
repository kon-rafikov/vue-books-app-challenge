<template>
  <div class="container top-books">
    <h1>{{ title }}</h1>
    <div class="books-list" v-if="fetchedData.length > 1">
      <div v-for="book in fetchedData" :key="book.slug"
           class="col col-4 col-m-12 col-xs-12">
        <div class="book">
          <router-link
              class="book__cover"
              v-bind:to="'/' + book.slug"
              :title="book.title"
              :style="{ backgroundImage: `url(${book.cover})` }">
          </router-link>

          <div class="book__info">
            <h3 class="title">
              <router-link
                  v-bind:to="'/' + book.slug"
              >
                {{ book.title }}
              </router-link>

              <span class="rating">({{ book.rating }}/10)</span>
            </h3>
            <div class="author">{{ book.author }}</div>
            <div class="synopsis">{{ truncateString(book.synopsis, 200) }}</div>

            <div class="book__actions">
              <app-button>Upvote</app-button>
              <span class="counter">Upvoted {{ book.upvotes }} times</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AppButton from "@/components/ui/app-button/app-button";

export default {
  name: 'BooksList',
  components: {AppButton},
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
  methods: {
    truncateString(str, limit) {
      if (str.length <= limit) {
        return str
      }
      return str.slice(0, limit) + '...'
    }
  },
  created() {
    console.log(this.fetchedData.length);
    const baseUrl = window.currentBuild.baseUrl;

    axios
        .get(`${baseUrl}books`)
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
