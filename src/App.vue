<template>
  <div id="app">
    <Nice prop_from_app="this is a passed in prop"></Nice>
  </div>
</template>

<script>
import Nice from './components/nice/Nice';

export default {
  name: 'app',
  components: {
    Nice
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
