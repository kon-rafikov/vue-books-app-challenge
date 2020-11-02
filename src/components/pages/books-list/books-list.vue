<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <div class="books-list" v-if="fetchedData.length > 1">
      <div v-for="book in fetchedData" :key="book.slug"
           class="col col-4 col-m-6 col-xs-12">
        <div class="book">
            <div class="book-cover">
              <router-link
                  v-bind:to="'/' + book.slug"
              >
                <img :scr="book.cover" :alt="book.title">
              </router-link>
            </div>
            <div class="book-info">
              <div class="title">
                <router-link
                    v-bind:to="'/' + book.slug"
                >
                  {{book.title}}
                </router-link>
              </div>
              <div class="author">{{book.author}}</div>
              <div class="synopsis">{{book.synopsis}}</div>

              <div class="book-actions">
                <button>Vote</button>
                <span class="rating">{{book.rating}}</span>
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
        default: 'Books List'
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
      const self = this;
      axios
        .get('http://localhost:3000/books')
        .then(function( response){
          this.fetchedData = response.data.books;
          return this.fetchedData;
        }).then(function(response){
          if (response === 200) {
            self.$emit('loading', {isLoading: false});
            console.log('hi');
          }
        })
        .catch(function (error) {
          console.warn(error);
          self.$emit('loading', {isLoading: true});
          console.log('bye');
        });
    }
  }
</script>

<style lang="scss" scoped>
  @import "books-list";
</style>
