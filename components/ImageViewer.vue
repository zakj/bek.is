<template>
  <div :class="$style.imageViewer">
    <!-- TODO: alt, nopin -->
    <img
      v-for="(image, index) in images"
      :class="{[$style.current]: index == currentIndex}"
      :src="ready ? image.src : null"
      :alt="image.alt"
    >
  </div>
</template>

<style lang="stylus" module>
  @require '~assets/util'

  .image-viewer
    position relative
    size-ratio(16, 9)
    +below(tablet)
      margin 1.5em (mobile-padding * -1)
    +above(tablet)
      margin 2em 0

  .image-viewer img
    opacity 0
    pointer-events none
    position absolute
    top 0
    transition opacity 1s ease-in
    width 100%
    &.current
      opacity 1
</style>

<script>
export default {
  data: () => ({
    currentIndex: 0,
    intervalId: null,
  }),

  methods: {
    incrementIndex() {
      let nextIndex = this.currentIndex + 1;
      if (this.currentIndex >= this.images.length - 1) {
        nextIndex = 0;
      }
      this.currentIndex = nextIndex;
    },
  },

  mounted() {
    if (this.images.length > 1) {
      this.intervalId = setInterval(this.incrementIndex, this.interval);
    }
  },

  destroyed() {
    clearInterval(this.intervalId);
  },

  props: {
    images: {
      required: true,
      type: Array,
    },
    interval: {
      default: 3000,
      type: Number,
    },
  },
};
</script>
