<template lang="pug">
  v-app.app
    .app__background
    v-content
      .app__segregate
        v-container
          transition(name="slide-y-transition" mode="out-in")
            router-view
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="sass" scoped>
  @import './sass/variables'

  .app
    font-family: monospace

    &__background
      background: red url('./assets/images/iron-man-marvel-comics.jpg') no-repeat center center fixed
      background-size: cover
      filter: grayscale(80%)
      position: absolute
      left: 0
      right: 0
      top: 0
      bottom: 0

    &__segregate
      width: 100vw
      height: 100vh
      display: flex
      justify-content: center
      align-items: center
      position: relative
      z-index: 2
</style>
