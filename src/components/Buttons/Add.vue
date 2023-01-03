<template>
  <button class="button is-rounded">
    <span class="mdi mdi-plus-circle"></span>
  </button>
</template>

<script>

export default {
  mixins: [],
  // data() {
  //   return {
  //     track: {}
  //   }
  // },
  components: {  },
  props: {
    
  },  
  computed: {
   
  },
  created() {
    
  },
  methods: {
    
  }
}
</script>
<style lang="scss" scoped>
  .button{
    position: fixed;
    z-index: 99;
    bottom: 50px;
    right: 50px;
    background-color: #d764df;
  }
  .mdi-plus-circle {
    color: white;
    font-size: 25px;
  }
</style>