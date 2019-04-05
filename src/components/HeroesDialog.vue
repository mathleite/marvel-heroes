<template lang="pug">
  .container
    v-dialog.container__dialog
      v-btn(
        slot="activator"
      ) {{ $t('app.details')}}
      v-card.card(class="text-xs-center")
        h1 {{ heroesData.name }}
        v-card-text.card__text(class="text-xs-center ")
          .card__description
            span.__description-bold {{ $t('app.description') }}
            span {{ heroesData.description }}
        .segregate
        v-card-text.card__text(class="text-xs-center")
          .card__description
            span.__description-bold {{ $t('app.hero_comics') }}
</template>

<script>
export default {
  name: 'HeroesDialog',
  props: {
    heroesData: {
      type: Object,
      required: true,
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
