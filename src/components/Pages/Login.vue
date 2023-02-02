<template>
  <section class="hero is-primary is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="container-img column is-5-tablet is-4-desktop is-3-widescreen">
            <img src="../../assets/img/01_1400.webp"/>
          </div>
          <div class="column is-5-tablet is-4-desktop is-3-widescreen">
            <div class="box">
              <div class="field">
                <label for="" class="label">Email</label>
                <div class="control has-icons-left">
                  <input
                    type="text"
                    placeholder="email@gmail.com"
                    class="input"
                    required
                    v-model="dataAccess.name"
                  />
                  <span class="icon is-small is-left"> 📧 </span>
                </div>
              </div>
              <div class="field">
                <label for="" class="label">Password</label>
                <div class="control has-icons-left">
                  <input
                    type="password"
                    placeholder="*******"
                    class="input"
                    required
                    v-model="dataAccess.password"
                  />
                  <span class="icon is-small is-left"> 🔐 </span>
                </div>
              </div>
              <div class="field">
                <button class="button" @click="accessLogin">Login</button>
              </div>
            </div>
          </div>
          <div class="container-img column is-5-tablet is-4-desktop is-3-widescreen">
            <img class="kiss" src="../../assets/img/02.webp"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useAccessStore } from "@/stores/access";
import login from "@/services/loginService";

export default {
  setup() {
    const stateAccess = useAccessStore();

    function Login() {
      stateAccess._access();
    }

    function Logout() {
      stateAccess._noAccess();
    }

    return {
      stateAccess,
      Login,
      Logout,
    };
  },
  data() {
    return {
      dataAccess: {
        name: "Nacho",
        password: "Luz04112022",
      },
    };
  },
  methods: {
    accessLogin() {
      login.access(this.dataAccess).then((res) => {
        this.stateAccess.user = res.data.body;
        this.Login();
        this.$router.push({ name: "home" });
      });
    },
  },
};
</script>

<style scoped>
.button {
  color: white;
  background-color: #bf48c7;
}
.button:hover {
  color: #bf48c7;
  background-color: white !important;
}
.container-img{
  display: flex;
  justify-content: center;
  height: 248px;
}
</style>
