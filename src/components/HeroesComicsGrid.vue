<template lang="pug">
  v-container(grid-list-sm)
    v-card-text(
      v-show="heroHasComics"
      class="text-xs-center"
      )
      span {{ $t('app.no_comics') }}
    v-progress-linear(v-show="loading" :indeterminate="true")
    v-layout(row align-end wrap)
      v-flex(
        xs8
        sm4
        lg2
        v-for="comic in comics"
        :key="comic.id"
        )
        hero-comics(v-show="hasComics" :comic="comic")
</template>

<script>
import HeroComics from './HeroComics.vue';
import HeroesService from '@/services/HeroesService';

export default {
  name: 'HeroesComicsGrid',
  components: {
    HeroComics,
  },
  props: {
    hero: Object,
  },
  data: () => ({
    heroHasComics: false,
    comics: [],
    displayAlert: false,
    messageError: '',
    loading: false,
    hasComics: false,
  }),
  created() {
    this.fetchHeroComics();
  },
  methods: {
    fetchHeroComics() {
      this.loading = true;
      this.hasComics = false;
      HeroesService.fetchHeroComics(this.hero.id)
        .then((response) => {
          this.setComics(response);
          this.loading = false;
          this.hasComics = true;
        })
        .catch((error) => {
          const { status } = error.response;
          throw new Error(status);
        });
    },
    setComics(response) {
      if (response.length) {
        this.comics = response;
        return true;
      }
      this.heroHasComics = !this.heroHasComics;
      return true;
    },
  },
};
</script>
