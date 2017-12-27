<template>
  <div
    :class="[$style.moodImage, $style[orientation], $style[size]]"
    :style="{
      transform: `translateY(${deltaY}px)`,
      marginTop: `${offset}%`,
    }"
  >
    <img
      :src="ready ? src : transparentImage"
      :alt="alt"
      :nopin="nopin ? 'nopin' : null"
    >
  </div>
</template>

<style lang="stylus" module>
  @require '~assets/util'

  .moodImage
    position relative

  .moodImage img
    position absolute
    top 0
    width 100%

  .portrait.large
    size-ratio(3, 4)
    width 110%
  .landscape.large
    size-ratio(4, 3)
    width 130%
  .portrait.small
    size-ratio(2, 3)
    width 50%
  .landscape.small
    size-ratio(3, 2)
    width 90%
</style>

<script>
import {mapState} from 'vuex';

export default {
  computed: {
    isIPhone() {
      return /iPhone/.test(navigator.userAgent);
    },

    ...mapState(['loading', 'scrollY', 'transparentImage']),
  },

  data: () => ({
    animationFrameId: null,
    deltaY: 0,
  }),

  watch: {
    loading() {
      requestAnimationFrame(this.scrollCheck);
    },

    scrollY() {
      if (this.scrollAt !== 1) {
        cancelAnimationFrame(this.animationFrameId);
        this.animationFrameId = requestAnimationFrame(this.scrollCheck);
      }
    },
  },

  mounted() {
    requestAnimationFrame(this.scrollCheck);
  },

  methods: {
    scrollCheck() {
      const {top, height} = this.$el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const elCenter = top + (height / 2);
      const viewportCenter = viewportHeight / 2;
      const actualScrollDistance = elCenter - viewportCenter;
      const perceivedScrollDistance = actualScrollDistance * (1 / this.scrollAt);
      this.deltaY = actualScrollDistance - perceivedScrollDistance;

      // Prevent line artifact on iPhone.
      if (this.isIPhone) this.deltaY = Math.round(this.deltaY);

      // Save some CPU on images outside the viewport.
      const topInViewport = top - Math.abs(this.deltaY) <= viewportHeight;
      const bottomInViewport = top + height + Math.abs(this.deltaY) > 0;
      if (!(topInViewport && bottomInViewport)) this.deltaY = 0;
    },
  },

  props: {
    alt: {
      default: '',
      type: String,
    },
    nopin: {
      default: null,
      type: Boolean,
    },
    offset: {
      default: 0,
      type: Number,
    },
    orientation: {
      default: 'portrait',
      type: String,
    },
    scrollAt: {
      default: 1,
      type: Number,
    },
    size: {
      default: 'large',
      type: String,
    },
    src: {
      required: true,
      type: String,
    },
  },
};
</script>
