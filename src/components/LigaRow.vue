<template>
<div>
    <div v-for="(liga, index) in data" :key="index" class="grid-4">
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
                <div><button @click="$router.push({name:'Main', params:{ ligaId: liga.id}})" class="btn btn-sm bg-blue"><i class="fas fa-edit"></i></button></div>
            </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  props: {
    data: Array
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
  text-overflow: ellipsis;
  overflow: hidden;
  width: 160px;
  white-space: nowrap;
}

@media (max-width: 560px) {
  .grid-4 {
    grid-template-columns: 3fr 5fr;
  }
}
</style>