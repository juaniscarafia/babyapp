<template>
  <div class="container results">
    <div id="columns" class="columns is-multiline is-flex is-justify-content-center mt0I w100">
      <div id="column"
        class="column is-two-fifths"
        v-for="(m, index) in measureMilk"
        :key="index"
      >
        <div class="card">
          <div class="panel">
            <div class="panel-heading">
              <h1 class="title has-text-centered">🗓️{{ m.Date }}</h1>
            </div>
            <div class="panel-block">
              <BappTable :measureMilk="m.Measures" />
              <article class="media">
                <!-- <div class="media-content">
                    <div class="content">
                        
                    </div>
                  </div> -->
                <!-- <nav class="level">
                    <div class="level-left">
                      <a href="" class="level item"></a>
                    </div>
                  </nav> -->
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
    <BappAdd />
  </div>
</template>

<script>
import BappTable from "@/components/Table.vue";
import BappAdd from "@/components/Buttons/BtnAdd.vue";

export default {
  mixins: [],
  components: { BappTable, BappAdd },
  props: {
    measureMilk: {
      type: Object,
      required: true,
    },
  },
  computed: {},
  created() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.container .results,
.columns .is-multiline .is-flex .is-justify-content-center {
  width: 100%;
}
.mt0I{
  margin-bottom: 0 !important;
}

.w100{
  width: 100%;
}
#columns, #column {
  width: 103%;
}
.column {
  margin: 20px;
}
.panel-heading {
  background-color: #d764df;
}
</style>
