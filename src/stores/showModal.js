import { defineStore } from "pinia";

export const useShowModalStore = defineStore('showModal', {
  state: () => { 
    return {
      showModal: false
    }
  },
  getters: {
    
  },
  actions: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    }
  },
})
