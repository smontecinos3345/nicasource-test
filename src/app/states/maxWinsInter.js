const { confirmationFactory } = require("../../services/confirmation");

const startGameInteraction  = () => ({
  flow: "continue",
  reply: "StartGame",
  to: "askUserChoice",
});

const getIfMaxWinsAreValid = confirmationFactory(startGameInteraction(), {
  flow: "yield",
  reply: "AskHowManyWins",
  to: "getHowManyWins",
});

function register(voxaApp) {

  voxaApp.onState("askHowManyWins", () => {
    return {
      flow: "yield",
      reply: "AskHowManyWins",
      to: "getHowManyWins",
    };
  });
  // eslint-disable-next-line consistent-return
  voxaApp.onState("getHowManyWins", voxaEvent => {
    if (voxaEvent.intent.name === "MaxWinsIntent") {
      voxaEvent.model.wins = voxaEvent.intent.params.wins;
      if (voxaEvent.intent.params.wins >= 10) {
        return {
          flow: "yield",
          reply: "ConfirmMaxWins",
          to: "getIfMaxWinsAreValid",
        };
      }
      voxaEvent.model.userWins = 0;
      voxaEvent.model.alexaWins = 0;
      return startGameInteraction();
    }
  });

  //requirement three
  voxaApp.onState("getIfMaxWinsAreValid", getIfMaxWinsAreValid);
}

module.exports = register;
