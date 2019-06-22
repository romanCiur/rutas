<template>
  <div id="graph">
    <div class="container">
        <div class="row">
            <div class="col">
                <div id="histograma">
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
  components:{},
  data (){
      return{

      }
  },
  methods: {
      drawHistogram(){
      const margin = {
        top:20,
        right:20,
        bottom:30,
        left:50
      };
      const width = 500;
      const height = 500;

     const svg = d3.select("#histogram svg")
     .attr("width", width + margin.left + margin.right)
     .attr("height", height + margin.top + margin.bottom);

     const g = svg.append("g")
          .attr("transform",`translate(${margin.left},${margin.top})`);

     const x = d3.scaleBand()
     .rangeRound([0, width])
     .padding(0, 1);

     const y = d3.scaleLinear()
     .rangeRound([height, 0]);


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

          g.append("g")
            .call(d3.axisLeft(y));


            g.append('g')
          .call(d3.axisLeft(y))
          .append('text')
          .attr('fill', '#000')
          .attr('transform', 'rotate(-90)')
          .attr('y', 6)
          .attr('dy', '0.71em')
          .attr('text-anchor', 'end')
          .text('Video Uploads');
        g.selectAll('.bar')
          .data(data)
          .enter()
          .append('rect')
          .attr('class', 'bar')
          .attr('x', d => x(Number(d.Rank.slice(0, -2))))
          .attr('y', d => y(Number(d['Video Uploads'])))
          .attr('width', x.bandwidth())
          .attr('height', d => height - y(Number(d['Video Uploads'])));

        });
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
#graph {
  background: #eee;
}
</style>
