import { AppState } from "../AppState.js";
import { PlayersController } from "../controllers/PlayersController.js";
import { Player } from "../models/Players.js";



class PlayersServices {
  increaseScore(playerName) {
    const clickedPlayer = AppState.players.find(player => player.name == playerName)
    clickedPlayer.score++
    console.log("point added")
  }
  decreaseScore(playerName) {
    const clickedPlayer = AppState.players.find(player => player.name == playerName)
    if (clickedPlayer.score > 0) {

      clickedPlayer.score--
      console.log("point subtracted")
    }
  }




  addPlayer() {
    let playerName = prompt("what is their name?")
      .push(playerName)
  }
}


export const playersServices = new PlayersServices()