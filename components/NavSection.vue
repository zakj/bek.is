<template>
  <section :class="$style.section" :id="name"
    v-in-view:enter="scrollEnter" v-in-view:exit="scrollExit">
    <vue-marked><slot /></vue-marked>
  </section>
</template>

<style lang="stylus" module>
  @require '~assets/util'

  .section
    min-height 400px  // XXX
    nav-padding()
</style>

<script>
import VueMarked from 'vue-marked';

export default {
  components: {VueMarked},

  methods: {
    scrollEnter() {
      // TODO: calculate currentNav somehow
    },

    scrollExit() {
      // TODO: calculate currentNav somehow
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

