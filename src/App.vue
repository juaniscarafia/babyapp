<template>
    <main>
        <BappLogin v-if="stateAccess.access"/>
        <BappHeader/>
        <Transition name="move">
          <BappLoader v-show="stateLoading.isLoading"/>
        </Transition>
        <BappPanel :measureMilk="stateMeasureMilks.measureMilk"/>
        <BappFooter/>
    </main>
</template>

<script>
import { useShowModalStore } from '@/stores/showModal';
import { useMeasureMilkstore } from '@/stores/measureMilks';
import { useAccessStore } from '@/stores/access';
import { useIsLoadingStore } from '@/stores/loading';

import BappLogin from '@/components/Layout/Login.vue';
import BappHeader from '@/components/Layout/Header.vue';
import BappFooter from '@/components/Layout/Footer.vue';
import BappPanel from '@/components/Panel.vue';
import BappModal from '@/components/Layout/Modal.vue';
import BappLoader from '@/components/Layout/Loader.vue';

export default {
    setup() {
      const state = useShowModalStore()
      const stateMeasureMilks = useMeasureMilkstore()
      const stateAccess = useAccessStore()
      const stateLoading = useIsLoadingStore()
      return {
        state,
        stateMeasureMilks,
        stateAccess,
        stateLoading
      }
    },
    data() {
    },
    components: { 
      BappHeader, 
      BappFooter,
      BappPanel,
      BappModal,
      BappLogin,
      BappLoader
    },
    mounted() {
      this.stateMeasureMilks.getMeasureMilks();
    },
    computed(){
      const data = this.stateMeasureMilks.measureMilks
      return data;
    },
    created() {
    },
}
</script>

<style scoped>

</style>
