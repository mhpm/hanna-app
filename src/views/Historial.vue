<template>
  <div class="main">
      <div class="header text-center">
        HISTORIAL DE LIGAS CREADAS
      </div>
      
      <br><br>
      <section>
        <div v-for="(liga, index) in $store.state.Ligas" :key="index" class="grid-4">
          <div class="box">
            <div class="box-title">Fecha</div>
            <div class="box-contnet">
              {{liga.date}}
            </div>
          </div>
          <div class="box">
            <div class="box-title">Mensage</div>
            <div class="box-contnet">
              {{liga.msg}}
            </div>
          </div>
          <div class="box">
            <div class="box-title">Celular</div>
            <div class="box-contnet">
              {{liga.number}}
            </div>
          </div>
          <div class="box">
            <div class="box-title">Cantidad</div>
            <div class="box-contnet">
              <div class="grid-3">
                <div><strong>{{liga.cant}}</strong></div>
                <div><button @click="liga.cant++; CopyUrl(liga.url)" class="btn btn-sm bg-red "><i class="fas fa-copy"></i></button></div>
                <div><button class="btn btn-sm bg-blue"><i class="fas fa-edit"></i></button></div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {};
  },
  methods: {
    CopyUrl(url) {
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
    }
  }
};
</script>

<style scoped>
.main {
  padding-bottom: 50px;
}

.header {
  background-color: #ea184d;
  padding: 20px;
  color: white;
  font-size: 20px;
}

section {
  width: 90%;
  margin: auto;
}

.box {
  background: #ececec;
  padding: 5px;
}

.box-title {
  font-weight: bold;
  margin-bottom: 5px;
  color: #5c5c5c;
}

.grid-3 {
  display: grid;
  gap: 0.2em;
  grid-template-columns: 2fr 1fr 1fr;
}

.grid-4 {
  display: grid;
  gap: 0.1em;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-bottom: 7px;
  border-radius: 25px;
}

.box-contnet {
  color: #707070;
  font-size: 14px;
}

@media (max-width: 560px) {
  .grid-4 {
    grid-template-columns: 3fr 5fr;
  }
}
</style>
