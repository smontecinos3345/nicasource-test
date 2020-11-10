const { basicRules } = require("../app/constants");

const winningHands = basicRules
  .map(textualRule => textualRule.replace(" beats ", " "))
  .map(rule => rule.split(" "));

const winningHandToLosingHand = hand => [hand[1], hand[0]];
/**
 *
 * @param {*} me the name of the first player (the user in this case)
 * @param {*} other  the name of the second player (alexa)
 * @returns returns a function that determines the winner if there's a winner
 * This function first construct all the rules of the game for then deciding
 * who's the winner. Here I use the word "hand" as an analogy to pocker and
 * it just means "the users selection"
 */
function getReferee(me, other) {
  const winningRules = winningHands.map(winningHand => [winningHand, me]);
  const losingRules = winningHands
    .map(winningHandToLosingHand)
    .map(losingHand => [losingHand, other]);
  const rules = [...winningRules, ...losingRules];
  return {
    getWinner(myAnswer, theirAnswer) {
      for (let rule of rules) {
        const [hand, winner] = rule;
        if (hand[0] == myAnswer && hand[1] == theirAnswer) {
          return winner;
        }
      }
      return null;
    },
  };
}

module.exports = {
  getReferee,
};
