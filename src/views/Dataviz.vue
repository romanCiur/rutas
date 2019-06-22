<template>
  <div id="graph">
    <div class="container">
      <div class="row">
        <div class="col">
          <div id="histogram">
            <svg></svg>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div id="linea">
            <svg></svg>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div id="line">
            <svg></svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as d3 from "d3";
export default {
  name: "Graph",
  components: {},
  data() {
    return {};
  },
  methods: {
    drawHistogram() {
      const margin = {
        top: 20,
        right: 20,
        bottom: 30,
        left: 50
      };
      const width = 500;
      const height = 500;

      const svg = d3
        .select("#histogram svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom);

      const g = svg.append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      const x = d3.scaleBand()
        .rangeRound([0, width])
        .padding(0, 1);

      const y = d3.scaleLinear().rangeRound([height, 0]);

      d3.csv("/assets/data2.csv").then(data => {
        console.log(data);

        data = data.slice(0, 20);

        x.domain(data.map(d => Number(d.Rank.slice(0, -2))));
        //console.log(data.map(d => d.Rank))
        y.domain([0, d3.max(data.map(d => Number(d["Video Uploads"])))]);
        //console.log(data.map(d => d["Video Uploads"]))

        g.append("g")
          .attr("transform", `translate(0,${height})`)
          .call(d3.axisBottom(x));

        g.append("g").call(d3.axisLeft(y));

        g.append("g")
          .call(d3.axisLeft(y))
          .append("text")
          .attr("fill", "#000")
          .attr("transform", "rotate(-90)")
          .attr("y", 6)
          .attr("dy", "0.71em")
          .attr("text-anchor", "end")
          .text("Video Uploads");
        g.selectAll(".bar")
          .data(data)
          .enter()
          .append("rect")
          .attr("class", "bar")
          .attr("fill", "#2c3e50")
          .attr("x", d => x(Number(d.Rank.slice(0, -2))))
          .attr("y", d => y(Number(d["Video Uploads"])))
          .attr("width", x.bandwidth())
          .attr("height", d => height - y(Number(d["Video Uploads"])));
      });
    },
    drawLines() {
      const margin = {
        top: 50,
        right: 50,
        bottom: 50,
        left: 50
      };
      const width = 960 - margin.left - margin.right;
      const height = 500 - margin.top - margin.bottom;
      d3.csv("/assets/data2.csv").then(data => {
        data = data.slice(0, 70);
//console.log(data);
        const xScale = d3.scaleLinear()
          .domain([0, d3.max(data.map(d => Number(d.Rank.slice(0, -2))))])
          .range([0, width]);
        const yScale = d3.scaleLinear()
          .domain([0, d3.max(data, d => Number(d['Video Uploads']))])
          .range([height, 0]);
        const line = d3.line()
          .x((d, i) => xScale(i + 1))
          .y(d => yScale(Number(d['Video Uploads'])))
          .curve(d3.curveMonotoneX);
        const svg = d3.select('#linea svg')
          .attr('width', width + margin.left + margin.right)
          .attr('height', height + margin.top + margin.bottom)
          .append('g')
          .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
        svg.append("g")
          .attr('class', 'x axis')
          .attr('transform', 'translate(0,' + height + ')')
          .call(d3.axisBottom(xScale));
        svg.append('g')
          .attr('class', 'y axis')
          .attr('transform', 'translate(0, 0)')
          .call(d3.axisLeft(yScale));
        svg.append('path')
          .datum(data)
          .attr('class', 'line')
          .attr('d', line);
      });
    },
    async drawLine() {
      const margin = {
        top: 50,
        right: 50,
        bottom: 50,
        left: 50
      };
      const width = 960 - margin.left - margin.right;
      const height = 500 - margin.top - margin.bottom;
      d3.csv("/assets/data2.csv").then(async data => {
        for (var i = 0; i < 280; i = i + 70) {
          await new Promise((resolve) => {
            setTimeout(() => {
              d3.select("#line svg .line").remove();
              d3.selectAll("#line svg .axis").remove();

              const _data = data.slice(i, i + 70);
              const min = d3.min(_data.map(d => Number(d.Rank.slice(0, -2))));
              const max = d3.max(_data.map(d => Number(d.Rank.slice(0, -2))));
              console.log(_data, min, max);
              const xScale = d3.scaleLinear()
                .domain([min, max])
                .range([0, width]);
              const yScale = d3.scaleLinear()
                .domain([0, d3.max(_data, d => Number(d["Video Uploads"]))])
                .range([height, 0]);
              const line = d3.line()
                .x((d, i) => xScale(min + i + 1))
                .y(d => yScale(Number(d["Video Uploads"])))
                .curve(d3.curveMonotoneX);
              const svg = d3.select("#line svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr(
                  "transform",
                  "translate(" + margin.left + "," + margin.top + ")"
                );
              svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(xScale));
              svg.append("g")
                .attr("class", "y axis")
                .attr("transform", '(0,0)')
                .call(d3.axisLeft(yScale));
              svg.append("path")
                .datum(_data)
                .attr("class", "line")
                .attr("d", line);
              resolve(true);
            }, 1000);
          });
        }
      });
    }
  },
  mounted() {
    //histograma
    this.drawHistogram();
    //lineas
    this.drawLines();
    //lineas animadas
    this.drawLine();
  }
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto");
#graph {
  background: #eee;
}
</style>

