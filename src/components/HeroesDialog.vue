<template lang="pug">
  v-dialog(v-model="showDialog" scrollable)
    v-card.card(dark class="text-xs-center")
      v-toolbar(flat)
        v-toolbar-title {{ hero.name }}
        v-spacer
        v-btn(
          icon
          @click="closeDialog"
        )
          v-icon close
      v-divider
      v-card-text
        v-card
          v-card-text
            v-layout(column align-center)
              v-avatar.card__avatar(size="200")
                v-img(:src="picture" aspect-radio="1")
              h1.mt-3 {{ hero.name }}
        v-card-text.text-xs-center
          v-layout(column)
            h3.font-weight-bold {{ $t('app.description') }}
            span(v-show="heroHasDescription") {{ $t('app.no_description') }}
            span {{ hero.description }}
        v-card-text.text-xs-center
          v-layout(column)
            h3.font-weight-bold {{ $t('app.hero_comics') }}
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
  methods: {
    closeDialog() {
      this.showDialog = false;
    },
  },
};
</script>
