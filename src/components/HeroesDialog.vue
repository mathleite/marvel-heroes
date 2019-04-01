<template lang="pug">
  .container
    v-dialog.container__dialog
      v-btn(
        slot="activator"
      ) {{ $t('app.details')}}
      v-card.card(class="text-xs-center")
        h1 {{ heroesData.name }}
        v-card-text.card__text(class="text-xs-left")
          .card__description
            v-span {{ $t('app.description') }}
            v-span {{ heroesData.description }}
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

<style lang="sass" scoped>
  .container
    & .card
      background-color: red !important
      & .__text
        & .__description
            display: flex
            flex-direction: column
</style>
