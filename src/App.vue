<template>
    <main>
        <BappLogin v-if="stateAccess.access"/>
        <BappHeader/>
        <BappPanel :measureMilk="stateMeasureMilks.measureMilk"/>
        <BappFooter/>
    </main>
</template>

<script>
import { useShowModalStore } from './stores/showModal';
import { useMeasureMilkstore } from './stores/measureMilks';
import { useAccessStore } from './stores/access';

import BappLogin from '@/components/Layout/Login.vue';
import BappHeader from '@/components/Layout/Header.vue';
import BappFooter from '@/components/Layout/Footer.vue';
import BappPanel from '@/components/Panel.vue';
import BappModal from '@/components/Layout/Modal.vue';

export default {
    setup() {
      const state = useShowModalStore()
      const stateMeasureMilks = useMeasureMilkstore()
      const stateAccess = useAccessStore()
      return {
        state,
        stateMeasureMilks,
        stateAccess
      }
    },
    data() {
    },
    components: { 
      BappHeader, 
      BappFooter,
      BappPanel,
      BappModal,
      BappLogin
    },
    mounted() {
      this.stateMeasureMilks.getMeasureMilks();
    },
    computed(){
      return this.stateMeasureMilks.measureMilks
    },
    created() {
    },
}
</script>

<style scoped>

</style>
