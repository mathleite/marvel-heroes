<template lang="pug">
  div.c-container
    //- div.c-grid
    //-   div.o-partition
    //-     div.o-profile-pic-radius()
    v-layout.o-layout(row align-center justify-center)
      v-flex.a(xs12 md6 lg3)
        div.o-profile-pic-radius
</template>

<script>
export default {
  name: 'HeroesGrid',
  data: () => ({
    image: 'https://s3.amazonaws.com/coursetro/course_images/24_thumb.jpg',
  }),
};
</script>

<style lang="sass" scoped>
  $color-black: black
  $color-blue: blue
  $color-red: red

  .c-container
    width: 900px

    .o-layout
      margin-top: 200px
    .a, .b, .c, .d
      border: 1px solid black
      height: 300px
      margin: 2px

      .o-profile-pic-radius
          width: 100px
          height: 100px
          border: 1px solid black
          border-radius: 100%
    .c-grid
      margin-top: 10px
      margin-bottom: 5px
      width: 700px
      height: 100px
      border: 1px solid black

      .o-partition
        display: flex
        justify-content: center
        align-items: center
        width: 100px
        height: 100px
        border-right: 1px solid black
</style>
