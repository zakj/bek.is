<template>
  <div :class="{[$style.open]: open}">
    <div :class="$style.overlay">
      <Container :class="$style.nav">
        <a v-for="({name, label}) in navSections"
          :class="{[$style.link]: true, [$style.current]: currentNav === name}"
          @click="open = false"
          :href="`#${name}`" v-scroll-to="`#${name}`">{{label}}</a>
      </Container>
    </div>
    <Container :class="$style.logoToggle">
      <div :class="$style.logo"></div>
      <div :class="$style.toggle" @click="open = !open"></div>
    </Container>
  </div>
</template>

<style lang="stylus" module>
  @require '~assets/util'

  .nav, .overlay
    display none
    .open &
      display block

  .overlay
    background salmon-color
    bottom 0
    left 0
    position fixed
    right 0
    top 0

  // Including .overlay for overriding .container padding. :/
  .overlay .nav
    nav-padding()
    // Correct for differing line-heights.
    +below(tablet)
      margin-top -6px
    +above(tablet)
      margin-top -8px

  // .logo/.toggle are fixed, but positioned relative to the page container. We
  // absolutely position them inside a relative parent and create a child
  // element for each that is fixed but with no top/left/etc specified.
  .logo-toggle
    padding-bottom 0
    position relative
  .logo, .toggle
    position absolute
    +below(tablet)
      top mobile-padding
    +between(tablet, desktop)
      top tablet-padding
    +above(desktop)
      top nav-padding-size(desktop-padding) + 8px
    &:after
      position fixed

  .logo:after
    // XXX placeholder
    background black
    border-radius logo-size
    content ""
    display block
    height logo-size
    width logo-size

  .toggle:after
    display block
    content "☰"
  .open .toggle:after
    content "✖"

  .logo
    +below(tablet)
      left mobile-padding
    +above(tablet)
      left tablet-padding

  .toggle
    width 15px  // XXX placeholder
    +below(tablet)
      right mobile-padding
    +above(tablet)
      right tablet-padding

  .link
    text-h1()
    color text-color
    display block
    +below(tablet)
      line-height 48px
    +above(tablet)
      line-height 80px
</style>

<script>
import {mapState} from 'vuex';
import Container from '~/components/Container.vue';

export default {
  components: {Container},
  computed: mapState(['currentNav', 'navSections']),

  data: () => ({
    open: false,
  }),
};
</script>
