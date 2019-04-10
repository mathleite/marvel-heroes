<template lang="pug">
  v-dialog.container__dialog(v-model="showDialog")
    v-card.card(class="text-xs-center")
      h1 {{ hero.name }}
      v-card-text.card__text(class="text-xs-center ")
        .card__description
          span.__description-bold {{ $t('app.description') }}
          span {{ hero.description }}
      .segregate
      v-card-text.card__text(class="text-xs-center")
        .card__description
          span.__description-bold {{ $t('app.hero_comics') }}
</template>

<script>
export default {
  name: 'HeroesDialog',
  props: {
    hero: {
      type: Object,
      required: true,
    },
    value: Boolean,
  },
  computed: {
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
    .card__description
      display: flex
      flex-direction: column
      & .__description-bold
        font-weight: bold
</style>
