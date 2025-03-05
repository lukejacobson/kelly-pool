import { createStore } from "vuex";

import ball_1_image from "../assets/pool_balls/ball_1.png";
import ball_2_image from "../assets/pool_balls/ball_2.png";
import ball_3_image from "../assets/pool_balls/ball_3.png";
import ball_4_image from "../assets/pool_balls/ball_4.png";
import ball_5_image from "../assets/pool_balls/ball_5.png";
import ball_6_image from "../assets/pool_balls/ball_6.png";
import ball_7_image from "../assets/pool_balls/ball_7.png";
import ball_8_image from "../assets/pool_balls/ball_8.png";
import ball_9_image from "../assets/pool_balls/ball_9.png";
import ball_10_image from "../assets/pool_balls/ball_10.png";
import ball_11_image from "../assets/pool_balls/ball_11.png";
import ball_12_image from "../assets/pool_balls/ball_12.png";
import ball_13_image from "../assets/pool_balls/ball_13.png";
import ball_14_image from "../assets/pool_balls/ball_14.png";
import ball_15_image from "../assets/pool_balls/ball_15.png";

import Ball from "@/models/Ball";
import Player from "@/models/Player";
import GameStates from "@/models/GameStates";

function cleanState() {
  return {
    gameState: GameStates.ADD_PLAYERS,
    players: [],
    balls: {
      1: new Ball({id: 1, image: ball_1_image}),
      2: new Ball({id: 2, image: ball_2_image}),
      3: new Ball({id: 3, image: ball_3_image}),
      4: new Ball({id: 4, image: ball_4_image}),
      5: new Ball({id: 5, image: ball_5_image}),
      6: new Ball({id: 6, image: ball_6_image}),
      7: new Ball({id: 7, image: ball_7_image}),
      8: new Ball({id: 8, image: ball_8_image}),
      9: new Ball({id: 9, image: ball_9_image}),
      10: new Ball({id: 10, image: ball_10_image}),
      11: new Ball({id: 11, image: ball_11_image}),
      12: new Ball({id: 12, image: ball_12_image}),
      13: new Ball({id: 13, image: ball_13_image}),
      14: new Ball({id: 14, image: ball_14_image}),
      15: new Ball({id: 15, image: ball_15_image}),
    },
    selectedBallId: undefined,
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

const store = createStore({
  state () {
    return cleanState()
  },
  getters: {
    selectedBall(state) {
      return state.balls[state.selectedBallId]
    },
    getPlayerBalls: (state) => (player) => {
      return player.balls.map((ball_id) => state.balls[ball_id])
    },
    getPlayerStatus: (state) => (player) => {
      if (state.players.filter((p) => p.name != player.name).map((p) => p.balls.length).reduce((sum,a) => sum + a, 0) === 0) {
        return "WIN"
      } else {
        return player.status()
      }
    }
  },
  mutations: {
    initialiseStore(state) {
			// Check if the ID exists
			if(localStorage.getItem('store')) {
        // Replace the state object with the stored item
        const localData = JSON.parse(localStorage.getItem('store'))
        localData.players = localData.players.map((p) => new Player(p))
        Object.keys(localData.balls).forEach((key) => {
          localData.balls[key] = new Ball(localData.balls[key])
        })
        console.log("localStorage:", localData)
				this.replaceState(
					Object.assign(state, localData)
				);
			}
		},
    resetState(state) {
      const freshState = cleanState()
      console.log("Resetting State with", freshState)
      Object.assign(state, freshState)
    },
    add_player(state, player) {
      state.players.push(player)
    },
    remove_player(state, player) {
      state.players = state.players.filter((p) => p != player)
    },
    assign_balls_to_players(state) {
      const num_players = state.players.length
      const num_balls = Object.keys(state.balls).length
      const balls_each = Math.min(5, Math.floor(num_balls / num_players))

      console.log('num_players', num_players)
      console.log('num_balls', num_balls)
      console.log('balls_each', balls_each)

      let shuffled_ball_ids = Object.keys(state.balls).map((i) => parseInt(i))
      console.log('UN-shuffled_ball_ids', shuffled_ball_ids)
      shuffleArray(shuffled_ball_ids)
      console.log('shuffled_ball_ids', shuffled_ball_ids)

      state.players.forEach((player) => {
        let balls = []
        for (let i = 0; i < balls_each; i++) {
          balls.push(shuffled_ball_ids.shift())
        }
        console.log("Player: ", player.name, "gets balls: ", balls)
        player.setBalls(balls.sort())
      })
      state.gameState = GameStates.PLAY
    },
    sink_ball(state, ball_id) {
      state.players.forEach((player) => {
        player.balls = player.balls.filter((id) => id !== ball_id)
      })
      delete state.balls[ball_id]


    }
  },
  actions: {},
  modules: {},
});

// Subscribe to store updates
store.subscribe((mutation, state) => {
	// Store the state object as a JSON string
  console.log(mutation, state)
	localStorage.setItem('store', JSON.stringify(state))
})

export default store