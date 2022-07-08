<script setup>
import { ref, onMounted, computed } from 'vue';
import MatchCardTest from '@/components/_common/matchCardTest.vue';
import { MATCH_BASE_URL } from '@/components/_constants/APIurls';
import { useMatchesStore } from '@/stores/matches.store';

const store = useMatchesStore();

const matches = computed(() => store.matches);

onMounted(async () => {
  await store.getMatchData({ url: MATCH_BASE_URL });
});
</script>

<template>
  <main>
    <div v-for="match in matches" :key="match.id">
      <MatchCardTest :match="match" />
    </div>
  </main>
</template>
