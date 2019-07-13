<template>
    <div id="lineas">
        <svg></svg>
    </div>
</template>
<script>
import * as d3 from "d3";
export default {
    namme: "lineas",
    props:{
     data: Array,
     ycolumn: String
  },
    components:{

    },
    watch:{
      ycolumn: function(/*newVal, oldVal*/) {
      //console.log(newVal, oldVal);
      this.drawLines();
     }
    },
    methods:{
        drawLines() {
      const margin = {
        top: 50,
        right: 50,
        bottom: 50,
        left: 50
      };
      const width = 900 - margin.left - margin.right;
      const height = 500 - margin.top - margin.bottom;
      
      //para volver a crear, dibujar el svg
      d3.select("#lineas svg").remove();

    const data = this.data.slice(0, 70);

        const xScale = d3.scaleLinear()
          .domain([0, d3.max(data.map(d => d.app))])
          .range([0, width]);

        const yScale = d3.scaleLinear()
          .domain([0, d3.max(data.map(d => Number(d[this.ycolumn])))])
          .range([height, 0]);

        const line = d3.line()
          .x((d, i) => xScale(i + 1))
          .y(d => yScale(Number(d[this.ycolumn])))
          .curve(d3.curveMonotoneX);

        const svg = d3.select('#lineas')
          .append('svg')
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
          .attr('transform', `translate(0, 0)`)
          .call(d3.axisLeft(yScale))
          .append('text')
          .attr('fill', '#000')
          .attr('transform', 'rotate(-90)')
          .attr('y', 6)
          .attr('dy', '0.71em')
          .attr('text-anchor', 'end')
          .text(this.ycolumn);

        svg.append('path')
          .datum(data)
          .attr('class', 'line')
          .attr('d', line);

        d3.selectAll(".x.axis .tick text")
          .attr("text-anchor", "start")
          .attr("transform", "rotate(90)")
          .attr('dx', '0.71em');
     }
   },
   mounted(){
       this.drawLines();
   }    
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto");

#lineas {
  background: #eee;
}
</style>
