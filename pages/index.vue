<template>
  <div>
    <NavMenu />

    <NavSection name="bio" label="Bio">
      <h1>Every step more humane than the last.</h1>
      <a href="XXX">Trending Up</a>

      <p>some pictures</p>

      <h1>With fire in these hands.</h1>
      <a href="XXX">Arms that Carry</a>

      <p>moar pictures</p>
    </NavSection>

    <NavSection name="method" label="Methodology">
      here is the method section
    </NavSection>

    <NavSection name="case-studies" label="Case Studies">
      here is the case studies section
    </NavSection>
  </div>
</template>

<style lang="stylus" module>
</style>

<script>
import NavMenu from '~/components/NavMenu.vue';
import NavSection from '~/components/NavSection.vue';

export default {
  components: {NavMenu, NavSection},
};
</script>
