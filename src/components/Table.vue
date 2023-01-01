<template>
    <div class="container has-text-centered">
        <div class="table-container">
            <table class="table">
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Measure</th>
                        <th>Name Milk</th>
                        <th>Description Milk</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <td>Total: </td>
                        <td>{{calculatedTotal()}} ml</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tfoot>
                <tbody>
                    <tr v-for="(m,index) in measureMilk" :key="index">
                        <th>{{m.Time}} hs</th>
                        <th>{{m.Measure}} ml</th>
                        <th>{{m.NameMilk}}</th>
                        <th>{{m.DescriptionMilk}}</th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
  export default {
    mixins: [ ],
    props: {
      measureMilk: {
        type: Object, 
        required: true
      }
    },
    methods: {
      calculatedTotal() {
        let total = 0;
        this.measureMilk.forEach(m => {
          total += m.Measure
        });

        return total;
      }
    },
    filters: {
      
    }
  }
</script>

<style lang="scss">
    
</style>