<template lang="pug">
  v-card
    v-card-text
      div.container
        the-title-text(:title="$t('app.heroes_grid')")
        heroes-grid
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

export default {
  name: 'Heroes',
  components: {
    HeroesGrid,
    TheButton,
    TheTitleText,
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
