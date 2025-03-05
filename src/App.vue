<script>
export default {
  name: "App",
  beforeMount() {
    this.$store.commit('initialiseStore')    
  }
}
</script>

<template>
  <router-view />
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/games">Kelly Pool</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
</template>

<style>
/* html,
body {
  overflow-x: hidden;
}

body {
  position: relative;
} */

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  position: fixed;
  border-top: solid 2px lightgray;
  background-color: white;
  bottom: 0;
  padding: 50px 0;
  width: 100%;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 20px;
  padding: 20px;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.home {
  margin-bottom: 130px;
}
</style>
