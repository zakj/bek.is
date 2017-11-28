<template>
  <div :class="$style.body">
    <Container>
      <NavSection name="bio" label="Bio">
        # Every step more humane than the last.
        [Trending Up](XXX)

        some pictures

        # With fire in these hands.
        [Arms that Carry](XXX)

        moar pictures
      </NavSection>

      <NavSection name="method" label="Methodology">
        here is the method section
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
