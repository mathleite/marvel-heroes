<template lang="pug">
  router-link.text-decoration-none(:to="{ name: routeName }")
    v-btn.o-btn-back {{ text }}
</template>

<script>
export default {
  name: 'TheButton',
  props: {
    text: {
      type: String,
      required: true,
    },
    routeName: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="sass" scoped>
  @import '../sass/variables'
</style>
