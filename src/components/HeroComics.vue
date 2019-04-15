<template lang="pug">
  v-card(hover)
    v-tooltip(top content-class="tooltip")
      template(v-slot:activator="{ on }")
        v-img(:src="picture" aspect-radio="1" v-on="on")
        v-card-text(v-on="on")
          h4.text-no-wrap.text-truncate {{ comic.title }}
      span {{ comic.title }}
</template>

<script>
export default {
  name: 'HeroComics',
  props: {
    comic: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    picture() {
      const { path, extension } = this.comic.thumbnail;
      return `${path}.${extension}`;
    },
  },
};
</script>

<style lang="sass" scoped>
  .tooltip
    background-color: black !important
    color: white !important
</style>
