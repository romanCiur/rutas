<template>
  <div id="Graph" class="container-fluid">
    <!-- <select v-if="googlePlayAppsColumns.length > 0" v-model="selectedColumn" @change="selectColumn()">
            <option value="" disabled>Select a column please</option>
            <option v-bind:key="index" :value="column" v-for="(column, index) in googlePlayAppsColumns">{{column}}</option>
    </select>-->
    <div class="opcion text-right">
      <b-form-select v-model="selectedColumn" @change="selectColumn()" size="sm" class="col-md-3 my-3">
        <option :value="null" disabled>Please select an option</option>
        <option v-bind:key="index" :value="column" v-for="(column, index) in googlePlayAppsColumns">{{column}}</option>
      </b-form-select>
      <Barras
        class="text-center"
        v-if="this.googlePlayApps.length > 0"
        :ycolumn="selectedColumn"
        :data="googlePlayApps"
      />
    </div>
  </div>
</template>
<script>
import Barras from "@/components/Barras.vue";
import * as d3 from "d3";
export default {
  name: "Graph",
  components: {
    Barras
  },
  data() {
    return {
      data: [],
      selected: "Reviews",
      googlePlayApps: [],
      googlePlayAppsColumns: [],
      selectedColumn: "Reviews"
    };
  },
  methods: {},
  mounted() {
    d3.csv("/assets/data.csv").then(apps => {
      this.googlePlayApps = apps;
      this.googlePlayAppsColumns = Object.keys(this.googlePlayApps[0]);
    });
  }
};
</script>
<style lang="scss" scoped>
#Graph {
  background: #f5f5f4;
  .opcion {
    #tooltip {
      position: absolute;
      width: 200px;
      height: auto;
      padding: 10px;
      background-color: white;
      -webkit-border-radius: 10px;
      -moz-border-radius: 10px;
      border-radius: 10px;
      -webkit-box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
      -moz-box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
      box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
      pointer-events: none;
    }
    #tooltip.hidden {
      display: none;
    }
    #tooltip p {
      margin: 0;
      font-family: sans-serif;
      font-size: 16px;
      line-height: 20px;
    }
  }
}
</style>
