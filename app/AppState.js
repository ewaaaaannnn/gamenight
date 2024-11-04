import { Player } from './models/Players.js';
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []

  players = [
    new Player("Jake")
    ,
    new Player("Ewan")
  ];

}






export const AppState = createObservableProxy(new ObservableAppState())