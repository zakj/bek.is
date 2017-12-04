<template>
  <div :class="$style.container"><slot /></div>
</template>

<style lang="stylus" module>
  @require '~assets/util'

  .container
    box-sizing content-box
    margin 0 auto
    max-width desktop
    +below(tablet)
      padding 0 mobile-padding
    +above(tablet)
      padding 0 tablet-padding
      width 100%
    +above(desktop)
      padding-left tablet-padding + logo-size + tablet-padding
</style>
