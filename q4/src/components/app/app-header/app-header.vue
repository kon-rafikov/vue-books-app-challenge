<template>
  <header class="top-actions">
    <div class="container">
      <router-link class="top-actions__logo" to="/">
        Logo
      </router-link>

      <nav class="top-actions__menu">
        <ul>
          <li>
            <router-link to="/index">Home</router-link>
          </li>
          <li>
            <router-link to="/just-added">Just added</router-link>
          </li>
          <li>
            <router-link to="/">Top books</router-link>
          </li>
          <li>
            <router-link to="/upcoming">Upcoming</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>
<style lang="scss" scoped>
@import "app-header";
</style>
