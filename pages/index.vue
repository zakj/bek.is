<template>
  <div :class="$style.body">
    <Container :class="{[$style.hidden]: loading}">
      <NavSection name="top" label="" :is-top="true">
      </NavSection>

      <NavSection name="bio" label="Bio">
      </NavSection>

      <NavSection name="method" label="Methodology" :numbered-headings="true">
      </NavSection>

      <NavSection name="voices" label="Voices">
        > Bek is one of those rare leaders that boldly balances hands-on
        > relevancy with clear visioned execution.

        subtext

        > Green juice biodiesel synth, salvia roof party raw denim kombucha
        > pickled kale.

        subtext

        > Heirloom authentic chambray pickled lomo. Hell of normcore pork
        > belly.

        subtext
      </NavSection>

      <NavSection name="case-studies" label="Case Studies">
        here is the case studies section
      </NavSection>

      <NavSection name="" label="Connect" :nav-hidden="true">
        # In the wild

        [Email](mailto:holler@bek.is)  
        [LinkedIn](https://www.linkedin.com/in/bekstone/)  
        [Twitter](https://twitter.com/saintbek)  
        [Instagram](https://www.instagram.com/saintbek/)  

        Site magic by [@zakj](https://zakj.net/)
      </NavSection>
    </Container>

    <Splash />
    <NavMenu />
  </div>
</template>

<style lang="stylus" module>
  // Keep NavMenu stacking above contents, but display first.
  .body
    display flex
    flex-direction column-reverse

  .hidden
    visibility hidden
</style>

<script>
import {mapState} from 'vuex';

import Container from '~/components/Container.vue';
import NavMenu from '~/components/NavMenu.vue';
import NavSection from '~/components/NavSection.vue';
import Splash from '~/components/Splash.vue';

export default {
  components: {
    Container,
    NavMenu,
    NavSection,
    Splash,
  },

  computed: mapState(['loading']),
};
</script>
