<template lang="pug">
  .right
    v-btn.o-btn-back(
      :to="{ name: routeName }"
    ) {{ text }}
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
      required: false,
    },
  },
};
</script>
