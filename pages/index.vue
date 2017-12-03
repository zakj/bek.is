<template>
  <div :class="$style.body">
    <Container :class="{[$style.hidden]: loading}">
      <NavSection name="top" label="" :is-top="true" :markdown="false">
        <h1>Every step<br>more humane<br>than the last.</h1>

        <MoodSet>
          <div slot="left">
            <!-- offset is a percentage of the width of the column. -->
            <MoodImage :scroll-at="1.2"
              src="/mood/BekStone.jpg" />
            <MoodImage :offset="-14" :scroll-at="1.2"
              src="/mood/V7.jpg" />
            <MoodImage :offset="80" :scroll-at="1.2"
              src="/mood/Agave.jpg" />
            <MoodImage :offset="40" :scroll-at=".9"
              src="/mood/Soiled.jpg" />
          </div>
          <div slot="right">
            <MoodImage :offset="60"
              src="/mood/Cabin.jpg" />
            <MoodImage orientation="landscape" size="small"
              src="/mood/Blocky.png" />
            <MoodImage orientation="landscape"
              src="/mood/Wing.jpg" />
            <MoodImage :scroll-at=".8"
              src="/mood/Clippings.jpg" />
            <MoodImage orientation="landscape" :offset="20"
              src="/mood/ZakJohnson-BekStone.jpg" />
            <MoodImage orientation="landscape" size="small"
              src="/mood/Saintbek.png" />
          </div>
        </MoodSet>
      </NavSection>

      <NavSection name="bio" label="Bio">
      </NavSection>

      <NavSection name="method" label="Methodology" :numbered-headings="true">
      </NavSection>

      <NavSection name="case-studies" label="Case Studies">
        here is the case studies section
      </NavSection>

      <NavSection name="voices" label="Voices">
        > Bek is one of those rare leaders that boldly balances hands-on
        > relevancy with clear visioned execution.

        [Rachel Holbrook](some link)  
        *Global Head of Production, Airbnb*

        > Green juice biodiesel synth, salvia roof party raw denim kombucha
        > pickled kale.

        [Katie Dill](some link)  
        *VP of Design, Lyft*

        > Heirloom authentic chambray pickled lomo. Hell of normcore pork
        > belly.

        [Peter Giorgi](some link)  
        *CMO, Celebrity Cruises*
      </NavSection>

      <NavSection name="" label="Connect" :nav-hidden="true" :markdown="false">
        <Contact />
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
import {mapMutations, mapState} from 'vuex';

import Contact from '~/components/Contact.vue';
import Container from '~/components/Container.vue';
import ImageViewer from '~/components/ImageViewer.vue';
import MoodImage from '~/components/MoodImage.vue';
import MoodSet from '~/components/MoodSet.vue';
import NavMenu from '~/components/NavMenu.vue';
import NavSection from '~/components/NavSection.vue';
import Splash from '~/components/Splash.vue';

export default {
  components: {
    Contact,
    Container,
    ImageViewer,
    MoodImage,
    MoodSet,
    NavMenu,
    NavSection,
    Splash,
  },

  computed: mapState(['loading']),

  methods: {
    onScroll() {
      this.setScrollY(window.scrollY);
    },

    ...mapMutations(['setScrollY']),
  },

  mounted() {
    window.addEventListener('scroll', this.onScroll, false);
  },

  destroyed() {
    window.removeEventListener('scroll', this.onScroll);
  },
};
</script>
