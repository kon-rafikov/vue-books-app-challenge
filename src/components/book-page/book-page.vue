<template>
  <div class="container">
    <h1>{{ fetchedData.title }}</h1>
    {{ fetchedData.author }}
    {{ fetchedData.cover }}
    {{ fetchedData.rating }}

    <article>
      {{ fetchedData.synopsis }}
    </article>

    {{ fetchedData.upvoted }}
    {{ fetchedData.upvotes }}
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
      apiData: {
        type: Array,
        default: null
      },
      query: String,
    },
    data: function() {
      return {
        fetchedData: {
          type: Array,
          default: 'Loading...'
        }
      }
    },
    created() {
      const queryStr = 'http://localhost:3000/books/' + this.query;
      console.log(queryStr);

      axios
        .get(queryStr)
        .then(
          response => (this.fetchedData = response.data)
        )
        .catch(function (error) {
          console.warn(error);
        });
    },
  }
</script>

<style lang="scss" scoped>
  @import "book-page.scss";
</style>
