<template>
  <div :class="$style.container"><slot /></div>
</template>

<style lang="stylus" module>
  @require '~assets/util'

  .container
    box-sizing content-box
    margin 0 auto
    max-width desktop
    width 100%
    +below(tablet)
      padding 0 mobile-padding
    +above(tablet)
      padding 0 tablet-padding
    +above(desktop)
      padding-left tablet-padding + logo-size + tablet-padding
</style>
