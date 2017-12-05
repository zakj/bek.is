<template>
  <div :class="$style.body">
    <Container :class="{[$style.hidden]: loading}">
      <NavSection name="top" label="" :is-top="true">
        <h1>Every step<br>more humane<br>than the last.</h1>

        <MoodSet :class="$style.topMoodSet">
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
        <vue-marked>
          # Hiya.

          I’m Bek Stone, a creative director, musician, and most assuredly not a
          saint. I build and nurture extraordinary teams who create products both
          new to market and loved by millions.

          For over a decade, systems design has woven its way through all I do,
          trading friction for efficiency. Strategy and an eye for the iconic
          helps me shepherd brands to a space uniquely their own. Above all are
          people—saturating this wild ride with endless inspiration. Fostering
          great talent, advocating the quest for fulfillment, and rallying the
          unlikely to work together is pure delight.

          I live in Oakland with my partner Zak, a ridiculous beastie named Wing,
          and an army of plant babies. When not rocking business pants, I can be
          found composing music, designing apparel, or carving through the
          Redwoods on a Moto Guzzi named Fusa.
        </vue-marked>
      </NavSection>

      <NavSection name="method" label="Methodology" :numbered-headings="true">
        <vue-marked>
          ## Human first

          The infinite parade of glowing rectangles can cloud our view, but
          products are in service of people. There’s no cure for assumption like
          human connection. Curiosity and empathy build bridges—fueling research
          and synthesis core to great product design.

          ## Begin at the end

          Great endings inspire great beginnings. What will your legacy be? Will
          you proudly sign your name? Crystallizing the outcome enables us to
          define how to achieve it, measure progress, and anticipate many of the
          changing conditions to come.

          ## Maker’s vault

          When it comes to making, processes vary greatly. One constant is the
          need for large blocks of uninterrupted time to focus. In an
          increasingly open environment with diverse disciplines, establishing
          clear boundaries leads to fruitful outcomes and happy teams.

          ## Co-lab

          Iterative feedback and collaboration directly equates to product
          quality. Ask hard questions, find the holes, swap files and gain new
          perspectives. Use tooling and prototyping to address issues early on
          and illuminate new opportunities.

          ## Redefine the bar

          Product design is an endless negotiation of necessary compromise. But
          constraints never deter the ingenious. A dedication to craft and
          relentless commitment to differentiate, produces not great but
          groundbreaking results.

          ## Onwards and upwards

          Reflection is the ultimate catalyst for growth. Retrospectives,
          coaching, one-on-ones, and time budgeted for introspection are
          ingredients essential to perpetual development. Excellent product teams
          prioritize learning from experience, and everyone benefits.
        </vue-marked>
      </NavSection>

      <NavSection name="case-studies" label="Case Studies">
        here is the case studies section
      </NavSection>

      <NavSection name="voices" label="Voices">
        <vue-marked>
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
        </vue-marked>
      </NavSection>

      <NavSection name="" label="Connect" :nav-hidden="true">
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

  .top-mood-set
    padding-bottom 80px
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
import VueMarked from 'vue-marked';

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
    VueMarked,
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
