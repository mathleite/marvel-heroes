<template lang="pug">
  p {{ paragraphText }}
</template>

<script>
export default {
  name: 'TheParagraph',
  props: {
    paragraphText: {
      type: String,
      required: true,
    },
  },
};
</script>
