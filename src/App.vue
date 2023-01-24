<template>
  <main>
    <BappHeader v-show="stateAccess.access" />
    <router-view />
    <BappFooter v-show="stateAccess.access" />
  </main>
</template>

<script>
import { useAccessStore } from "@/stores/access";

import BappHeader from "@/components/Layout/Header.vue";
import BappFooter from "@/components/Layout/Footer.vue";
export default {
  setup() {
    const stateAccess = useAccessStore();
    return {
      stateAccess,
    };
  },
  components: {
    BappHeader,
    BappFooter,
  },
};
</script>

<style scoped></style>
