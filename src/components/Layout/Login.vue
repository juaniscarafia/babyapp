<template>
  <section class="hero is-primary is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-3-widescreen">
            <form action="" class="box">
              <div class="field">
                <label for="" class="label">Email</label>
                <div class="control has-icons-left">
                  <input type="email" placeholder="e.g. bobsmith@gmail.com" class="input" required>
                  <span class="icon is-small is-left">
                    📧
                  </span>
                </div>
              </div>
              <div class="field">
                <label for="" class="label">Password</label>
                <div class="control has-icons-left">
                  <input type="password" placeholder="*******" class="input" required>
                  <span class="icon is-small is-left">
                    🔐
                  </span>
                </div>
              </div>
              <div class="field">
                <button class="button">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useAccessStore } from '@/stores/access';
import login from "@/services/loginService";

export default {
  setup() {
    const stateAccess = useAccessStore()
    return {
      stateAccess
    }
  },
  data() {
    return {
      dataAccess: {
        name: "",
        password: ""
      }
    }
  },
  methods: {
    accessLogin(){
      login.access(this.dataAccess).then(res => {
        
      });
    }
  }
}
</script>

<style scoped>
.button{
  color: white;
  background-color: #bf48c7;
}
.button:hover{
  color: #bf48c7;
  background-color: white !important;
}
</style>
