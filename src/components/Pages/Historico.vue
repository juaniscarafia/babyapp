<template>
  <main class="background">
    <Transition name="move">
      <BappLoader v-show="stateLoading.isLoading" />
    </Transition>
    <div class="container has-text-centered">
      <h1 class="title">Histórico</h1>
    </div>
    <BappPanel :measureMilk="measureMilk" />
    <img src="../../assets/img/01_1400.webp" />
  </main>
</template>

<script>
import { useShowModalStore } from "@/stores/showModal";
import { useAccessStore } from "@/stores/access";
import { useIsLoadingStore } from "@/stores/loading";
import measureMilks from "@/services/measureMilk"

import BappPanel from "@/components/Panel.vue";
import BappLoader from "@/components/Shared/Loader.vue";

export default {
  setup() {
    const state = useShowModalStore();
    const stateAccess = useAccessStore();
    const stateLoading = useIsLoadingStore();

    return {
      state,
      stateAccess,
      stateLoading,
    };
  },
  data() {
    return {
      measureMilk: {}
    }
  },
  components: {
    BappPanel,
    BappLoader,
  },
  mounted() {
    measureMilks.search(this.stateAccess.user.token).then(res => {
      if (res.body === "Token inválido") {
        this.stateAccess.access = false;
        this.stateAccess.user = {};
        this.$router.push({ name: "login" }) 
      };
      this.measureMilk = res.data.body;
    });
  },
  computed() {
  },
  created() {},
};
</script>

<style lang="scss" scoped>
.title {
  padding-top: 10px;
  color: #d764df !important;
}
img {
  position: fixed;
  z-index: 10;
  width: 300px;
  top: 0;
}
@media screen and (max-width: 767px) {
  img {
    z-index: -10;
  }
}
.background{
  background-image: url("@/assets/img/bg/7987938.jpg");
  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

</style>