<template>
  <div class="container book-page">
    <template v-if="fetchedData.length !== 0">
      <div class="book-page__header col col-12">
        <div class="header__info col col-6">
          <div class="header__caption">
            <h1 class="title">
              {{ fetchedData.title }}
            </h1>
            <div class="author">
              {{ fetchedData.author }}
            </div>
          </div>
        </div>
        <div class="header__actions col col-6">
          <div class="counter">
            {{ fetchedData.upvotes }}
          </div>

          <template v-if="!fetchedData.upvoted">
            <button>
              Upvote
            </button>
          </template>

          <template v-if="fetchedData.upvoted">
            <button disabled>
              Upvoted
            </button>
          </template>
        </div>
      </div>

      <div class="book-page__cover col col-12">
        <img :src="fetchedData.cover">
      </div>

      <article class="book-page__synopsis col col-12">
        {{ fetchedData.synopsis }}
      </article>

      <div class="book-page__rating col col-12">
        {{ fetchedData.rating }}
      </div>
    </template>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: 'BookPage',
    props: {
      title: {
        type: String,
        default: 'Book Page'
      },
      query: String,
    },
    data: function () {
      return {
        fetchedData: {
          type: Array,
          default: 'Loading...'
        }
      }
    },
    created() {
      const baseUrl = window.currentBuild.baseUrl;

      axios
        .get(baseUrl + 'books/' + this.query)
        .then(
          response => {
            this.fetchedData = response.data;
            this.$parent.isLoading = false;
          })
          .catch(error => {
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
    },
  }
</script>

<style lang="scss" scoped>
  @import "book-page";
</style>
