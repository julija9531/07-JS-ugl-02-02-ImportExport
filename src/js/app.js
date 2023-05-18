import Game, {GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame}  from './domain.js';

const game = new Game();
game.start();

console.log('worked');
