<template lang="pug">
  div.c-container
    v-layout.o-layout
        v-flex.card(xs12 md6 lg3)
          img.o-profile-pic-radius(src="https://f.i.uol.com.br/fotografia/2018/09/25/15379219725baad3b4c7343_1537921972_4x3_md.jpg")
    div.btn
      router-link.text-decoration-none(:to="{ name: 'home' }")
        v-btn.o-btn-back voltar
</template>

<script>
export default {
  name: 'HeroesGrid',
  data: () => ({}),
};
</script>

<style lang="sass" scoped>
  @import '../sass/variables'
  @import '../sass/global'

  .c-container
    width: 100%
    height: 0 auto
    font-family: monospac

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

    .btn
      font-weight: bold
      display: flex
      align-items: center
      justify-content: flex-end
</style>
