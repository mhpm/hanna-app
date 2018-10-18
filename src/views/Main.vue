<template>
  <div class="main">
      <div class="text-center">
        <h2>CREA BOTÓN WHATSAPP</h2>
        <p v-show="!ready">Ingrese el número y el mensage que desea enviar</p>
      </div>
      
      <br><br><br>
      <section v-show="!ready">
        <transition mode="out-in" enter-active-class="animated flash">
          <small v-if="error != ''">{{error}}</small>
        </transition>
        <br>
        
        <label>Tu número</label>
        <div class="inline-group">
          <div class="field">
            <input v-model="Liga.number" type="number" :disabled="!statusEdit">
          </div>
          <div class="field">
            <button v-show="statusEdit" @click="GuardarCell" :disabled="Liga.number == ''" class="btn bg-green">GUARDAR</button>
          </div>
          <div class="field">
            <button v-show="statusEdit" @click="statusEdit = !statusEdit" class="btn bg-none"><i style="padding:0px" class="fas fa-times"></i></button>
            <button v-show="!statusEdit" @click="statusEdit = !statusEdit" class="btn bg-none"><i style="padding:0px" class="fas fa-edit"></i></button>
          </div>
        </div>
          
        <label>Tu mensage</label>
        <div class="field">
          <textarea v-model="Liga.msg"></textarea>
        </div>

        <div class="field text-center">
          <button class="btn bg-green" @click="GenerarLiga" :disabled="statusEdit || Liga.number == '' || Liga.msg == ''">GENERAR LIGA</button>
        </div>

      </section>

    <section v-show="ready" class="text-center">
      <img width="150" alt="Vue logo" src="../assets/success.png"><br><br><br>
      <div class="field">
        <a id="liga" target="blank" :href="Liga.url">{{Liga.url}}</a>
      </div><br><br>

      <div class="field">
        <button class="btn bg-green" @click="CopyUrl">COPIAR LIGA</button>
      </div>
      <br>
      <div class="field">
        <button class="btn bg-none" @click="ready = !ready">EDITAR</button>
      </div>

    </section>

    <transition mode="out-in" enter-active-class="animated flash" :duration="500">
        <div v-show="alert" class="alert">
          {{mensage}}
        </div>
    </transition>
  
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "Main",
  data() {
    return {
      alert: false,
      mensage: "Texto copiado",
      error: "",
      statusEdit: true,
      Liga: {
        id: "",
        number: "6462391197",
        msg: "lorem ipsu lorem ipsu",
        url: "",
        cant: 0,
        date: null
      },
      ready: false
    };
  },
  methods: {
    async GenerarLiga() {
      let vm = this;
      let format = await encodeURIComponent(this.Liga.msg.trim());
      vm.Liga.url = `https://wa.me/52${this.Liga.number}?text=${format}`;

      let exists = false;
      vm.$store.state.Ligas.forEach(function(liga) {
        if (liga.id == vm.Liga.id) {
          liga.number = vm.Liga.number;
          liga.url = vm.Liga.url;
          liga.date = moment().format("DD/MM/YYYY, h:mm:ss");
          exists = true;
        }
      });

      if (!exists) this.$store.state.Ligas.push(vm.Liga);

      vm.ready = true;
    },
    CopyUrl() {
      console.log(this.$store.state.Ligas);

      let url = document.getElementById("liga").getAttribute("href");
      let dummy = document.createElement("input");
      document.body.appendChild(dummy);
      dummy.setAttribute("id", "dummy_id");
      document.getElementById("dummy_id").value = url;
      dummy.select();
      document.execCommand("copy");
      document.body.removeChild(dummy);

      this.$swal({
        position: "center",
        type: "success",
        title: "Liga Copiada!",
        showConfirmButton: false,
        timer: 1000
      });
    },
    GuardarCell() {
      let vm = this;
      vm.statusEdit = false;

      let exists = false;
      vm.$store.state.Ligas.forEach(function(liga) {
        if (liga.id == vm.Liga.id) {
          vm.Liga.id = liga.id;
          exists = true;
          liga.number = vm.Liga.number;
          vm.$swal({
            position: "center",
            type: "success",
            title: "Numero Actualizado!",
            showConfirmButton: false,
            timer: 1000
          });
        }
      });

      if (!exists) {
        vm.Liga.id =
          "_" +
          Math.random()
            .toString(36)
            .substr(2, 9);
        vm.$store.state.Ligas.push(vm.Liga);
        this.$swal({
          position: "center",
          type: "success",
          title: "Numero Guardado!",
          showConfirmButton: false,
          timer: 1000
        });
      }
      console.log(this.$store.state.Ligas);
    }
  }
};
</script>

<style scoped>
.inline-group {
  display: flex;
}

.inline-group :first-child {
  flex: 1;
}
</style>
