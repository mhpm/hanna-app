<template>
  <div class="historial">
      <div class="header text-center">
        HISTORIAL DE LIGAS CREADAS
      </div>      
      <br><br>
      <section>
        <LigaRow :data="$store.state.Ligas"/>
      </section>
  </div>
</template>

<script>
import LigaRow from "../components/LigaRow";
export default {
  components: { LigaRow },
  name: "Historial",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.historial {
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
</style>
