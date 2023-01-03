<template>
    <div class="container has-text-centered">
        <table class="table is-bordered is-striped is-fullwidth">
          <thead>
              <tr>
                  <th>Time</th>
                  <th>Measure</th>
                  <th>Name Milk</th>
                  <!-- <th>Description Milk</th> -->
              </tr>
          </thead>
          <tfoot>
              <tr>
                  <th class="thTotal">Total:</th>
                  <th class="thMl">{{calculatedTotal()}} ml</th>
                  <th class="thEmpty"></th>
                  <!-- <td></td> -->
              </tr>
          </tfoot>
          <tbody>
              <tr v-for="(m,index) in measureMilk" :key="index">
                  <th>⏰{{m.Time}} hs</th>
                  <th>📏{{m.Measure}} ml</th>
                  <th>🏷️{{m.NameMilk}}</th>
                  <!-- <th>{{m.DescriptionMilk}}</th> -->
              </tr>
          </tbody>
      </table>
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

<style lang="scss" scoped>
  @media screen and (max-width: 767px){
    .table {
      font-size: 14px;
    }
  }
  
  .table thead td, .table thead th, .table tbody td, .table tbody th{
    border: 1px solid #d764df !important;
  }

  .table thead tr, .table tfoot tr {
    background-color: #e9c9eb;
  }
  .thTotal{
    border-left: 1px solid #d764df !important;
    border-right: 1px solid #d764df !important;
    border-bottom: 1px solid #d764df !important;
  }
  .thMl{
    border-bottom: 1px solid #d764df !important;
    border-right: 1px solid #e9c9eb !important;
  }
  .thEmpty{
    border-left: 1px solid #d764df !important;
    border-right: 1px solid #d764df !important;
    border-bottom: 1px solid #d764df !important;
  }
  // .tfoot tr th:first-child {
  //   border: 1px solid #d764df !important;
  // }
  // .tfoot tr th:nth-child(2) {

  // }
  // .tfoot tr th:last-child{
  //   border: 1px solid #d764df !important;
  // }
</style>