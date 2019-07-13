<template>
  <div class="StarbucksStores">
    <loading :active.sync="isLoading" :is-full-page="fullPage"></loading>
    <div class="container">
      <div class="row">
        <div class="col-12 mb-3 py-3">
          <h2 class="h2 text-uppercase m-auto">Starbucks Stores CDMX</h2>
          <div class="container bg-light py-1 d-flex align-items-center justify-content-end">
            <img src="img/icons/location2.svg" class="mr-auto"/>
            <span class="text-monospace">ver mapa</span>
            <switches
              class="pt-4 px-2"
              v-model="mapaSwitch"
              theme="bootstrap"
              color="primary"
              type-bold="true"
            ></switches>
          </div>
          <Mapa v-if="mapaSwitch && cdmxStores.length > 0" :locations="cdmxStores"></Mapa>
          <div v-else class="bg-light">
            <tabla :items="cdmxStores" title="Starbucks Stores MX"></tabla>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Mapa from "@/components/Mapa.vue";
import Tabla from "@/components/Tabla.vue";
import * as d3 from "d3";
import Switches from "vue-switches";
import Loading from "vue-loading-overlay";

export default {
  name: "StarbucksStores",
  components: {
    Mapa,
    Switches,
    Tabla,
    Loading
  },
  data() {
    return {
      cdmxStores: [],
      mapaSwitch: false,
      isLoading: false
    };
  },
  methods: {
    getStarbucksStores() {
      this.isLoading = true;
      d3.csv("/assets/directory.csv").then(stores => {
        //console.log(stores);
        const cdmxStores = stores.filter(s => s.City === "Mexico City");
        //console.log(cdmxStores);
        this.cdmxStores = cdmxStores;
        this.isLoading = false;
      });
    }
  },
  mounted() {
    this.getStarbucksStores();

    //------------------------------

    d3.csv("/assets/directory.csv").then(stores => {
      //console.log(stores);
      const cdmxStores = stores.filter(s => s.City === "Mexico City");
      //console.log(cdmxStores);
      this.cdmxStores = cdmxStores;
    });
  }
};
</script>


<style lang="scss">
#StarbucksStores {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>


