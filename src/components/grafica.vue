<template>
    <div id="barChart" class="mb-4">
        <canvas v-bind:id="nameID" width="400" height="400"></canvas>
    </div>
</template>
<script>
import Chart from "chart.js";

export default {
    name: "Grafica",
    props: {
        nameID:String,
        labels: Array,
        data: Array
    },
    methods: {
    drawBarChart(id, labels, data) {
      //grafica
      var ctx = document.getElementById(id);
      var myChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "# of " + id,
              data: data,
              backgroundColor: 
                "rgba(255, 99, 132, 1)"
              ,
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 1
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: 'Cantidad de ' + id
        },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }
      });
    }
  },
  mounted(){
      this.drawBarChart(this.nameID, this.labels, this.data);
  }
}
</script>
<style lang="scss">

</style>
