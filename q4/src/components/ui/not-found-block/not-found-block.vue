<template>
  <div class="container not-found-block">
    <div class="not-found-block__icon">
      <img src="@/assets/images/icon-thinking.svg">
    </div>
    <div class="not-found-block__description">
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'NotFoundBlock'
}
</script>
<style lang="scss" scoped>
  @import "not-found-block";
</style>
