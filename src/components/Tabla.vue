<template>
  <div id="tabla">
    <h1 class="d-flex align-content-center px-4 py-2">{{ title }}</h1>
    <b-table responsive striped hover :items="items" :fields="fields">
      <template slot="index" slot-scope="data">{{ data.index + 1 }}</template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: "tabla",
  props: {
    items: Array,
    fields: Array,
    title: String
  }
};
</script>

<style lang="scss">
//se le quita la palabra "scoped" para poder agregar estilos globalos a la tabla
#tabla {
  height: 100%;
  background-color: white;
  font-family: "Roboto", sans-serif;
  font-size: 13px;
  color: rgb(97, 97, 97);
  text-align: left;
  border: 0 solid transparent;
  border-radius: 4px;

  h1 {
    font-weight: bold;
    font-size: 17px;
  }
  table {
    thead {
      tr {
        th {
          font-size: 14px;
          font-weight: bold;
          line-height: 14px;
          color: rgb(239, 239, 239);
          background-color: rgb(3, 155, 229);
        }
        td {
        }
      }
    }
  }
}
</style>