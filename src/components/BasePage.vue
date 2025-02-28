<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <slot></slot>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.hello {
  padding-bottom: 100px;
}
</style>
