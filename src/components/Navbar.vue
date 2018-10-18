<template>
  <div class="navbar" id="myTopnav">
  <a href="#home">
    <img width="60" src="../assets/logo.png">
  </a>
  <router-link to="Historial">Historial</router-link>
  <router-link to="Main">Generar Ligas</router-link>
  <a class="icon" @click="ShowNavbar">
    <i style="color: #ea184d" class="fa fa-bars"></i>
  </a>
</div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    ShowNavbar() {
      var x = document.getElementById("myTopnav");
      if (x.className === "navbar") {
        x.className += " responsive";
      } else {
        x.className = "navbar";
      }
    }
  },
  beforeCreate() {
    if (!this.$store.state.User) this.$router.push({ name: "Login" });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  overflow: hidden;
  background-color: #fefefe;
  border-bottom: 1px solid #dbdbdb;
}

.navbar a {
  float: left;
  display: block;
  color: #ea184d;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.navbar a:hover {
  background-color: rgb(241, 241, 241);
  color: #ea184d;
}

.active {
  background-color: #4caf50;
  color: white;
}

.navbar .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .navbar a:not(:first-child) {
    display: none;
  }
  .navbar a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .navbar.responsive {
    position: relative;
  }
  .navbar.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .navbar.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>
