<template>
  <div :class="$style.container">
    <div :class="$style.left"><slot name="left"></slot></div>
    <div :class="$style.right"><slot name="right"></slot></div>
  </div>
</template>

<style lang="stylus" module>
  @require '~assets/util'

  .container
    display flex
    +below(tablet)
      margin-left mobile-padding * -1
      margin-right mobile-padding * -1
    img
      display block

  .left, .right
    flex auto
    width 50%

  .right
    direction rtl
</style>
