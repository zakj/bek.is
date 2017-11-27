<template>
  <div :class="{[$style.open]: open}">
    <nav :class="$style.nav">
      <div :class="$style.spacer"></div>
      <a v-for="({name, label}) in navSections"
        :class="{[$style.link]: true, [$style.current]: currentNav === name}"
        @click="open = false"
        :href="`#${name}`" v-scroll-to="`#${name}`">{{label}}</a>
    </nav>
    <div :class="$style.logo"></div>
    <div :class="$style.toggle" @click="open = !open"></div>
  </div>
</template>

<style lang="stylus" module>
  @require '~assets/util'

  +max-width(1024px - 1px)
    // XXX placeholder
    .toggle
      position fixed
      right 24px
      top 24px
      &:after
        display block
        content "☰"
    .open .toggle:after
      content "✖"

    .close
      // XXX placeholder
      position absolute
      top 24px
      right 24px
      &:before
        display block

    .nav
      background salmon-color
      bottom 0
      display none
      left 0
      padding 24px
      padding-top 24px + 48px + 56px
      position fixed
      right 0
      top 0

    .open .nav
      display block

    .logo
      // XXX placeholder
      background black
      border-radius 56px
      height 56px
      width 56px
      position fixed
      top 24px
      left 24px

    .link
      text-h1()
      color text-color
      display block
      line-height 48px

  +min-width(1024px)
    .toggle
      display none
</style>

<script>
import {mapState} from 'vuex';

export default {
  computed: mapState(['currentNav', 'navSections']),

  data: () => ({
    open: false,
  }),
};
</script>
