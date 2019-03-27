<template lang="pug">
  div.o-container
    h1.o-app-name {{ $t('app.name') }}
    div.o-flex-container
      p.c-info {{ $t('info.application') }}
      the-button(
        :text="$t('button.go_to_grid')"
        :route-name="heroesGridRoute"
      )
</template>

<script>
import { getRouteByName } from '../utils/constants';
import TheButton from '../components/TheButton.vue';

export default {
  name: 'Home',
  components: {
    TheButton,
  },
  computed: {
    heroesGridRoute() {
      return getRouteByName.HEROES_GRID;
    },
  },
  created() {
    console.log(getRouteByName, 'porra')
  },
};
</script>

<style lang="sass" scoped>
  @import '../sass/variables'
  @import '../sass/global'

  .o-container
    font-family: monospace
    display: flex

    &:first-child
      flex-direction: column

    .o-app-name
      text-align: center
      border-bottom: 3px solid $color-black
      height: 55px
      font-size: 50px
      text-transform: uppercase
      font-weight: bold

    .o-flex-container
      display: flex
      justify-content: center
      align-items: center
      flex-direction: column

      .c-info
        text-align: center
        width: 400px
        font-size: 20px
        margin-top: 50px
        color: $color-red
</style>
