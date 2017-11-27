<template>
  <div>
    <h1>Bek Stone</h1>
    <NavMenu />

    <NavSection name="bio" label="Bio">
      here is the bio section
    </NavSection>

    <NavSection name="method" label="Methodology">
      here is the method section
    </NavSection>

    <NavSection name="archive" label="Archive">
      here is the archive section
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
