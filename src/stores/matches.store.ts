import GET from '@/components/_utility/GET.request';
import type { Match } from '@/types/match';
import { defineStore } from 'pinia';

export const useMatchesStore = defineStore({
  id: 'Matches',
  state: () => ({
    loading: <boolean>false,
    matches: <Array<Match>>[] || null,
    error: <Error | null>null,
  }),
  getters: {
    getMatches: (state) => state.matches,
  },
  actions: {
    async getMatchData({ url }: { url: string }) {
      try {
        this.loading = true;
        const { data } = await GET({ url });
        this.matches = data;
        this.loading = false;
      } catch (error) {
        this.error = <Error>error;
        this.loading = false;
      }
    },
  },
});
