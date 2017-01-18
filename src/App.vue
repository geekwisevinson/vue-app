<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Nice></Nice>
  </div>
</template>

<script>
import Nice from './components/Nice';

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
