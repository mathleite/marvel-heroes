<template lang="pug">
  v-dialog(v-model="showDialog")
    v-card.card(class="text-xs-center")
      v-avatar.card__avatar(size="200")
        v-img(:src="picture" aspect-radio="1")
      h1 {{ hero.name }}
      v-card-text(class="text-xs-center ")
        .card__description
          h3.__description-bold {{ $t('app.description') }}
          span(v-show="heroHasDescription") {{ $t('app.no_description') }}
          span {{ hero.description }}
      v-card-text(class="text-xs-center")
        .card__description
          h3.__description-bold {{ $t('app.hero_comics') }}
          heroes-comics-grid(:hero="hero")
</template>

<script>
import HeroesComicsGrid from './HeroesComicsGrid.vue';

export default {
  name: 'HeroesDialog',
  components: {
    HeroesComicsGrid,
  },
  props: {
    hero: {
      type: Object,
      required: true,
    },
    value: Boolean,
  },
  computed: {
    heroHasDescription() {
      const { description } = this.hero;
      return description.length === 0;
    },
    picture() {
      const { path, extension } = this.hero.thumbnail;
      return `${path}.${extension}`;
    },
    showDialog: {
      set(value) {
        this.$emit('input', value);
      },
      get() {
        return this.value;
      },
    },
  },
};
</script>

<style lang="sass">
  .card
    &__avatar
      margin-top: 10px
    .card__description
      display: flex
      flex-direction: column
      & .__description-bold
        font-weight: bold
</style>
