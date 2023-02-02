import { defineStore } from "pinia";
import measureMilkService from "@/services/measureMilk";
import { useIsLoadingStore } from "@/stores/loading";
import { useAccessStore } from "@/stores/access";

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
        
        if (res.body === "Token inválido") {
          this.$router.push({ name: "login" });
          // useAccessStore()._noAccess();
          // return (this.measureMilk = {})
        }
        return (this.measureMilk = res.data.body);
      });
    },
  },
});
