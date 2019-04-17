<template lang="pug">
  v-card.hero-item(hover @click="showHeroDetails")
    .hero-item__picture
      v-img.hero__image(
        :src="picture"
        :lazy-src="picture"
        aspect-ratio="1"
        )
        template(v-slot:placeholder)
          v-layout(
            fill-height
            align-center
            justify-center
            ma-0
            )
            v-progress-circular(indeterminate color="red darken-3")
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

<style lang="sass">
  .hero-item
    &__image
      max-height: 10px
      overflow: hidden
</style>
