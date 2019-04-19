<template lang="pug">
  v-card
    v-card-text
      //input(type="file" ref="input_file" id="teste" style="display: none;")
      //v-btn(
        fab
        dark
        fixed
        right
        bottom
        color="red"
        @click="chooseFile"
        )
        v-icon attach_file
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
  methods: {
    chooseFile() {
      this.$refs.input_file.click();
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
