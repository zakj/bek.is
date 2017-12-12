import Vue from 'vue';

Vue.mixin({
  computed: {
    ready() {
      return !this.deferLoad || (process.browser && !this.$store.state.splashVisible);
    },
  },

  props: {
    deferLoad: {
      type: Boolean,
      default: false,
    },
  },
});
