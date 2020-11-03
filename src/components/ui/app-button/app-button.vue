<template>
  <button :disabled="isDisabled">
    <slot></slot>
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
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "app-button";
</style>
