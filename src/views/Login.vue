<template>
  <div class="login">
    <section>
    <br><br><br><br><br>
      <img width="150" alt="Vue logo" src="../assets/logo.png"><br><br><br>
      <br>
        <transition mode="out-in" enter-active-class="animated flash">
          <small v-if="error != ''">{{error}}</small>
        </transition>
        <br>
        <div class="field">
          <input placeholder="user" v-model="User.email" type="text">
        </div>
        <div class="field">
          <input placeholder="password" v-model="User.password" type="password">
        </div>
        <div class="field">
          <button class="btn bg-red btn-fill" @click="Login">INICIAR SESIÓN</button>
        </div>
        <div class="field">
          <router-link to="/">
            <a href="">Olvide mi contraseña</a>
          </router-link>
        </div>
    </section>
</div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      User: {
        email: "",
        password: ""
      },
      error: ""
    };
  },
  methods: {
    Login() {
      if (this.User.email === "" || this.User.password === "")
        this.error = "Campos requeridos";
      else {
        if (
          this.User.email == "usuario@gmail.com" &&
          this.User.password == "abc123"
        ) {
          this.$store.state.User = this.User;
          this.$router.push({ name: "Main", params: { User: true } });
        } else this.error = "Error de Usuario o Contraseña";
      }
    }
  }
};
</script>

<style scoped>
.login {
  text-align: center;
}

::-webkit-input-placeholder {
  color: #cecece;
}
</style>

