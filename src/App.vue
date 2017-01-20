<template>
  <div id="app">
    <router-view></router-view>
    <ul class="side-bar">

      <li > <router-link  to="/">Home</router-link></li>
      <li > <router-link  to="/sign_up">Sign Up</router-link></li>
      <li > <router-link  to="/login">Login</router-link></li>
      <li > <router-link  to="/nice">Nice</router-link></li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'app',

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: -21px;
}

  .side-bar{
    text-align: left;
    position: absolute;
    top:0;
    padding-top: 120px;
    width: 90px;
    height: 100%;
    list-style: none;
    margin:0;
    background-color: #78b9e7;
    z-index: 100;
  }

  #app a{
    color: #004c91;
  }
</style>
