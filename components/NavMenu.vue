<template>
  <div :class="{[$style.open]: open}">
    <div :class="$style.overlay">
      <Container :class="$style.nav">
        <a v-for="({name, label}) in mainSections"
          :class="{[$style.link]: true, [$style.current]: currentNav === name}"
          @click="open = false"
          :href="`#${name}`" v-scroll-to="`#${name}`">{{label}}</a>
        <Contact />
      </Container>
    </div>
    <Container :class="$style.logoToggle">
        <a :class="$style.logo" @click="open = false"
          :href="`#${topSection ? topSection.name : 'top'}`"
          v-scroll-to="topSection ? `#${topSection.name}` : `body`">
          <transition appear v-on:enter="bloop"><MarkIcon /></transition>
        </a>
        <a :class="$style.toggle" @click="open = !open" v-if="!loading">
          <MenuIcon ref="menu" />
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
    -webkit-tap-highlight-color transparent
    +below(tablet)
      top mobile-padding
    +between(tablet, desktop)
      top tablet-padding
    +above(desktop)
      top nav-padding-size(desktop-padding) + 8px
    svg
      position fixed

  .logo
    +below(tablet)
      left mobile-padding
    +above(tablet)
      left tablet-padding
    svg
      background black
      border-radius logo-size
      fill #fff
      height logo-size
      transform scale(0)
      width logo-size
      .open &
        fill salmon-color

  .toggle
    width 20px
    +below(tablet)
      right mobile-padding
    +above(tablet)
      right tablet-padding
    svg
      // A little extra padding for click-target size.
      box-sizing content-box
      margin-left -10px
      padding 10px
      rect
        transform-origin center 10.5px  // Safari/FF treat center differently
      g
        transition transform 100ms ease-in
        transform translateY(0)  // Safari bug
      &:hover
        :global #menu-bar-1
          transform translateY(-1px)
        :global #menu-bar-3
          transform translateY(1px)
      .open &:hover
        :global #menu-bar-1, :global #menu-bar-3
          transform translateY(0)
        rect
          x -1
          width 22px

  .link
    text-h1()
    color text-color
    &::after
      // Break after each element, but don't expand the click area.
      content ""
      display block
    +below(tablet)
      line-height 54px
    +above(tablet)
      line-height 80px

  .nav a:hover
    color text-color
</style>

<script>
import anime from 'animejs';
import {mapState} from 'vuex';

import Contact from '~/components/Contact.vue';
import Container from '~/components/Container.vue';
import MarkIcon from '~/assets/icons/mark.svg';
import MenuIcon from '~/assets/icons/menu.svg';

export default {
  components: {
    Contact,
    Container,
    MarkIcon,
    MenuIcon,
  },

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
    animation: null,
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
  },

  watch: {
    open() {
      document.body.classList.toggle('nav-open', this.open);
      if (this.animation) {
        this.animation.reverse();
        this.animation.play();
        return;
      }

      const menuEl = this.$refs.menu.$el;
      const duration = 100;
      const bars = [1, 2, 3].map(i => menuEl.querySelector(`#menu-bar-${i} rect`));

      this.animation = anime.timeline({
        duration,
        easing: 'easeInQuad',
      })
        .add({
          targets: bars[0],
          y: [4, 9],
          offset: 0,
        })
        .add({
          targets: bars[2],
          y: [14, 9],
          offset: 0,
        })
        .add({
          targets: bars[1],
          duration: 1,
          opacity: [1, 0],
          offset: '-=0',
        })
        .add({
          targets: bars[0],
          y: 9,
          rotateZ: [0, '45deg'],
          offset: duration * 1.5,
        })
        .add({
          targets: bars[2],
          y: 9,
          rotateZ: [0, '-45deg'],
          offset: duration * 1.5,
        });
    },
  },
};
</script>
