<template>
  <div :class="$style.container">
    <div
      v-for="(url, index) in images"
      :class="[$style.image, {[$style.current]: index == currentIndex}]"
      :style="{backgroundImage: `url(${url})`}"
      ></div>
  </div>
</template>

<style lang="stylus" module>
  @require '~assets/util'

  .container
    position relative
    +below(tablet)
      margin 0 (mobile-padding * -1)

  .container, .image
    &::before
      content ""
      display block
      padding-top (2/3) * 100%

  .image
    background-position center
    background-size cover
    opacity 0
    position absolute
    top 0
    transition opacity 1s ease-in
    width 100%

  .current
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
      if (this.currentIndex === this.images.length - 1) {
        nextIndex = 0;
      }
      this.currentIndex = nextIndex;
    },
  },

  mounted() {
    this.intervalId = setInterval(this.incrementIndex, this.interval);
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
