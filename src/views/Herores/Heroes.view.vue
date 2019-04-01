<template lang="pug">
  v-card
    v-card-text
      div.container
        the-title-text(:title="$t('app.heroes_grid')")
        heroes-grid
        div.button-rigth
          the-button(
            :text="$t('button.back')"
            :route-name="homeRoute"
          )
</template>

<script>
import { routeName } from '@/utils/constants';

import HeroesGrid from '@/components/HeroesGrid.vue';
import TheButton from '@/components/TheButton.vue';
import TheTitleText from '@/components/TheTitleText.vue';

export default {
  name: 'Heroes',
  components: {
    HeroesGrid,
    TheButton,
    TheTitleText,
  },
  computed: {
    homeRoute() {
      return routeName.HOME;
    },
  },
};
</script>

<style lang="sass" scoped>
  .container
    display: flex
    flex-direction: column
    .button-rigth
      font-weight: bold
      display: flex
      align-items: center
      justify-content: flex-end
</style>
