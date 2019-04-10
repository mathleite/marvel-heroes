<template lang="pug">
  v-card(hover @click="showHeroDetails")
    v-img.hero__image(:src="picture" aspect-ratio="1")
    v-card-text
      h4.text-no-wrap.text-truncate {{ hero.name }}
</template>

<script>
export default {
  name: 'HeroesItem',
  props: {
    hero: Object,
  },
  computed: {
    picture() {
      const { path, extension } = this.hero.thumbnail;
      return `${path}.${extension}`;
    },
  },
  methods: {
    showHeroDetails() {
      this.$emit('show-hero-detail', this.hero);
    },
  },
};
</script>
