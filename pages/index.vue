<template>
  <div :class="$style.body">
    <Container :class="{[$style.hidden]: loading}">
      <NavSection name="top" label="" :is-top="true" :markdown="false">
        <h1>Every step more humane than the last.</h1>

        <MoodSet>
          <div slot="left">
            <!-- offset is a percentage of the width of the column. -->
            <MoodImage :scroll-at="1.2"
              src="/mood/L-1.jpg" />
            <MoodImage :offset="-14" :scroll-at="1.2"
              src="/mood/L-2.jpg" />
            <MoodImage :offset="80" :scroll-at="1.2"
              src="/mood/L-3.jpg" />
            <MoodImage :offset="-14" :scroll-at="1.2"
              src="/mood/L-4.jpg" />
          </div>
          <div slot="right">
            <MoodImage :offset="60"
              src="/mood/R-1.jpg" />
            <MoodImage orientation="landscape" size="small"
              src="/mood/R-2.jpg" />
            <MoodImage orientation="landscape"
              src="/mood/R-3.jpg" />
            <MoodImage :scroll-at=".8"
              src="/mood/R-4.jpg" />
            <MoodImage orientation="landscape" :offset="20"
              src="/mood/R-5.jpg" />
            <MoodImage orientation="landscape" size="small"
              src="/mood/R-6.png" />
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

        subtext

        > Green juice biodiesel synth, salvia roof party raw denim kombucha
        > pickled kale.

        subtext

        > Heirloom authentic chambray pickled lomo. Hell of normcore pork
        > belly.

        subtext
      </NavSection>

      <NavSection name="" label="Connect" :nav-hidden="true">
        # In the wild

        [Email](mailto:findbek@gmail.com)  
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
import {mapMutations, mapState} from 'vuex';

import Container from '~/components/Container.vue';
import ImageViewer from '~/components/ImageViewer.vue';
import MoodImage from '~/components/MoodImage.vue';
import MoodSet from '~/components/MoodSet.vue';
import NavMenu from '~/components/NavMenu.vue';
import NavSection from '~/components/NavSection.vue';
import Splash from '~/components/Splash.vue';

export default {
  components: {
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
