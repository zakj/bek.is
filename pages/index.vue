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

          I’m Bek Stone, an advisor and creative director. I build and care for
          extraordinary teams and lead them in the creation of products both
          new to market and loved by millions.

          For the last decade, systems thinking has woven its way through all I
          do, trading friction for efficiency. Strategy and an eye for the
          iconic help me shepherd brands to a space uniquely their own. Above
          all are people—saturating this wild ride with endless inspiration.
          Fostering great talent, advocating the quest for fulfillment, and
          rallying the whole lot to work together is pure delight.

          I live in Oakland with my partner [Zak][], a ridiculous [beastie][],
          and an army of [plant babies][]. When not rocking business pants, I
          can be found composing [music][], designing [jewelry and apparel][],
          or carving through the Redwoods on a Moto Guzzi named [Fusa][].

          [Zak]: https://zakj.net/
          [beastie]: https://www.instagram.com/p/BNsYAKejaIY/?taken-by=saintbek
          [plant babies]: https://www.instagram.com/p/BUF4y6iBK4m/?taken-by=saintbek
          [music]: https://www.instagram.com/p/osFE-qNznI/?taken-by=saintbek
          [jewelry and apparel]: https://www.instagram.com/p/Bca2HvWhgkc/?taken-by=saintbek
          [Fusa]: https://www.instagram.com/p/BadE2jXBQOz/?taken-by=saintbek
        </vue-marked>
      </NavSection>

      <NavSection name="method" label="Methodology" :numbered-headings="true">
        <vue-marked>
          ## People, not users

          The infinite parade of glowing rectangles can cloud our view, but
          products are in service of people. Human connection is the best cure
          for our assumptions. Curiosity and empathy build bridges—fueling the
          research and synthesis that are core to great product design.

          ## Begin at the end

          Great endings inspire great beginnings. What will your legacy be?
          Will you proudly sign your name? Crystallizing the outcome enables us
          to define how to achieve it, measure progress, and anticipate many of
          the changing conditions to come.

          ## Maker’s vault

          When it comes to making, processes vary greatly. One constant is the
          need for large blocks of uninterrupted time to focus. In an
          increasingly open environment with diverse disciplines, establishing
          clear boundaries leads to fruitful outcomes and happy teams.

          ## Co-lab

          Iterative feedback and collaboration directly equate to product
          quality. Ask hard questions, find the holes, swap files, and gain new
          perspectives. Use tooling and prototyping to address issues early on
          and illuminate new opportunities.

          ## Redefine the bar

          Product design is an endless negotiation of necessary compromises,
          but constraints never deter the ingenious. A dedication to craft and
          relentless commitment to differentiate produce not just great, but
          groundbreaking results.

          ## Onwards and upwards

          Reflection is the ultimate catalyst for growth. Retrospectives,
          coaching, one-on-ones, and time budgeted for introspection are
          ingredients essential to perpetual development. The best product
          teams prioritize learning from experience, and everyone benefits.
        </vue-marked>
      </NavSection>

      <NavSection name="case-studies" label="Case Studies">
        <vue-marked>
          # Airbnb:
          # Scaling the Heart

          Building the Design Language System powering Airbnb innovation.
        </vue-marked>

        <ImageViewer :images="[
          '/airbnb/Airbnb-MMXV.jpg',
          ]" />

        <vue-marked>
          In January of 2015, I joined Airbnb. While the design team of 20 that
          could fit snugly around a whiteboard would quadruple before my
          departure less than a year and a half later, a signature climate of
          warmth never faltered.

          Up until this point, Airbnb had grown organically. The widely
          publicized rebrand six months prior had catapulted an
          already-valuable service into the “internet darling” stratosphere.
          2015 would usher in the company’s first significant investment in
          global marketing, further extending it’s reach. Internally, teams
          were working and growing at a feverish pace.

          By July, product design had more than doubled in size. Teams and
          initiatives across the org struggled to stay in sync. Web, iOS,
          Android, and Watch each had unique designs and codebases. We needed a
          shared language and a stable and performant foundation to withstand
          continued growth.

          Our goal was to create a universal design system and I was given the
          green light to build a dedicated team.
        </vue-marked>

        <ImageViewer :images="[
          '/airbnb/Airbnb-DLS-Founding-Team.jpg',
          ]" />

        <vue-marked>
          As the founding members began to research and audit, I set out to
          connect with leaders across the organization to gain understanding,
          exchange ideas, and develop shared goals for our future. Armed with
          insights, I drafted our first vision and guiding principles and set
          the growing team loose to explore and create.

          Fonts would be scaled up for legibility. Color contrast boosted to
          meet new accessibility benchmarks. Bold accents introduced pacing and
          illustrations rang harmonious with our expanding icon system.
          Movement brought life. A visual language emerged—vibrant, clear, and
          as animated and conversational as the dinner table.
        </vue-marked>

        <MoodSet>
          <div slot="left">
            <MoodImage
              src="/airbnb/Type-Scales.jpg"
              :scroll-at="1.2"
              :offset="80" />
            <MoodImage
              src="/airbnb/DLS-Pacing.png"
              orientation="landscape"
              :scroll-at="1.2"
              :offset="-10" />
          </div>
          <div slot="right">
            <MoodImage
              src="/airbnb/Airbnb-DLS-Brand.jpg"
              orientation="landscape"
              :scroll-at="0.9"
              :offset="10" />
            <MoodImage
              src="/airbnb/DLS-Calendar.png"
              :scroll-at="1.1"
              :offset="0" />
            <MoodImage
              src="/airbnb/DLS-Motion.gif"
              orientation="landscape"
              size="small"
              :scroll-at="1"
              :offset="40" />
          </div>
        </MoodSet>

        <vue-marked>
          Running in parallel were two initiatives introducing radical changes
          to flows across all platforms. The success of these colossal efforts
          hinged on having a sound and iconic system to build upon. Quality
          cannot be defined by external characteristics alone. Reliability and
          performance are inextricable traits, and required tremendous
          cooperation across product, engineering, and design to achieve. We
          focused our efforts on mobile to lead the way.
        </vue-marked>

        <ImageViewer :images="[
          '/airbnb/Airbnb-DLS-Leads.jpg',
          '/airbnb/Airbnb-DLS.jpg',
          '/airbnb/Airbnb-DLS-Components.jpg',
          ]" />

        <vue-marked>
          Equipped with new requirements and our drafted brand
          language, design leads and executives from our cross-functional teams
          headed offsite to hash out the first version of Airbnb’s Design
          Language System. Teams began testing, breaking, and submitting
          improvements. As the system solidified, I guided adoption,
          integration, and continued evolution across product teams.
        </vue-marked>

        <ImageViewer :images="[
          '/airbnb/Airbnb-DLS-Components-Sample.png',
          ]" />

        <vue-marked>
          As with any great endeavor, this one too had to travel the difficult
          but transformative path of discovery. No one solution could meet all
          needs, and no process could satisfy all those involved. More valuable
          than the system created were the people it aimed to serve. At last, a
          shared language was beginning to bridge the gap between disciplines,
          and something altogether more beautiful was unfolding.

          With the rollout underway and an able team in place, I departed from
          Airbnb—one month before the public launch in April, 2016. The team
          and their work continue to flourish, driving a greater level of
          continuity and cross-functional collaboration.

          Laying a new foundation and rebuilding a home with a growing family
          inside was no small feat, and there were countless challenges and
          opportunities for the organization to learn along the way. In the
          end, a once small and mighty team empowered Airbnb to scale in new
          ways—each step more humane than the last.
        </vue-marked>

        <MoodSet>
          <div slot="left">
            <MoodImage
              src="/airbnb/Airbnb-2015-XD.jpg"
              :scroll-at="1.2"
              :offset="80" />
            <MoodImage
              src="/airbnb/Karri-Saarinen.jpg"
              orientation="landscape"
              :scroll-at="1.2"
              :offset="-10" />
          </div>
          <div slot="right">
            <MoodImage
              src="/airbnb/Airbnb-FutureIsFemale.jpg"
              orientation="landscape"
              :scroll-at="1.1" />
            <MoodImage
              src="/airbnb/SalihTheDream.jpg"
              :scroll-at="0.9"
              :offset="-10" />
            <MoodImage
              src="/airbnb/HowWeBuild.jpg"
              orientation="landscape"
              :offset="60" />
          </div>
        </MoodSet>

        <vue-marked>
          ## Encore

          Core contributors:  
          Alex Schleifer, Adam Michela, Karri Saarinen, Michael Bachand, Paul
          Kompfner, Sean Abraham, Salih Abdul-Karim, Michael Sui, Jing Jian,
          Britt Nelson, Hannah Hughes, Luke Carter, Stephen Wyatt Bush.

          Invaluable partners:  
          Katie Dill, Amber Cartwright, Allen Mask, Taido Nakajima, Katie Chen,
          Adam Glynn-Finnegan, Kevin Grennan, Alvin Hsia, Shane Allen, Charlie
          Aufmann.
          
          ## Related articles

          [A Design System to Take on the World](http://www.creativebloq.com/features/why-design-is-key-to-airbnbs-incredible-success)  
          *by Tanya Combrinck*

          [The Way We Build](https://airbnb.design/the-way-we-build/)  
          *by Alex Schleifer*

          [Creating the Airbnb Design System](http://karrisaarinen.com/posts/building-airbnb-design-system/)  
          *by Karri Saarinen*

          [Communicating Clarity and Charm](https://design.google/library/airbnb-communicating-clarity-and-charm/)  
          *by Google Design*
        </vue-marked>
      </NavSection>

      <NavSection name="archive" label="Archive">
        <vue-marked>
          # Making and breaking

          Highlights in humanizing digital experiences, constructing
          environments, and exploring physical materials.
        </vue-marked>

        <ImageViewer :images="[
          '/archive/BekStone-CastSilver.jpg',
          '/archive/Constellations.jpg',
          '/archive/Emboss.jpg',
          '/archive/Flytrap-Construction.jpg',
          '/archive/NEU.jpg',
          '/archive/PressedJuicery.jpg',
          '/archive/TLE-3D-Mark.jpg',
          '/archive/ThisIsBound.jpg',
          '/archive/Workshop.jpg',
          ]" />
      </NavSection>

      <NavSection name="voices" label="Voices">
        <vue-marked>
          > An expert in her craft, a leader with humility, and someone you can
          > always rely on to deliver innovative and fresh design perspectives.

          [Adam Bordow](https://www.linkedin.com/in/adam-bordow-a513557/)  
          *Photo Editor, Airbnb*

          > Bek is one of those rare leaders that boldly balances hands-on
          > relevancy with clear visioned execution.

          [Ryan Northway](https://www.linkedin.com/in/northway/)  
          *Principal Product Designer, Real Labs*

          > A shining star in a sea of sameness, an invigorator, an
          > inspiration.

          [Benjamin Roy](https://www.linkedin.com/in/beroy/)  
          *Director, Venture Visuals*

          > If I could get Bek on my team ever again I'd do so in a heartbeat.

          [Dan Hill](https://www.linkedin.com/in/hilldan/)  
          *Director of Product, Airbnb*
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
  @require '~assets/util'

  // Keep NavMenu stacking above contents, but display first.
  .body
    display flex
    flex-direction column-reverse

  .hidden
    visibility hidden

  .top-mood-set
    padding-bottom 90px
    +below(tablet)
      margin-top 100px
    +above(tablet)
      margin-top 180px
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
