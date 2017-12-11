<template>
  <div :class="$style.framedVideo">
    <video loop muted playsinline :src="src" ref="video"
      v-in-view:enter="play" v-in-view:exit="pause" />
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
      this.$refs.video.pause();
    },

    play() {
      this.$refs.video.play();
    },
  },

  props: {
    src: {
      type: String,
      required: true,
    },
  },
};
</script>
