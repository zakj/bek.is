<template>
  <div :class="{[$style.open]: open}">
    <div :class="$style.overlay">
      <Container :class="$style.nav">
        <a v-for="({name, label}) in mainSections"
          :class="{[$style.link]: true, [$style.current]: currentNav === name}"
          @click="open = false"
          :href="`#${name}`" v-scroll-to="`#${name}`">{{label}}</a>
        <div :class="$style.contact">
          <p>
            <a href="mailto:findbek@gmail.com">Email</a>
            <span>·</span>
            <a href="https://www.linkedin.com/in/bekstone/">LinkedIn</a>
            <span>·</span>
            <a href="https://www.instagram.com/saintbek/">@saintbek</a>
          </p>
          <p>
            Site magic by <a href="https://zakj.net/">@zakj</a>
          </p>
        </div>
      </Container>
    </div>
    <Container :class="$style.logoToggle">
        <a :class="$style.logo" @click="open = false"
          :href="`#${topSection ? topSection.name : 'top'}`"
          v-scroll-to="topSection ? `#${topSection.name}` : `body`">
          <transition appear v-on:enter="bloop"><div></div></transition>
        </a>
        <a :class="$style.toggle" @click="open = !open" v-if="!loading">
          <transition appear v-on:enter="fadeIn"><div>{{ open ? `✖` : `☰` }}</div></transition>
        </a>
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
      margin-top -5px
    +above(tablet)
      margin-top -6px

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
    div
      position fixed

  .logo div
    // XXX placeholder
    background black
    border-radius logo-size
    content ""
    display block
    height logo-size
    transform scale(0)
    width logo-size

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
      line-height 54px
    +above(tablet)
      line-height 80px

  .nav a:hover
    color text-color

  .contact
    text-small()
    span
      margin 0 1em
    +below(tablet)
      margin-top 24px
    +above(tablet)
      margin-top 48px
</style>

<script>
import anime from 'animejs';
import {mapState} from 'vuex';
import Container from '~/components/Container.vue';

export default {
  components: {Container},

  computed: {
    mainSections() {
      return this.navSections.filter(x => !x.isTop);
    },
    topSection() {
      return this.navSections.find(x => x.isTop);
    },
    ...mapState(['currentNav', 'navSections', 'loading']),
  },

  data: () => ({
    open: false,
  }),

  methods: {
    bloop(el, done) {
      anime({
        targets: el,
        scale: [0, 1],
        complete: done,
        delay: 400,
        duration: 900,
      });
    },

    fadeIn(el, done) {
      anime({
        targets: el,
        opacity: [0, 1],
        complete: done,
        delay: 400,
        duration: 500,
      });
    },
  },
};
</script>
