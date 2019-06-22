<template>
  <div id="googleapps">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-4 py-4">
          <tabla :items="version" :fields="version_fields" :title="version_title"></tabla>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-4 py-4">
          <tabla :items="device" :fields="device_fields" :title="device_title"></tabla>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-4 py-4">
          <tabla :items="system" :fields="system_fields" :title="system_title"></tabla>
        </div>
      </div>
      <div class="row">
        <div class="col-12 pb-2">
          <tabla :items="issue" :fields="issue_fields" :title="issue_title"></tabla>
        </div>
      </div>
      <!-- nueva tabla D3 -->
      <div class="row">
        <div class="col-12 mb-3 py-4">
          <tabla :items="data" title="Google play"></tabla>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-4 mb-3 py-4">
          <switches v-model="versionSwitch" theme="bootstrap" color="primary" type-bold="true"></switches>
          <tabla v-if="versionSwitch" :items="categories" title="Google play category"></tabla>
          <div v-else class="bg-white">
            <Grafica v-if="etiquetas.length > 0 && valor.length > 0" nameID="Categories" :labels="etiquetas" :data="valor"></Grafica>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-4 mb-3 py-4">
          <switches v-model="deviceSwitch" theme="bootstrap" color="primary" type-bold="true"></switches>
          <tabla v-if="deviceSwitch" :items="genres" title="Google play Genres"></tabla>
          <div v-else class="bg-white">
            <Grafica v-if="nombre.length > 0 && valorr.length > 0" nameID="Genres" :labels="nombre" :data="valorr"></Grafica>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-4 mb-3 py-4">
          <switches v-model="systemSwitch" theme="bootstrap" color="primary" type-bold="true"></switches>
          <tabla v-if="systemSwitch" :items="ratings" title="Google play Ratings"></tabla>
          <div v-else class="bg-white">
            <Grafica v-if="nombres.length > 0 && valorrr.length > 0" nameID="Ratings" :labels="nombres" :data="valorrr"></Grafica>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tabla from "@/components/Tabla.vue";
import Grafica from "@/components/grafica.vue";
import * as d3 from "d3";
import Switches from "vue-switches";


