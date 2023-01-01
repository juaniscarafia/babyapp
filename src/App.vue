<template>
    <main>
        <BappHeader />
        <BappPanel :measureMilk="measureMilk"/>
        <BappFooter />
    </main>
</template>

<script>
import BappHeader from '@/components/Layout/Header.vue';
import BappFooter from '@/components/Layout/Footer.vue';
import BappPanel from '@/components/Panel.vue';

import measureMilkService from "@/services/measureMilk";

export default {
    data() {
        return {
            measureMilk: {}
        }
    },
    components: { 
        BappHeader, 
        BappFooter,
        BappPanel
    },
    created() {
        measureMilkService.search().then(res => {
            this.measureMilk = res.data.body;
        })
    },
}
</script>

<style scoped>

</style>
