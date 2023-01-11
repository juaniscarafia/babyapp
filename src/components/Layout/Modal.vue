<template>
  <div
    class="modal"
    v-if="state.showModal"
    :class="{ 'is-active': state.showModal }"
  >
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Registrar mamadera</p>
        <button class="delete" aria-label="close" @click="closeModal"></button>
      </header>
      <section class="modal-card-body">
        <div class="columns">
          <div class="column is-6">
            <Datepicker
              v-model="date"
              locale="es-ar"
              position="left"
              :format="format"
              uid="dateMeasure"
              @update:modelValue="handleDate"
            >
              <template #input-icon>
                <span class="icon-Datepicker">🗓️</span>
              </template>
            </Datepicker>
          </div>
          <div class="column is-6">
            <Datepicker
              v-model="time"
              time-picker
              locale="es-ar"
              position="left"
              uid="timeMeasure"
              @update:modelValue="handleTime"
            >
              <template #input-icon>
                <span class="icon-Datepicker">⏰</span>
              </template>
            </Datepicker>
          </div>
        </div>
        <div class="columns">
          <div class="column is-6">
            <div class="field has-addons">
              <div class="control has-icons-left has-icons-right">
                <input class="input" type="number" placeholder="Medida" v-model="dataMeasure.Measure" />
                <span class="icon is-left"> 📏 </span>
              </div>
              <p class="control">
                <a class="button is-static">
                  ml
                </a>
              </p>
            </div>
          </div>
          <div class="column is-6">
            <div class="field">
              <p class="control has-icons-left">
                <span class="select">
                  <select id="selectMilks" v-model="dataMeasure.IdMilk">
                    <option disabled value="0">Leches</option>
                    <option v-for="(m,index) in milks" :key="index" :value="m.IdMilk">{{m.Name}}</option>
                  </select>
                </span>
                <span class="icon is-small is-left"> 🍼 </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" @click="insertMeasure">Guardar</button>
        <button class="button" @click="closeModal">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { useShowModalStore } from "@/stores/showModal";
import { useMeasureMilkstore } from '@/stores/measureMilks';
import measureMilks from "../../services/measureMilk";

export default {
  setup() {
    const state = useShowModalStore();
    const stateMeasureMilks = useMeasureMilkstore()

    const date = ref(new Date());
    const format = (date) => {
      const day = date.getDate().toString();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      return `${day <= 9 ? `0${day}` : `${day}`}-${month <= 9 ? `0${month}` : `${month}`}-${year}`;
    }
    const month = ref({
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
    });
    const time = ref({
      hours: new Date().getHours(),
      minutes: new Date().getMinutes(),
    });
    function closeModal() {
      state.closeModal();
    }
    const handleDate = (modelData) => {
      date.value = modelData;
    }
    const handleTime = (modelData) => {
      time.value = modelData;
    }
    return {
      state,
      stateMeasureMilks,
      closeModal,
      date,
      format,
      month,
      time,
      handleDate,
      handleTime
    };
  },
  mixins: [],
  data() {
    return {
      date: this.date,
      time: this.time,
      dataMeasure: {
        Date: '',
        Time: '',
        Measure: 10,
        IdMilk: 0,
        IdBaby: 1
      },
      milks: []
    }
  },
  components: { Datepicker },
  computed(){
    return this.stateMeasureMilks.measureMilks
  },
  created() {
    measureMilks.listMilks().then(res => {
      this.milks = res.data.body;
    })
  },
  methods: {
    insertMeasure() {
      if (this.dataMeasure.IdMilk === 0) {
        this.closeModal();
        return;
      }

      const day = this.date.getDate().toString();
      const month = this.date.getMonth() + 1;
      const year = this.date.getFullYear();
      const hours = this.time.hours;
      const minutes = this.time.minutes;
      this.dataMeasure.Date = `${day <= 9 ? `0${day}` : `${day}`}-${month <= 9 ? `0${month}` : `${month}`}-${year}`;
      this.dataMeasure.Time = `${hours <= 9 ? `0${hours}` : `${hours}`}:${minutes <= 9 ? `0${minutes}` : `${minutes}`}`;

      measureMilks.insert(this.dataMeasure).then(res => {
        this.stateMeasureMilks.getMeasureMilks();
        this.closeModal();
      });
    }
  },
};
</script>
<style lang="scss" scoped>
.modal {
  margin-top: -200px !important;
}
.icon-Datepicker {
  margin: 8px;
}

.select, #selectMilks {
  width: 100%;
}
</style>
