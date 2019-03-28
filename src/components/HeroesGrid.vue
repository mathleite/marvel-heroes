<template lang="pug">
  //- div.c-container
  //-   v-layout(row align-center justify-center)
  //-     v-flex(
  //-       xs12 md6 lg3
  //-       v-for="hero in heroes"
  //-       :key="hero.id"
  //-       )
  //-       v-card
  //-         v-card-title {{ hero.name }}
  //-         v-card-text
  //-           img(:src="hero.picture" width="100%")
  div.grid
    figure
      img(src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/7.jpg', alt='')
      figcaption
        div
          div
            h3 Iron Man
    figure
      img(src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/8.jpg', alt='')
      figcaption
        div
          div
            h3 Thor
    figure
      img(src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/9.jpg', alt='')
      figcaption
        div
          div
            h3 Captain America
    figure
      img(src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/10.jpg', alt='')
      figcaption
        div
          div
            h3 Black Widow
    .copyright 2017 Marvel


</template>

<script>
import HeroesService from '@/services/HeroesService';
import TheButton from './TheButton.vue';

export default {
  name: 'HeroesGrid',
  components: {
    TheButton,
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
  @import '../sass/variables'

  .c-container
    width: 100%
    height: 0 auto

    .o-layout
      margin-top: 50px

    .card
      border-radius: 10px
      height: 300px
      margin: 2px
      box-shadow: 0 10px 20px rgba(0,0,0,0.09), 0 6px 6px rgba(0,0,0,0.23)
      display: flex
      flex-direction: column
      align-items: center

      .o-profile-pic-radius
        width: 100px
        height: 100px
        border-radius: 100%
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)
</style>
