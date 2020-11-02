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
      const queryStr = 'http://localhost:3000/books/' + this.query;
      const self = this;
      axios
        .get(queryStr)
        .then(
          response => (this.fetchedData = response.data),
          self.$emit('loading', {isLoading: false})
        )
        .catch(function (error) {
          console.warn(error);
          self.$emit('loading', {isLoading: true});
        });
    },
  }
</script>

<style lang="scss" scoped>
  @import "book-page";
</style>
