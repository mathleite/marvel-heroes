<template lang="pug">
  .heroes-grid
    v-form
      v-flex(xs12 sm6 lg3)
        v-text-field(
          v-model="heroName"
          :label="'Search'"
          prepend-inner-icon="search"
          @input="searchHeroes"
        )
    //alphabet-pagination(v-model="nameStartsWith" @eventValue="eventValue")
    v-container(grid-list-lg)
      v-layout(row align-start wrap)
        v-flex(
          xs12
          sm6
          lg3
          v-for="hero in heroes"
          :key="hero.id"
        )
          hero-item(
            :hero="hero"
            @show-hero-detail="showHeroDetails"
          )
    v-progress-linear(v-show="loading" :indeterminate="true")
    heroes-dialog(
      v-model="showDetail"
      :hero="heroDetail"
      :key="heroDetail.id"
      v-if="heroDetail.id"
      )
    .paginationLayout
      v-pagination(
        v-model="page"
        circle
        :length="lastPage"
        :disabled="loading"
        @input="listHeroes"
      )
</template>

<script>
import HeroesService from '@/services/HeroesService';
import HeroesDialog from '@/components/HeroesDialog.vue';
import HeroItem from './HeroItem.vue';
import AlphabetPagination from './AlphabetPagination.vue';
import { setTimeout, clearTimeout } from 'timers';

export default {
  name: 'HeroesGrid',
  components: {
    HeroItem,
    HeroesDialog,
    AlphabetPagination,
  },
  data: () => ({
    heroes: [],
    page: 1,
    limit: 12,
    lastPage: 1,
    loading: false,
    heroDetail: {},
    showDetail: false,
    heroName: '',
    timeout: null,
  }),
  computed: {
    offset() {
      return this.limit * (this.page - 1);
    },
  },
  created() {
    this.listHeroes();
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
  },
  methods: {
    eventValue(value) {
      this.page = 1;
      this.nameStartsWith = value;
      this.listHeroes();
    },
    listHeroes() {
      this.loading = true;
      this.$router.push({ name: this.$route.name, query: { page: this.page } });
      HeroesService.list(this.offset, this.limit, this.heroName)
        .then((data) => {
          this.$vuetify.goTo(0);
          this.setResponseData(data);
          this.setTotalPages(data);
          this.setCurrentPage();
          this.loading = false;
        });
    },
    searchHeroes() {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.page = 1
        this.listHeroes();
      }, 500);
    },
    setResponseData(data) {
      const { limit, results } = data;
      this.limit = limit;
      this.heroes = results;
    },
    setTotalPages(data) {
      const { total, limit } = data;
      this.lastPage = Math.ceil(total / limit);
    },
    setCurrentPage() {
      const { offset, limit } = this;
      this.page = offset
        ? (offset / limit) + 1
        : 1;
    },
    showHeroDetails(hero) {
      this.heroDetail = hero;
      this.showDetail = true;
    },
  },
};
</script>

<style lang="sass">
  .paginationLayout
    display: flex
    justify-content: center
</style>
