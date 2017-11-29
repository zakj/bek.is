<template>
  <section :class="{[$style.section]: true, [$style.numberedHeadings]: numberedHeadings}"
    :id="name" v-in-view:enter="scrollEnter" v-in-view:exit="scrollExit">
    <div v-if="!isTop" :class="$style.label">{{label}}<br>/</div>
    <vue-marked><slot /></vue-marked>
  </section>
</template>

<style lang="stylus" module>
  @require '~assets/util'

  .section
    min-height 400px  // XXX
    nav-padding()

  .label
    text-h3()
    margin-bottom 24px

  .numbered-headings
    counter-reset section

    h1, h2
      &::before
        content counter(section) "."
        counter-increment section
        display block

  .section blockquote
    margin 1em 0
    position relative
    text-h2()
    & > p:first-of-type
      &::before
        content "“"
        left -1em
        position absolute
        text-align right
        width 1em
    & > p:last-of-type
      &::after
        content "”"
    +above(tablet)
      max-width 60%
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
    this.$store.commit('addSection', {name: this.name, label: this.label, isTop: this.isTop});
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
    isTop: {
      default: false,
      type: Boolean,
    },
    label: {
      required: true,
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
    numberedHeadings: {
      default: false,
      type: Boolean,
    },
  },
};
</script>

