<template lang="pug">
  div.c-container
    h1.o-title {{ $t('heroes') }}
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
  $color-black: black
  $color-blue: blue
  $color-red: red

  .c-container
    .o-title
      text-align: center
      font-size: 50px
      color: $color-black
      border-bottom: 2px solid black
      text-transform: uppercase
    .o-title:hover
      color: $color-blue
      border-color: $color-red
</style>
