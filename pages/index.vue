<template>
  <div :class="$style.body">
    <Container>
      <NavSection name="top" label="" :is-top="true">
      </NavSection>

      <NavSection name="bio" label="Bio">
      </NavSection>

      <NavSection name="method" label="Methodology" :numbered-headings="true">
      </NavSection>

      <NavSection name="case-studies" label="Case Studies">
        here is the case studies section
      </NavSection>
    </Container>

    <NavMenu />
  </div>
</template>

<style lang="stylus" module>
  // Keep NavMenu stacking above contents, but display first.
  .body
    display flex
    flex-direction column-reverse
</style>

<script>
import Container from '~/components/Container.vue';
import NavMenu from '~/components/NavMenu.vue';
import NavSection from '~/components/NavSection.vue';

export default {
  components: {Container, NavMenu, NavSection},
};
</script>
