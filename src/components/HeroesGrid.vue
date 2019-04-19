<template lang="pug">
  .heroes-grid
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
    v-pagination(
      v-model="page"
      :length="lastPage"
      :disabled="loading"
      @input="listHeroes"
    )
</template>

<script>
import HeroesService from '@/services/HeroesService';
import HeroesDialog from '@/components/HeroesDialog.vue';
import HeroItem from './HeroItem.vue';

export default {
  name: 'HeroesGrid',
  components: {
    HeroItem,
    HeroesDialog,
  },
  data: () => ({
    heroes: [],
    page: 1,
    limit: 12,
    lastPage: 1,
    loading: false,
    heroDetail: {},
    showDetail: false,
  }),
  computed: {
    offset() {
      return this.limit * (this.page - 1);
    },
  },
  created() {
    this.page = parseInt(this.$route.query.page, 10);
    this.listHeroes();
  },
  methods: {
    listHeroes() {
      this.loading = true;
      this.$router.push({ name: this.$route.name, query: { page: this.page } });
      HeroesService.list(this.offset, this.limit)
        .then((data) => {
          this.$vuetify.goTo(0);
          this.setResponseData(data);
          this.setTotalPages(data);
          this.setCurrentPage();
          this.loading = false;
        });
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
