<template>
  <main>
    <Transition name="move">
      <BappLoader v-show="stateLoading.isLoading" />
    </Transition>
    <div class="container has-text-centered">
      <h1 class="title">Ultimos 7 días</h1>
    </div>
    <BappPanel :measureMilk="stateMeasureMilks.measureMilk" />
  </main>
</template>

<script>
import { useShowModalStore } from "@/stores/showModal";
import { useMeasureMilkstore } from "@/stores/measureMilks";
import { useAccessStore } from "@/stores/access";
import { useIsLoadingStore } from "@/stores/loading";

import BappPanel from "@/components/Panel.vue";
import BappLoader from "@/components/Shared/Loader.vue";

export default {
  setup() {
    const state = useShowModalStore();
    const stateMeasureMilks = useMeasureMilkstore();
    const stateAccess = useAccessStore();
    const stateLoading = useIsLoadingStore();
    return {
      state,
      stateMeasureMilks,
      stateAccess,
      stateLoading,
    };
  },
  data() {},
  components: {
    BappPanel,
    BappLoader,
  },
  mounted() {
    this.stateMeasureMilks.getMeasureMilks(this.stateAccess.user.token);
    debugger
    if (this.stateMeasureMilks.measureMilk === {}) {
      console.log("empty");  
    }
  },
  computed() {
    const data = this.stateMeasureMilks.measureMilks;
    return data;
  },
  created() {},
};
</script>

<style lang="scss" scoped>
.title {
  padding-top: 10px;
  color: #d764df !important;
}
</style>
