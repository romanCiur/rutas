<template>
  <!-- <nav class="navbar navbar-light d-flex justify-content-start align-content-center">
    <img src="@/assets/indice.png" alt="logo">
    <span class="navbar-brand text-white px-2" href="#">Firebase Crashlytics</span>
    <router-link to="/">Home</router-link>
    <router-link to="/googleapps">GoogleApps</router-link>
    <router-link to="/starbucksStores">Starbuck</router-link>
    <router-link to="/datagraphs">Data</router-link>
    <router-link to="/Graph">Histograma</router-link>
    <router-link to="/Linear">Lineas</router-link>
  </nav> -->
  <div>
  <b-navbar toggleable="lg" type="dark" variant="faded">
    
        <b-navbar-brand href="#" right>
          <img src="@/assets/indice.png" class="d-inline-block align-top" alt="logo">
          <b-nav-text class="txt text-white pl-2">Firebase Crashlytics</b-nav-text>
        </b-navbar-brand>
    
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item><router-link to="/">Home</router-link></b-nav-item>
            <b-nav-item><router-link to="/googleapps">GoogleApps</router-link></b-nav-item>
            <b-nav-item><router-link to="/starbucksStores">Starbuck</router-link></b-nav-item>
            <b-nav-item><router-link to="/datagraphs">Data</router-link></b-nav-item>
            <b-nav-item><router-link to="/Graph">Histograma</router-link></b-nav-item>
            <b-nav-item><router-link to="/Linear">Lineas</router-link></b-nav-item>
          </b-navbar-nav>
        </b-collapse>
  </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style lang="scss" scoped>
.navbar {
  background: #039be5;
  color: white;

  img {
    width: 31px;
    height: 31px;
  }
  .txt {
    font-size: 16px;
    font-weight: normal;
  }
  a {
    font-weight: bold;
    color: white;
    padding: .3rem;
    &.router-link-exact-active {
      color: rgb(1, 62, 92);
    }
  }
}
</style>
