<template>
  <svg :class="$style.splash" viewBox="0 0 100 100" preserveAspectRatio="none">
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
  import anime from 'animejs';

  export default {
    mounted() {
      anime({
        targets: this.$refs.svg,
        duration: 2000,
        easing: 'easeInQuad',
        points: [
          {value: '0, 18  100,  5  100,0 0,0'},
          {value: '0, 20  100, 50  100,0 0,0'},
          {value: '0, 85  100, 65  100,0 0,0'},
          {value: '0,100  100,100  100,0 0,0'},
          {value: '0,100  100,100  100,0 0,0'},
          // {value: '0,0  100,0  100,0 0,0'},  // swipe up
          // {value: '0,100  100,100  100,100 0,100'},  // swipe down
          {value: '0,100  100,100  100,15 0,0'},
          {value: '0,100  100,100  100,15 0,40'},
          {value: '0,100  100,100  100,50 0,48'},
          {value: '0,100  100,100  100,100 0,100'},
        ],

        // direction: 'alternate',
        // loop: true,
      });
    },
  };
</script>
