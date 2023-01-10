<template>
  <div>
    <button class="button is-rounded" @click="openModal">
      <span class="mdi mdi-plus-circle"></span>
    </button>
    <BappModal />
  </div>
</template>

<script>
import BappModal from '@/components/Layout/Modal.vue';
import { useShowModalStore } from '../../stores/showModal';

export default {
  setup() {
      const state = useShowModalStore()
      function openModal() {
        state.openModal()
      }
      function closeModal() {
        state.closeModal()
      }
      return {
        state, openModal, closeModal
      }
  },
  mixins: [],
  // data() {
  //   return {
  //     track: {}
  //   }
  // },
  components: { BappModal },
  props: {
  },  
  computed: {
   
  },
  created() {
    
  },
  methods: {
    
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add('is-active');
  }

  function closeModal($el) {
    $el.classList.remove('is-active');
  }

  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener('keydown', (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) { // Escape key
      closeAllModals();
    }
  });
});

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