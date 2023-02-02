<template>
  <section class="hero is-success">
    <div class="hero-head">
      <header class="navbar">
        <div class="container">
          <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
              <a class="navbar-item" href="/">
                <strong> 👶🏻 BabyApp 🍼 </strong>
              </a>
              <a
                role="button"
                class="navbar-burger"
                :class="{
                  'is-active': menuMobileIsActive,
                  '': !menuMobileIsActive,
                }"
                @click="menu"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
            <div
              id="navbarBabyApp"
              class="navbar-menu"
              :class="{
                'is-active': menuMobileIsActive,
                '': !menuMobileIsActive,
              }"
            >
              <div class="navbar-start">
                <router-link class="navbar-item" to="historico"
                  >Historico</router-link
                >
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
    <!-- <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">Baby App</h1>
        <h2 class="subtitle"></h2>
      </div>
    </div> -->
  </section>
</template>

<style scoped>
.navbar-item:focus-within {
  background-color: #e9c9eb;
  color: white;
}
.router-link-active, .router-link-exact-active{
  background-color: #e9c9eb;
  color: #bf48c7;
}
</style>

<script>
export default {
  data() {
    return {
      menuMobileIsActive: false,
    };
  },
  components: {},
  methods: {
    menu() {
      if (this.menuMobileIsActive) {
        this.menuMobileIsActive = false;
      } else {
        this.menuMobileIsActive = true;
      }
    },
  },
};
</script>
