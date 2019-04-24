<template lang="pug">
  v-card-title(primary-title)
    h1.o-title-application.headline {{ title }}
</template>

<script>
export default {
  name: 'TheTitleText',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="sass" scoped>
  @import '../sass/variables'

  .o-title-application
    text-align: center
    height: 55px
    font-size: 50px
    text-transform: uppercase
    font-weight: bold
</style>
