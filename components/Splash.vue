<template>
  <svg viewBox="0 0 100 100" preserveAspectRatio="none"
    :class="$style.splash" v-if="splashVisible">
    <polygon ref="svg" points="0,0 100,0 100,0 0,0" />
  </svg>
</template>

<style lang="stylus" module>
  @require '~assets/util'

  .splash
    fill salmon-color
    height 101vh
    left 0
    position fixed
    top 0
    width 101vw
</style>

<script>
import {mapMutations, mapState} from 'vuex';
import anime from 'animejs';

export default {
  computed: mapState(['splashVisible']),
  methods: mapMutations(['finishLoading', 'hideSplash']),

  mounted() {
    anime.timeline({
      targets: this.$refs.svg,
      easing: 'easeInQuad',
      duration: 1000,
    })
      .add({
        points: [
          {value: '0,  0  100,  5  100,0 0,0'},
          {value: '0, 22  100,  5  100,0 0,0'},
          {value: '0, 25  100, 50  100,0 0,0'},
          {value: '0, 85  100, 65  100,0 0,0'},
          {value: '0,100  100,100  100,0 0,0'},
          {value: '0,100  100,100  100,0 0,0'},
        ],
        complete: this.finishLoading,
      })
      .add({
        points: [
          // {value: '0,0  100,0  100,0 0,0'},  // swipe up
          // {value: '0,100  100,100  100,100 0,100'},  // swipe down
          {value: '0,100  100,100  100,15 0,0'},
          {value: '0,100  100,100  100,15 0,40'},
          {value: '0,100  100,100  100,50 0,48'},
          {value: '0,100  100,100  100,100 0,100'},
        ],
        complete: this.hideSplash,
      });
  },
};
</script>