export default {
  name: "Googleapps",
  components: {
    Tabla,
    Switches,
    Grafica
  },
  data() {
    return {
      genres:[],
      ratings:[],
      etiquetas:[],
      valor:[],
      nombre:[],
      valorr:[],
      nombres:[],
      valorrr:[],
      versionSwitch: false,
      deviceSwitch: false,
      systemSwitch: false,
      data:[],
      categories:[],
      version_title: "Crashes by version",
      version_fields: [
        "index",
        { key: "Version", sortable: false },
        { key: "Events", sortable: true },
        { key: "Users", sortable: false }
      ],
      version: [
        { Version: "2.64", Events: "5.694", Users: "4.499" },
        { Version: "2.63", Events: "3.700", Users: "3.172" },
        { Version: "2.62", Events: "1.606", Users: "1.489" }
      ],
      device_title: "Crashes by device",
      device_fields: [
        "index",
        { key: "Device_model", sortable: false },
        { key: "Events", sortable: true },
        { key: "Users", sortable: false }
      ],
      device: [
        { Device_model: "ONEPLUS A3003", Events: "3.975", Users: "3.335" },
        { Device_model: "Mi A1", Events: "3.126", Users: "2.734" },
        { Device_model: "Pixel 2 XL", Events: "2.189", Users: "1.990" },
        { Device_model: "Pixel 2", Events: "1.264", Users: "1.202" },
        { Device_model: "SM-G950F", Events: "446", Users: "439" }
      ],
      system_title: "Crashes by operating system",
      system_fields: [
        "index",
        { key: "Operating_System", sortable: false },
        { key: "Events", sortable: true },
        { key: "Users", sortable: false }
      ],
      system: [
        { Operating_System: "9", Events: "4.005", Users: "3.374" },
        { Operating_System: "7.1.1", Events: "3.024", Users: "2.657" },
        { Operating_System: "8.1.0", Events: "2.212", Users: "1.994" },
        { Operating_System: "7.0", Events: "1.312", Users: "1.239" },
        { Operating_System: "8.0.0", Events: "447", Users: "437" }
      ],
      issue_title: "Issues list",
      issue_fields: [
        "index",
        { key: "Issue", sortable: false },
        { key: "Blame_Frame", sortable: false },
        { key: "Version", sortable: false },
        { key: "Events", sortable: true },
        { key: "Users", sortable: false }
      ],
      issue: [
        {
          Issue: "ProgressiveMode.java - line 20",
          Blame_Frame: "com.labpixies.flood.ProgressiveMode.getLevel",
          Version: "2.64",
          Events: "4.791",
          Users: "3.916"
        },
        {
          Issue: "AdHelper.java - line 111",
          Blame_Frame: "com.labpixies.flood.AdHelper.populateAppInstallAdView",
          Version: "2.63",
          Events: "3.599",
          Users: "3.094"
        },
        {
          Issue: "ExtraStepsActivity.java - line 145",
          Blame_Frame: "com.labpixies.flood.ExtraStepsActivity.setUpPackage",
          Version: "2.62",
          Events: "1.411",
          Users: "1.320"
        },
        {
          Issue: "AdHelper.java - line 150",
          Blame_Frame: "com.labpixies.flood.AdHelper.populateAppInstallAdView",
          Version: "2.64",
          Events: "802",
          Users: "781"
        },
        {
          Issue: "ProgressiveMode.java - line 20",
          Blame_Frame: "com.labpixies.flood.ProgressiveMode.getLevel",
          Version: "2.62",
          Events: "195",
          Users: "194"
        },
        {
          Issue: "FloodItActivity.java - line 662",
          Blame_Frame:
            "com.labpixies.flood.FloodItActivity.shouldShowInterstitialAd",
          Version: "2.63",
          Events: "101",
          Users: "100"
        },
        {
          Issue: "FloodItActivity.java - line 144",
          Blame_Frame: "com.labpixies.flood.FloodItActivity.onCreate",
          Version: "2.64",
          Events: "101",
          Users: "101"
        }
      ]
    };
  },
  mounted() {
    d3.csv("/assets/data.csv").then(apps => {
      //console.log(apps);
      this.data = apps;

      const categories = d3.nest()
        .key(d => d.Category)
        .rollup(d => d.length)
        .entries(apps);

      /* se cambia el nombre de cada columna*/
//------------------------------------------------------
      const categorias = categories.map(function(c){
        return{
          Category: c.key,
          App: c.value 
        }
      });
      categorias.forEach(function(){
        console.log(categorias);
      });
//------------------------------------------------------      

      this.categories = categorias;

      categories.sort((a, b) => b.value - a.value);

      this.etiquetas = categories.map(c => c.key);
      //console.log(etiquetas);

      this.valor = categories.map(c => c.value);
      //console.log(valor);

//datos de la segunda grafica
      const genres = d3.nest()
        .key(d => d.Genres)
        .rollup(d => d.length)
        .entries(apps);

      this.genres = genres;

      genres.sort((a, b) => b.value - a.value);
      this.nombre = genres.map(s => s.key);
      //console.log(nombre);

      this.valorr = genres.map(s => s.value);
      //console.log(valorr);

//datos de la tercer grafica
     const ratings = d3.nest()
        .key(d => d.Rating)
        .rollup(d => d.length)
        .entries(apps);  

      this.ratings = ratings;

      ratings.sort((a, b) => b.value - a.value);
      this.nombres = ratings.map(c => c.key);
      console.log(this.nombres);

      this.valorrr = ratings.map(c => c.value);
      //console.log(valorrr);

    });
  }
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto");
#googleapps {
  background: #eeeeee;
}
</style>