<script>
import Player from "../models/Player"
import GameStates from "../models/GameStates"


export default {
  name: "PlayerNames",
  data() {
    return {
      inputVal: "",
    }
  },
  methods: {
    addPlayer() {
      this.$store.commit("add_player", new Player({name: this.inputVal}))
      this.inputVal = null
    },
    removePlayer(player) {
      this.$store.commit("remove_player", player)
    },
    beginPlaying() {
      this.$store.commit("assign_balls_to_players")
    },
    showBalls(player) {
      this.$emit("show:balls", player)
    }
  },
  computed: {
    startState() {
      return this.$store.state.gameState === GameStates.ADD_PLAYERS
    },
    playState() {
      return this.$store.state.gameState === GameStates.PLAY
    },
  }
}
</script>

<template>
  <div class="player_container">
    <div v-if="startState">
      <div>Enter Player Names:</div>
      <input class="player_input" v-model="inputVal" @keyup.enter="addPlayer"/>
    </div>
    
    <div class="player_list">
      <div class="player_list_item" v-for="(player, index) in this.$store.state.players" :key="index">
        <div class="player_name">{{ player.name }} <span v-if="playState">({{ $store.getters.getPlayerStatus(player) }})</span></div>
        <button v-if="startState" class="remove_player" @click="() => removePlayer(player)"> x </button>
        <button v-if="playState" class="remove_player" @click="() => showBalls(player)">View Balls</button>
      </div>
    </div>

    <div v-if="startState">
      <button @click="beginPlaying">Continue</button>
    </div>
  </div>
</template>

<style scoped>
.player_container {
  width: 360px;
}

.player_input {
  margin-top: 10px;
  padding: 8px;
  font-size: 20px;
}

.player_list {
  margin: 20px 0;
}

.player_list_item {
  display: flex;
  justify-content: space-between;
  margin: 5px 60px;
  padding: 5px 20px;
  border: solid 1px black;
  border-radius: 5px;
}

</style>