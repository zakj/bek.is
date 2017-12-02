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
      margin-top 100px  // XXX this doesn't belong here
      margin-left mobile-padding * -1
      margin-right mobile-padding * -1
    +above(tablet)
      margin-top 180px  // XXX this doesn't belong here
    img
      display block

  .left, .right
    flex auto
    width 50%

  .right
    direction rtl
</style>
