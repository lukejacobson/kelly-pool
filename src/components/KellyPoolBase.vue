<script>
import PoolBall from "./PoolBall.vue";
import ball_1 from "../assets/pool_balls/ball_1.png";
import ball_2 from "../assets/pool_balls/ball_2.png";
import ball_3 from "../assets/pool_balls/ball_3.png";
import ball_4 from "../assets/pool_balls/ball_4.png";
import ball_5 from "../assets/pool_balls/ball_5.png";
import ball_6 from "../assets/pool_balls/ball_6.png";
import ball_7 from "../assets/pool_balls/ball_7.png";
import ball_8 from "../assets/pool_balls/ball_8.png";
import ball_9 from "../assets/pool_balls/ball_9.png";
import ball_10 from "../assets/pool_balls/ball_10.png";
import ball_11 from "../assets/pool_balls/ball_11.png";
import ball_12 from "../assets/pool_balls/ball_12.png";
import ball_13 from "../assets/pool_balls/ball_13.png";
import ball_14 from "../assets/pool_balls/ball_14.png";
import ball_15 from "../assets/pool_balls/ball_15.png";

export default {
  name: "KellyPoolBase",
  components: {
    PoolBall,
  },
  data() {
    return {
      my_balls: [
        ball_1, ball_2, ball_3, ball_4, ball_5, ball_6, ball_7, ball_8, ball_9,
        ball_10, ball_11, ball_12, ball_13, ball_14, ball_15,
      ]
    }
  }
}
</script>

<template>
  <div class="game_contanier">
    <div class="ball_grid">
      <div class="ball_container" v-for="(ball, index) in my_balls" :key="index">
        <PoolBall :number="index" :image="ball"/>
      </div>
    </div>
  </div>


</template>

<style scoped>

.game_contanier {
  width: 100%;
}

.ball_grid {
  max-width: fit-content;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 360px;
  padding-left: 20px;
  padding-right: 20px;
}

.ball_container {
  padding: 10px;
}
</style>