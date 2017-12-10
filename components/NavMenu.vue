<template>
  <div :class="{[$style.open]: open}">
    <div :class="$style.overlay" ref="overlay">
      <Container :class="$style.nav">
        <a v-for="({name, label}) in mainSections"
          :class="$style.link"
          @click="open = false"
          :href="`#${name}`" v-scroll-to="`#${name}`">{{label}}</a>
        <Contact :class="$style.contact" />
      </Container>
    </div>
    <Container :class="$style.logoToggle">
      <a :class="$style.logo" @click="open = false"
        :href="`#${topSection ? topSection.name : 'top'}`"
        v-scroll-to="topSection ? `#${topSection.name}` : `body`">
        <transition appear v-on:enter="bloopDelay">
          <MarkIcon :class="{[$style.filled]: !splashVisible}" />
        </transition>
      </a>
      <a :class="$style.toggle" @click="open = !open" v-if="!splashVisible">
        <transition appear v-on:enter="bloop">
          <MenuIcon ref="menu" />
        </transition>
      </a>
    </Container>
  </div>
</template>

<style lang="stylus" module>
  @require '~assets/util'

  .overlay
    background salmon-color
    bottom 0
    display none
    left 0
    position fixed
    right 0
    top 0
    .open &
      display block
      overflow-y scroll
      padding-bottom 80px

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
      height logo-size
      overflow visible
      transform scale(0)
      width logo-size
      &.filled :global #mark-background
        fill bg-color
        .open &
          fill salmon-color
      :global #mark-highlight
        transform-origin center
        transition transform 100ms ease-in
      &:hover :global #mark-highlight
        transform scale(1.1)

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

  // Including .overlay for overriding .container padding. :/
  .overlay .nav
    nav-padding()
    align-items flex-start
    display flex
    flex-direction column

    // Override link hover colors.
    a:not(.link)
      underline(text-color, text-color)
    a:hover
      color text-color

    // Correct for differing line-heights between nav and main.
    +below(tablet)
      margin-top -5px
    +above(tablet)
      margin-top -6px

  .link
    text-h1()
    color text-color
    min-width 50%  // bigger click target
    transform-origin left center
    +below(tablet)
      line-height 54px
    +above(tablet)
      line-height 80px

  .contact
    transform-origin center
</style>

<script>
import anime from 'animejs';
import {mapState} from 'vuex';

import Contact from '~/components/Contact.vue';
import Container from '~/components/Container.vue';
import MarkIcon from '~/assets/icons/mark.svg';
import MenuIcon from '~/assets/icons/menu.svg';

function menuToggleAnimation(component) {
  const menuEl = component.$refs.menu.$el;
  const duration = 100;
  const bars = [1, 2, 3].map(i => menuEl.querySelector(`#menu-bar-${i} rect`));

  return anime.timeline({
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
}

function menuItemsAnimation(component) {
  const contactEl = component.$el.querySelectorAll(`.${component.$style.contact}`);
  const linkEl = component.$el.querySelectorAll(`.${component.$style.link}`);

  return anime.timeline()
    .add({
      targets: linkEl,
      opacity: {value: [0, 1], duration: 600},
      scale: {value: [0, 1], duration: 800},
      elasticity: 50,
      delay: (target, index) => index * 100,
    })
    .add({
      targets: contactEl,
      opacity: [0, 1],
      scale: [0.8, 1],
      elasticity: 100,
      duration: 700,
      offset: '-=600',
    });
}

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
    ...mapState(['navSections', 'splashVisible']),
  },

  data: () => ({
    menuToggleAnimation: null,
    menuItemsAnimation: null,
    open: false,
  }),

  methods: {
    bloop(el, done, delay = 0) {
      anime({
        targets: el,
        scale: [0, 1],
        complete: done,
        delay,
        duration: 900,
      });
    },

    bloopDelay(el, done) {
      this.bloop(el, done, 400);
    },
  },

  watch: {
    open() {
      document.body.classList.toggle('nav-open', this.open);

      if (this.menuToggleAnimation) {
        this.menuToggleAnimation.reverse();
        this.menuToggleAnimation.play();
      } else {
        this.menuToggleAnimation = menuToggleAnimation(this);
      }

      if (this.open) {
        requestAnimationFrame(() => {
          this.$refs.overlay.scrollTop = 0;
        });
        if (this.menuItemsAnimation) {
          this.menuItemsAnimation.restart();
          this.menuItemsAnimation.play();
        } else {
          this.menuItemsAnimation = menuItemsAnimation(this);
        }
      }
    },
  },

  destroyed() {
    document.body.classList.remove('nav-open');
  },
};
</script>
