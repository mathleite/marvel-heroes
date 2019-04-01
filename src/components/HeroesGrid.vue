<template lang="pug">
  v-flex
    div.grid
      figure(
        v-for="hero in heroes"
        :key="hero.id"
        )
        v-img.grid__image(:src="hero.picture")
        figcaption
          div
            div
              h3 {{ hero.name }}
              heroes-dialog(:heroesData="hero")
</template>

<script>
import HeroesService from '@/services/HeroesService';
import HeroesDialog from '@/components/HeroesDialog.vue';

export default {
  name: 'HeroesGrid',
  components: {
    HeroesDialog,
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
  .grid
    margin-top: 20px
    position: relative
    display: grid
    height: 500px
    grid-template-columns: 1.167fr 0.45fr .225fr 0.3fr 0.8fr
    grid-template-rows: 0.44fr 0.1875fr 0.4fr .9fr
    figure
      position: relative
      display: flex
      flex-direction: column
      filter: grayscale(100%)
      &:hover
        filter: grayscale(0)
      .__image
        background-color: gray
        width: 100%
        height: 0 auto
        object-fit: cover
        transition: .2s
        will-change: transform
        flex-grow: 1

      &:nth-child(1)
        grid-column: 1 / 1
        grid-row: 1 / 2
      &:nth-child(2)
        grid-column: 2 / 2
        grid-row: 1 / 2
      &:nth-child(3)
        grid-column: 3 / 5
        grid-row: 1 / 2
      &:nth-child(4)
        grid-column: 5 / 5
        grid-row: 1 / 2
    figcaption
      position: absolute
      bottom: 0
      left: 0
      width: 100%
      text-align: center
      z-index: 2

    figcaption
      & h3
        color: #fdfdfd
        text-align: center
        font-size: 30px
        line-height: 1
        margin-bottom: 10px

  figure:hover figcaption
    div
      transform: none
    &:before, &:after
      transform: scaleY(1)

  figcaption
    &:before, &:after
      content: ''
      position: absolute
      bottom: 0
      left: 0
      width: 100%
      background: rgba(237, 28, 36, 0.4)
      height: 120%
      transition: .3s
      transform: scaleY(0)
      transform-origin: bottom
      z-index: -1
    &:before
      clip-path: polygon(0% 0%, 100% 15%, 100% 100%, 0% 100%)
    &:after
      height: 140%
      background: rgba(237, 28, 36, 0.5)
      clip-path: polygon(0% 15%, 100% 0%, 100% 100%, 0% 100%)
    div
      margin: 0
      transition: .3s transform
      will-change: transform
    > div
      overflow: hidden
      display: inline-block
      transform: translateY(100%)
      div
        transform: translateY(-100%)
        display: inline-block
  a
    text-decoration: none
    outline: 0
    &:visited, &:focus, &:active, &:link
      text-decoration: none
      outline: 0
    transition: .2s ease-in-out
</style>
