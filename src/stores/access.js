import { defineStore } from "pinia";

export const useAccessStore = defineStore("access", {
  state: () => {
    return {
      access: false,
      user: {
        Id: null,
        User: null,
        token: null,
      },
    };
  },
  persist: true,
  getters: {},
  actions: {
    _access() {
      this.access = true;
    },
    _noAccess() {
      this.access = false;
    },
  },
});
