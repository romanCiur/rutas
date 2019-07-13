<template>
  <div class="home bg-light">
    <div class="container bg-light">
      <div class="row">
        <div class="tarjeta col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
          <section>
            <div class="card border-light" style="width: 20rem;">
              <img src="@/assets/graphs.svg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5
                  class="card-title font-weight-bold text-monospace text-secondary"
                >Visualización de datos</h5>
              </div>
            </div>
          </section>
        </div>
        <div class="col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
          <div class="caja p-4">
            <div id="imagen">
              <img 
                v-b-tooltip.hover
                src="@/assets/vue.svg"
                class="card-img"
                alt="VUE"
                title="VUE"
              />
              
            </div>
            <div id="imagen">
              <img
                v-b-tooltip.hover
                src="@/assets/d3.svg"
                class="card-img"
                alt="D3"
                title="D3"
              />
            </div>
            <div id="imagen">
              <img
                v-b-tooltip.hover
                src="/img/icons/database.svg"
                class="card-img"
                alt="database"
                title="database"
              />
            </div>
            <div id="imagen">
              <img
                v-b-tooltip.hover
                src="/img/icons/git.svg"
                class="card-img"
                alt="git"
                title="Git"
              />
            </div>
            <div id="imagen">
              <img
                v-b-tooltip.hover
                src="/img/icons/github_badge.svg"
                class="card-img"
                alt="github"
                title="Github"
              />
            </div>
            <div id="imagen">
              <img
                v-b-tooltip.hover
                src="/img/icons/html5.svg"
                class="card-img"
                alt="html5"
                title="HTML5"
              />
            </div>
            <div id="imagen">
              <img
                v-b-tooltip.hover
                src="/img/icons/js_badge.svg"
                class="card-img"
                alt="javascript"
                title="JAVASCRIPT"
              />
            </div>
            <div id="imagen">
              <img
                v-b-tooltip.hover
                src="/img/icons/nodejs_small.svg"
                class="card-img"
                alt="nodejs"
                title="NODE_JS"
              />
            </div>
            <div id="imagen">
              <img
                v-b-tooltip.hover
                src="/img/icons/bootstrap.svg"
                class="card-img"
                alt="BOOTSTRAP"
                title="BOOTSTRAP"
              />
            </div>
            <div id="imagen">
              <img
                v-b-tooltip.hover
                src="@/assets/chartjs-logo.svg"
                class="card-img"
                alt="chartjs"
                title="CHART_JS"
              />
            </div>
            <div id="imagen">
              <img
                v-b-tooltip.hover
                src="/img/icons/css3.svg"
                class="card-img"
                alt="CSS3"
                title="CSS3"
              />
            </div>
            <div id="imagen">
              <img
                v-b-tooltip.hover
                src="@/assets/firebase.svg"
                class="card-img"
                alt="FIREBASE"
                title="FIREBASE"
              />
            </div>
            <div id="imagen" class="d-flex align-items-center justify-content-center">
              <img
                v-b-tooltip.hover
                src="@/assets/leaflet.svg"
                class="card-img"
                alt="LEAFLET"
                title="LEAFLET"
              />
            </div>
            <div id="imagen">
              <img
                v-b-tooltip.hover
                src="/img/icons/mapbox.svg"
                class="card-img"
                alt="MAPBOX"
                title="MAPBOX"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {}
};
</script>
<style lang="scss" scoped>
.tarjeta {
  width: 100%;
  height: 100vh;
}
#a {
  background-color: whitesmoke;
  .txt {
    font-size: 10vmin;
  }
  figure {
    #graph {
      width: 100vmin;
      height: 100vmin;
      margin: auto;
    }
  }
}
.caja {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
  grid-auto-rows: auto;
  grid-auto-flow: dense;
  place-self: center;
  grid-gap: 15px;
  #imagen {
    width: 60px;
    height: 60px;
    margin: auto;
  }
}
</style>

