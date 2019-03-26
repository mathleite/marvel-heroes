<template lang="pug">
  div#app
    div.o-main
      router-view
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="sass" scoped>
  $light-gray: #bbbbbb

  #app
    display: flex
    justify-content: center
    background-image: url("https://thumbs.gfycat.com/SpanishHoarseBoaconstrictor-size_restricted.gif")
    background-repeat: repeat
    width: 100%
    height: 0 auto

    .o-main
      display: flex
      justify-content: center
      width: 60%
      height: 0 auto
      background-color: $light-gray
</style>
