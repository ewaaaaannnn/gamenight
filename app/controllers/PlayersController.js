import { AppState } from "../AppState.js"
import { playersServices } from "../services/PlayersServices.js"



export class PlayersController {
  constructor() {
    console.log('video game')
    this.drawPlayers()
  }


  drawPlayers() {
    let playersElm = document.getElementById('players')
    playersElm.innerHTML = ''
    for (let i = 0; i < AppState.players.length; i++) {
      const players = AppState.players[i];
      playersElm.innerHTML += `<p> ${players.name}   ||   ${players.score}</p> 
      <button onclick= "app.PlayersController.increaseScore('${players.name}')" class= btn btn-primary>Add Point</button><button onclick= "app.PlayersController.decreaseScore('${players.name}')" class= btn btn-primary>Subtract Point</button>`
      console.log(playersElm, "shown")
    }
  }



  increaseScore(playerName) {
    console.log('adding point', playerName)
    playersServices.increaseScore(playerName)
    this.drawPlayers()
  }

  decreaseScore(playerName) {
    console.log('subtracting point', playerName)
    playersServices.decreaseScore(playerName)
    this.drawPlayers()
  }

  addPlayer() {
    console.log('adding player')
    playersServices.addPlayer()
    this.drawPlayers
  }












}


