<template>
  <section :class="$style.section" :id="name"
    v-in-view:enter="scrollEnter" v-in-view:exit="scrollExit">
    <slot />
  </section>
</template>

<style lang="stylus" module>
  .section
    min-height 600px
    background #eee
    outline 1px solid orange
</style>

<script>
export default {
  methods: {
    scrollEnter() {
      console.log('entered', this.name);
    },

    scrollExit() {
      console.log('exited', this.name);
    },
  },

  mounted() {
    this.$store.commit('addSection', {name: this.name, label: this.label});
  },

  destroyed() {
    this.$store.commit('removeSection', this.name);
  },

  props: {
    label: {
      required: true,
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
  },
};
</script>

