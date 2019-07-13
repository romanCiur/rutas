<template>
  <div id="Barras">
    <svg />
    <div id="tooltip" class="hidden">
      <p>
        <strong id="txt">Important Label Heading</strong>
      </p>
      <p>
        <span id="value">100</span>%
      </p>
    </div>
  </div>
</template>
<script>
import * as d3 from "d3";
export default {
  name: "Barras",
  props: {
    data: Array,
    ycolumn: String
  },
  watch: {
    ycolumn: function(/*newVal, oldVal*/) {
      //console.log(newVal, oldVal);
      this.drawHistogram();
    }
  },
  methods: {
    drawHistogram() {
      const margin = {
        top: 20,
        right: 20,
        bottom: 50,
        left: 80
      };
      const width = 900 - margin.left - margin.right;
      const height = 600 - margin.top - margin.bottom;

      //para volver a crear, dibujar el svg
      d3.select("#Barras svg").remove();

      const svg = d3
        .select("#Barras")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom);

      const g = svg
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      const data = this.data.slice(0, 50);

      const x = d3.scaleBand()
        .domain(data.map(d => d.App))
        .rangeRound([0, width])
        .paddingInner(0.2);

      const y = d3
        .scaleLinear()
        .domain([0, d3.max(data.map(d => Number(d[this.ycolumn])))])
        .rangeRound([height, 0]);

      g.append("g")
        .attr("class", "x axis")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x));

      g.append("g")
        .call(d3.axisLeft(y))
        .append("text")
        .merge(g)
        .attr("fill", "#505050")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text(this.ycolumn);

      g.selectAll(".bar")
        .data(data)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("fill", "#F6B656")
        .attr("x", d => x(d.App))
        .attr("y", d => y(Number(d[this.ycolumn])))
        .attr("width", x.bandwidth())
        .attr("height", d => height - y(Number(d[this.ycolumn])))

        .on("mouseover", function(d) {
          d3.select(this)
            .transition()
            .duration(150)
            .attr("fill", "#E58429");

          // var xPosition = d3.mouse(this)[0] + x.bandwidth() / 2;
          // var yPosition = d3.mouse(this)[1] + 15;

          // console.log(xPosition, yPosition);
          // svg
          //   .append("text")
          //   .attr("id", "tooltip")
          //   .attr("x", xPosition)
          //   .attr("y", yPosition)
          //   .attr("text-anchor", "right")
          //   .attr("font-family", "Roboto")
          //   .attr("font-size", "12px")
          //   .attr("font-weight", "bolder")
          //   .attr("fill", "#505050")
          //   .text(d.App);
          //Get this bar's x/y values, then augment for the tooltip
          var xPosition = d3.mouse(this)[0] + x.bandwidth() / 2;
          var yPosition = d3.mouse(this)[1] + 80;
          //Update the tooltip position and value
          d3.select("#tooltip")
            .style("left", xPosition + "px")
            .style("top", yPosition + "px")
            .select("#txt")
            .text(d.App);
            d3.select("#tooltip")
            .select("#value")
            .text(d);
          //Show the tooltip
          d3.select("#tooltip").classed("hidden", false);
        })
        .on("mouseout", function() {
          d3.select(this)
            .transition()
            .duration(150)
            .attr("fill", "#F6B656");
          // d3.select("#tooltip").remove();
          //Hide the tooltip
          d3.select("#tooltip").classed("hidden", true);
        });

      d3.selectAll(".x.axis .tick text")
        .attr("text-anchor", "start")
        .attr("fill", "#635F5D")
        .attr("transform", "rotate(90)")
        .attr("shape-rendering", "crispEdges")
        .attr("dx", "0.71em");
    }
  },
  mounted() {
    //histograma
    this.drawHistogram();
  }
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto");
#Barras {
  background: #eee;
}
// .tooltip {
//   text-decoration: underline;
// }
#tooltip {
  position: absolute;
  width: 150px;
  height: auto;
  padding: 5px;
  background-color: #ffffffa6;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  -webkit-box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.4);
  pointer-events: none;
  text-align:justify;
}
#tooltip.hidden {
  display: none;
}
#tooltip p {
  margin: 0;
  font-family: "Roboto",sans-serif;
  font-size: 65%;
  line-height: 15px;
}
</style>