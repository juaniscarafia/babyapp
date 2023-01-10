import { defineStore } from "pinia";

export const useAccessStore = defineStore('access', {
  state: () => { 
    return {access: false }
  },
  getters: {
    
  },
  actions: {
    _access() {
      this.access = true;
    },
    _noAccess() {
      this.access = false;
    }
  },
})