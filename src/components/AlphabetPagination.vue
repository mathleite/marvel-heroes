<template lang="pug">
  v-container
    v-layout(row)
      v-flex(xs12 sm6 lg3)
        v-select(
          :items="alphabet"
          @input="emitEventValue"
          :label="$t('app.search')"
        )
</template>

<script>
import PaginationService from '@/services/PaginationService';

export default {
  name: 'AlphabetPagination',
  props: {
    value: String,
  },
  data: () => ({
    alphabet: [],
  }),
  created() {
    this.getAlphabet();
  },
  methods: {
    getAlphabet() {
      this.alphabet = PaginationService.getAlphabet();
    },
    emitEventValue(value) {
      return this.$emit('eventValue', value);
    },
  },
};
</script>
