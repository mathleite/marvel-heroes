<template lang="pug">
  v-flex(xs12 sm6 lg12)
    v-card
      the-title-text(:title="$t('app.heroes_grid')").justify-center
      p.c-info {{ $t('info.application') }}
      .button
        the-button(
          :text="$t('button.go_to_grid')"
          route-name="heroes"
        )
</template>

<script>
import TheButton from '@/components/TheButton.vue';
import TheTitleText from '@/components/TheTitleText.vue';

export default {
  name: 'Home',
  components: {
    TheButton,
    TheTitleText,
  },
  data: () => ({
    switchTheme: false,
  }),
};
</script>

<style lang="sass" scoped>
  .c-info
    text-align: center
    font-size: 16px
    text-transform: uppercase
  .justify-center
    display: flex
    justify-content: center
</style>
