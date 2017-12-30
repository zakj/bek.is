<template>
  <div :class="$style.framedVideo">
    <video
      loop muted playsinline ref="video"
      :src="ready ? src : null"
      :poster="poster"
      v-in-view:enter="play" v-in-view:exit="pause"
    >
    </video>
  </div>
</template>

<style lang="stylus" module>
  @require '~assets/util'

  .framed-video
    background-image url(/VideoFrame.png)
    background-size contain
    position relative
    size-ratio(16, 9)

  .framed-video video
    bottom 7.5%
    left 11.15%
    position absolute
    right 11.15%
    top 11.4%
    width 100% - @left - @right
</style>

<script>
export default {
  methods: {
    pause() {
      try {
        if (this.ready) this.$refs.video.pause();
      } catch (e) {
        console.warn('Failed to pause video', e);
        // no-op
      }
    },

    play() {
      try {
        if (this.ready) this.$refs.video.play();
      } catch (e) {
        console.warn('Failed to play video', e);
        // no-op
      }
    },
  },

  props: {
    poster: {
      type: String,
      default: null,
    },
    src: {
      type: String,
      required: true,
    },
  },
};
</script>
