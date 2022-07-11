<script lang="ts">
import { PropType } from 'vue';
import type { Match } from '../../types/match';
export default {
  props: {
    match: {
      type: Object as PropType<Match>,
      required: true,
    },
  },
};
</script>

<template>
  <div class="match flex flex-col p-2">
    {{ match?.game }}
  </div>
</template>
