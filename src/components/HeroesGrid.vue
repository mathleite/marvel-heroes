<template lang="pug">
  div.c-container
    v-layout.o-layout
        v-flex.card(xs12 md6 lg3)
          img.o-profile-pic-radius
</template>

<script>
import TheButton from './TheButton.vue';

export default {
  name: 'HeroesGrid',
  components: {
    TheButton,
  },
};
</script>

<style lang="sass" scoped>
  @import '../sass/variables'

  .c-container
    width: 100%
    height: 0 auto

    .o-layout
      margin-top: 50px

    .card
      border-radius: 10px
      height: 300px
      margin: 2px
      box-shadow: 0 10px 20px rgba(0,0,0,0.09), 0 6px 6px rgba(0,0,0,0.23)
      display: flex
      flex-direction: column
      align-items: center

      .o-profile-pic-radius
        width: 100px
        height: 100px
        border-radius: 100%
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)
</style>
