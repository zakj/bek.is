<template>
  <section :id="name"
    :class="[$style.section, {[$style.numberedHeadings]: numberedHeadings}]">
    <div v-if="!isTop" :class="$style.label">{{label}}<br>/</div>
    <slot />
  </section>
</template>

<style lang="stylus" module>
  @require '~assets/util'

  .section
    nav-padding()
    &:last-child
      min-height 100vh

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
    margin 0
    position relative
    text-h2()
    +below(tablet)
      &:not(:first-of-type)
        margin-top 2em
    & > p:first-of-type
      &::before
        content "“"
        left -1em
        position absolute
        text-align right
        width 1em
    & > p:last-of-type
      margin-bottom 0
      &::after
        content "”"
    & + p
      text-small()
    +above(tablet)
      max-width 15em

  .section p
    max-width 30em

  .section em
    letter-spacing -0.3px
</style>

<script>

export default {
  mounted() {
    if (this.navHidden) return;
    this.$store.commit('addSection', {name: this.name, label: this.label, isTop: this.isTop});
  },

  destroyed() {
    this.$store.commit('removeSection', this.name);
  },

  watch: {
    name(name, previousName) {
      if (this.navHidden) return;
      this.$store.commit('updateSection', {
        name: previousName,
        newValues: {name, label: this.label},
      });
    },

    label(label) {
      if (this.navHidden) return;
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
    navHidden: {
      default: false,
      type: Boolean,
    },
    numberedHeadings: {
      default: false,
      type: Boolean,
    },
  },
};
</script>

