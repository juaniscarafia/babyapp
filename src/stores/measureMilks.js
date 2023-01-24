import { defineStore } from "pinia";
import measureMilkService from "@/services/measureMilk";
import { useIsLoadingStore } from "@/stores/loading";

export const useMeasureMilkstore = defineStore("measureMilks", {
  state: () => {
    return {
      measureMilk: {},
    };
  },
  getters: {
    getMeasure(state) {
      return state.measureMilk;
    },
  },
  actions: {
    getMeasureMilks(token) {
      useIsLoadingStore().setTrue();
      measureMilkService.search(token).then((res) => {
        useIsLoadingStore().setFalse();
        if (res === "Token inválido") {
          return res
        }
        return (this.measureMilk = res.data.body);
      });
    },
  },
});
