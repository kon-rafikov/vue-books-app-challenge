<template>
  <button
    :disabled="isDisabled"
    v-on:click="click"
    class="app-button">
    <span class="app-button__text">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  data: function () {
    return {
      isDisabled: {
        default: false,
        type: Boolean
      },
      click: Function
    }
  }
}
</script>
<style lang="scss" scoped>
@import "app-button";
</style>
