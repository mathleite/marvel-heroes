<template lang="pug">
  v-card
    v-card-text
      div.container
        the-title-text(:title="$t('app.heroes_grid')")
        heroes-grid(:heroesData="heroes")
        div.button-rigth
          the-button(
            :text="$t('button.back')"
            route-name="home"
          )
</template>

<script>
import HeroesGrid from '@/components/HeroesGrid.vue';
import TheButton from '@/components/TheButton.vue';
import TheTitleText from '@/components/TheTitleText.vue';

import HeroesService from '@/services/HeroesService';

export default {
  name: 'Heroes',
  components: {
    HeroesGrid,
    TheButton,
    TheTitleText,
  },
  data: () => ({
    heroes: [],
  }),
  methods: {
    listHeroes() {
      HeroesService.list()
        .then(({ data }) => {
          this.heroes = data;
        });
    },
  },
  created() {
    this.listHeroes();
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
