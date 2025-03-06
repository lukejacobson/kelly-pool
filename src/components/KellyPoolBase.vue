<script>
import PoolBall from "./PoolBall.vue";
import PlayerNames from "./PlayerNames.vue";
import GameStates from "../models/GameStates";

export default {
  name: "KellyPoolBase",
  components: {
    PoolBall,
    PlayerNames,
  },
  data() {
    return {
      displayPlayer: undefined,
      displayPlayerBalls: undefined,
    }
  },
  methods: {
    onBallClick(ball) {
      if (this.showingPlayerBalls) {
        console.log("Clicking ball here does nothing...")
      } else {
        this.$store.commit('sink_ball', ball.id)
      }
    },
    showPlayerBalls(player) {
      console.log("Showwing balls for player", player)
      this.displayPlayer = player
      this.displayPlayerBalls = this.$store.getters.getPlayerBalls(player)
    },
    hidePlayerBalls() {
      this.displayPlayer = undefined
      this.displayPlayerBalls = undefined
    },
    resetGame(){
      this.hidePlayerBalls()
      this.$store.commit('resetState')
    }
  },
  computed: {
    startState() {
      return this.$store.state.gameState === GameStates.ADD_PLAYERS
    },
    playState() {
      return this.$store.state.gameState === GameStates.PLAY
    },
    showingPlayerBalls() {
      return (this.displayPlayer && this.displayPlayerBalls)
    },
    ballsToDisplay() {
      if (this.showingPlayerBalls) {
        return this.displayPlayerBalls
      } else {
        return this.$store.state.balls
      }
    }
  }
}
</script>

<template>
  <div class="reset">
    <button @click="resetGame">Restart Game</button>
  </div>

  <PlayerNames @show:balls="showPlayerBalls"/>

  <div v-if="playState">

    <div class="selected_ball" v-show="false">
      <div>There is a ball selected:</div>
      <div v-if="$store.getters.selectedBall">
        {{ $store.getters.selectedBall.id }}
      </div>
    </div>

    <div class="hide_player_balls" v-if="showingPlayerBalls">
      <button @click="hidePlayerBalls">Hide Balls for {{ displayPlayer.name }}</button>
    </div>

    <div class="game_contanier">
      <div class="ball_grid">
        <div class="ball_container" v-for="ball in ballsToDisplay" :key="ball.id">
          <PoolBall :ball="ball" @click="onBallClick(ball)"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.reset {
  margin: 30px 0;
  > button {
    font-size: 20px;
  }
}

.hide_player_balls {
  margin: 30px 0;
  > button {
    font-size: 20px;
  }
}

.game_contanier {
  width: 100%;
}

.ball_grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 360px;
}

.ball_container {
  padding: 10px;
}

.selected_ball {
  height: 70px;
  margin: 10px;
}
</style>