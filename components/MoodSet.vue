<template>
  <div :class="$style.moodSet">
    <div :class="$style.left"><slot name="left"></slot></div>
    <div :class="$style.right"><slot name="right"></slot></div>
  </div>
</template>

<style lang="stylus" module>
  @require '~assets/util'

  .mood-set
    display flex
    +below(tablet)
      margin 1.5em mobile-padding * -1
    +above(tablet)
      margin 2em 0
    img
      display block

  .left, .right
    flex auto
    width 50%

  .right
    direction rtl
</style>
