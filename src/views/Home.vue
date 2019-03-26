<template lang="pug">
  div.o-container
    div
      h1.o-app-name {{ $t('application_name') }}
      p.c-info {{ $t('info_application') }}
      div.o-buttons
        router-link(:to="{ name: 'heroes' }")
          v-btn.o-btn-lets-go {{ $t('buttons.lets_go') }}
    div.o-milos
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang="sass" scoped>
  $color-black: black
  $color-red: red
  $color-orange: orange
  $color-blue: blue

  .o-container
    .o-app-name
      text-align: center
      border-bottom: 3px solid $color-black
      height: 55px
      font-size: 50px
      text-transform: uppercase
      font-weight: bold
    .o-app-name:hover
      color: red
      border-color: $color-blue
      transform: rotate(180deg)

    .c-info
      text-align: center
      width: 400px
      font-size: 20px
      margin-top: 50px
      color: $color-red
    .c-info:hover
      color: $color-orange

    .o-buttons
      display: flex
      justify-content: center

      .o-btn-lets-go
        text-decoration: none
        color: $color-red

      .o-btn-lets-go:hover
        background-color: pink

    .o-milos
      width: 400px
      height: 400px
      border: 1px solid $color-black
      margin-bottom: 10px
      background-image: url("https://steamuserimages-a.akamaihd.net/ugc/939463588743719024/521C395DAD8B2E13E983372B63327DA4F9C0D200/")
      background-position: center
</style>
