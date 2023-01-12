import { defineStore } from "pinia";
import measureMilkService from "@/services/measureMilk";
import { useIsLoadingStore } from '@/stores/loading';

export const useMeasureMilkstore = defineStore('measureMilks', {
  state: () => { 
    return {
      measureMilk: {}
    }
  },
  getters: {
    getMeasure(state){
      return state.measureMilk
    },
  },
  actions: {
    getMeasureMilks() {
      useIsLoadingStore().setTrue();
      measureMilkService.search().then(res => {
        useIsLoadingStore().setFalse();
        return this.measureMilk = res.data.body;
      });
    }
  },
})
