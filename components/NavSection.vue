<template>
  <section :class="$style.section" :id="name"
    v-in-view:enter="scrollEnter" v-in-view:exit="scrollExit">
    <slot />
  </section>
</template>

<style lang="stylus" module>
  .section
    min-height 400px  // XXX
    padding 0 24px
    padding-top 24px + 48px + 56px  // XXX spacer for logo
    background #eee  // XXX
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

  watch: {
    name(name, previousName) {
      this.$store.commit('updateSection', {
        name: previousName,
        newValues: {name, label: this.label},
      });
    },

    label(label) {
      this.$store.commit('updateSection', {
        name: this.name,
        newValues: {name: this.name, label},
      });
    },
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

