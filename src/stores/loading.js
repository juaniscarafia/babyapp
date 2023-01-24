import { defineStore } from "pinia";

export const useIsLoadingStore = defineStore("isLoading", {
  state: () => {
    return {
      isLoading: false,
    };
  },
  getters: {},
  actions: {
    setTrue() {
      this.isLoading = true;
    },
    setFalse() {
      this.isLoading = false;
    },
  },
});
