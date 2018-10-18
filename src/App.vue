<template>
<div>
      <Navbar v-show="$route.name != 'Login'" />
      <transition mode="out-in" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" :duration="200">
          <router-view/>
    </transition>
</div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  components: {
    Navbar
  }
};
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
  font-family: "Montserrat", sans-serif;
}

.container {
  padding: 15px;
  margin: auto;
}

label {
  padding-left: 5px;
}

.field {
  margin: 5px;
  margin-bottom: 10px;
}

.field input {
  width: 100%;
  padding: 13px;
  color: #a1a1a1;
  border: 1px solid #bababa;
  border-radius: 3px;
  width: -webkit-fill-available;
}

.field textarea {
  width: 100%;
  height: 70px;
  padding: 10px;
  color: #a1a1a1;
  border: 1px solid #bababa;
  border-radius: 3px;
  width: -webkit-fill-available;
  resize: none;
}

.btn {
  color: white;
  padding: 13px;
  border-width: 1px;
  border-style: none;
  font-weight: bold;
  border-radius: 3px;
}

.btn-sm {
  padding: 5px 8px;
}

.btn:hover {
  box-shadow: 0px 0px 3px rgb(143, 143, 143);
  cursor: pointer;
}

.btn-fill {
  width: 100%;
}

small {
  color: #ea184d;
}

.bg-blue {
  background-color: #33495d !important;
}

.bg-red {
  background-color: #ea184d !important;
}

.bg-green {
  background-color: #159f85 !important;
}

.bg-none {
  background-color: transparent !important;
  color: #5d5d5d;
}

.text-center {
  text-align: center;
}

button:disabled,
button[disabled] {
  border: 1px solid #e2e2e2 !important;
  background-color: #cccccc !important;
  color: #8f8f8f;
}

section {
  width: 560px;
  margin: auto;
}

@media (max-width: 560px) {
  section {
    width: 100%;
    padding: 20px;
    width: auto;
  }

  .btn {
    width: 100%;
  }

  .field :first-child {
    padding: 15px;
  }
}
</style>
