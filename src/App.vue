<template lang="pug">
  div#app
    div.o-main
      div.background
      div.segregate
        div.card
          router-view
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="sass" scoped>
  @import './sass/variables'

  #app
    display: flex
    background-repeat: repeat
    width: 100%
    height: 0 auto

    .o-main
      height: 0 auto

      .background
        background: url('http://www.wallpapermaiden.com/wallpaper/14155/download/1980x1080/iron-man-marvel-comics.jpg') no-repeat center center fixed
        background-size: cover
        filter: grayscale(80%)
        position: absolute
        z-index: -1
        width: 100vw
        height: 100vh

      .segregate
        width: 100vw
        height: 100vh
        display: flex
        justify-content: center
        align-items: center
        .card
          z-index: 1
          background: $color-white
          width: 50%
          padding: 24px
          border-radius: 16px
          box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)
          transition: all 0.3s cubic-bezier(.25,.8,.25,1)

</style>
