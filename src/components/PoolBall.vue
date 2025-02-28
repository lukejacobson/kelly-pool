<script>
export default {
  name: "PoolBall",
  props: {
    number: Number,
    image: String
  },
}
</script>

<template>
  <div>
    <img :src=this.image alt="1 Ball">
  </div>
  
</template>

<style>
img {
  height: 85px;
  width: 85px;
}
</style>