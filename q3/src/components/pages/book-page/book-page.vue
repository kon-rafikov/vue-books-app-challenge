<template>
  <div class="container book-page">
    <template v-if="fetchedData.length !== 0">
      <div class="book-page__header col col-12">
        <div class="header__info col col-8 col-m-8 col-s-8">
          <div class="header__caption">
            <h1 class="title">
              {{ fetchedData.title }}
            </h1>
            <div class="author">
              {{ fetchedData.author }}
            </div>
          </div>
        </div>
        <div class="header__actions col col-4 col-m-4 col-s-4">
          <div class="counter">
            <span class="desktop">Upvoted</span> {{ fetchedData.upvotes }} <span class="desktop">times</span>
          </div>

            <app-button
              class="upvote-button"
              :click="isUpvoted = true"
              :isDisabled="isUpvoted"
            >{{ isUpvoted ? 'Upvoted' : 'Upvote' }}
            </app-button>

        </div>
      </div>

      <div class="book-page__cover col col-12">
        <img :src="fetchedData.cover">
      </div>

      <article class="book-page__synopsis col col-12">
        <h2>Synopsis</h2>

        <p>
        {{ fetchedData.synopsis }}
        </p>
      </article>

      <div class="book-page__rating col col-12">
        Rating: {{ fetchedData.rating }}
      </div>
    </template>
  </div>
</template>

<script>
  import axios from "axios";
  import AppButton from "@/components/ui/app-button/app-button";

  export default {
    name: 'BookPage',
    components: {AppButton},
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
        },
        isUpvoted: {
          type: Boolean,
          default: false
        }
      }
    },
    created() {
      const baseUrl = window.currentBuild.baseUrl;

      axios
        .get(`${baseUrl}books/${this.query}`)
        .then(
          response => {
            this.fetchedData = response.data;
            this.isUpvoted = response.data['upvoted'];
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
