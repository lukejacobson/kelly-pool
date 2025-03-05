<script>

export default {
  name: "PoolBall",
  props: {
    ball: Object,
  },
}
</script>

<template>
  <div>
    <img :src=ball.image :alt="ball.id + ' Ball'">
  </div>
  
</template>

<style>
img {
  height: 85px;
  width: 85px;
}
</style>