<template lang="pug">
  v-container(grid-list-sm)
    v-card-text(
      v-show="heroHasComic"
      class="text-xs-center"
      )
      span {{ $t('app.no_comics') }}
    v-progress-linear(v-show="loading" :indeterminate="true")
    v-layout(row align-end wrap)
      v-flex(
        xs12
        sm6
        lg3
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
    comics: [],
    displayAlert: false,
    messageError: '',
    loading: false,
    hasComics: false,
  }),
  computed: {
    heroHasComic() {
      return this.comics.length === 0;
    },
  },
  created() {
    this.fetchHeroComics();
  },
  methods: {
    fetchHeroComics() {
      this.loading = true;
      this.hasComics = false;
      HeroesService.fetchHeroComics(this.hero.id)
        .then((response) => {
          this.comics = response;
          this.loading = false;
          this.hasComics = true;
        })
        .catch((error) => {
          const { status } = error.response;
          throw new Error(status);
        });
    },
  },
};
</script>
