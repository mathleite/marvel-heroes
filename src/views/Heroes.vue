<template lang="pug">
  div.c-container
    h1.o-title {{ $t('app.heroes_grid') }}
    heroes-grid

</template>

<script>
import HeroesGrid from '../components/HeroesGrid.vue';

export default {
  name: 'Heroes',
  components: {
    HeroesGrid,
  },
};
</script>

<style lang="sass" scoped>
  @import '../sass/variables'

  .c-container
    font-family: monospace
    .o-title
      text-align: center
      font-size: 50px
      color: $color-black
      border-bottom: 2px solid black
      text-transform: uppercase
</style>
