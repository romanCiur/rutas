<template>
    <div id="linear" class="container-fluid bg-light">
         <div class="opcion text-right">
        <b-form-select v-model="selectedColumn" @change="selectColumn()" size="sm" class="col-md-3 my-3">
            <option :value="null" disabled>Please select an option</option>
            <option v-bind:key="index" :value="column" v-for="(column, index) in googlePlayAppsColumns">{{column}}</option>
        </b-form-select>
        <Lineas v-if="this.googlePlayApps.length > 0" :ycolumn="selectedColumn" :data="googlePlayApps"></Lineas>
         </div>
    </div>
</template>
<script>
import Lineas from "@/components/Lineas.vue";
import * as d3 from "d3";
export default {
    name: "Linear",
    components:{
        Lineas
    },
    data(){
        return{
            data:[],
            selected: "Reviews",
            googlePlayApps:[],
            googlePlayAppsColumns: [],
            selectedColumn: "Reviews"
        }
    },
    mounted(){
        d3.csv("/assets/data.csv").then(apps => {
            //data = data.slice(0, 70);
            //console.log(data);
            this.googlePlayApps = apps;
            this.googlePlayAppsColumns = Object.keys(this.googlePlayApps[0]);
        });
    }
}
</script>
<style lang="scss" scoped>

</style>
