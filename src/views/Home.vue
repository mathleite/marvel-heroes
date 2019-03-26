<template lang="pug">
  div.o-container
    h1.o-app-name {{ $t('application_name') }}
    div.rola
      p.c-info {{ $t('info_application') }}
      div.o-button
        router-link(:to="{ name: 'heroes-grid' }")
          v-btn.o-btn-lets-go {{ $t('buttons.lets_go') }}
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang="sass" scoped>
  @import '../sass/variables'

  .o-container
    font-family: monospace
    display: flex

    &:first-child
      flex-direction: column

    .o-app-name
      text-align: center
      border-bottom: 3px solid $color-black
      height: 55px
      font-size: 50px
      text-transform: uppercase
      font-weight: bold

    .rola
      display: flex
      justify-content: center
      align-items: center
      flex-direction: column
      .c-info
        text-align: center
        width: 400px
        font-size: 20px
        margin-top: 50px
        color: $color-red
</style>
