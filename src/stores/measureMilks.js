import { defineStore } from "pinia";
import measureMilkService from "@/services/measureMilk";

export const useMeasureMilkstore = defineStore('measureMilks', {
  state: () => { 
    return {measureMilk: {} }
  },
  getters: {
    getMeasure(state){
      return state.measureMilk
    },
  },
  actions: {
    getMeasureMilks() {
      measureMilkService.search().then(res => {
        this.measureMilk = res.data.body;
      });
    }
  },
})
