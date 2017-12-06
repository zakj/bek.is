<template>
  <div :class="$style.contact">
    <p>
      <a href="mailto:findbek@gmail.com">Email</a>
      <span>·</span>
      <a href="https://www.linkedin.com/in/bekstone/">LinkedIn</a>
      <span>·</span>
      <a href="https://www.instagram.com/saintbek/">@saintbek</a>
    </p>
    <p>
      <em>Site magic by <a href="https://zakj.net/">@zakj</a></em>
    </p>
  </div>
</template>

<style lang="stylus" module>
  @require '~assets/util'

  .contact
    text-small()
    span
      margin 0 1em
    +below(tablet)
      margin-top 24px
    +above(tablet)
      margin-top 48px
</style>
