<template>
  <div class="container">
    <template v-if="fetchedData.length !== 0">
      <h1>{{ fetchedData.title }}</h1>
      {{ fetchedData.author }}
      {{ fetchedData.cover }}
      {{ fetchedData.rating }}

      <article>
        {{ fetchedData.synopsis }}
      </article>

      {{ fetchedData.upvoted }}
      {{ fetchedData.upvotes }}

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
