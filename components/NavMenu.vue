<template>
  <nav>
    <a v-for="({name, label}) in navSections" :href="`#${name}`"
      v-scroll-to="`#${name}`">{{label}}</a>
  </nav>
</template>

<style>
</style>

<script>
import {mapState} from 'vuex';

export default {
  computed: mapState(['currentNav', 'navSections']),
};
</script>
