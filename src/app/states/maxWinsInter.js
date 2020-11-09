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
      voxaEvent.model.userWins = 0;
      voxaEvent.model.alexaWins = 0;
      return {
        flow: "continue",
        reply: "StartGame",
        to: "askUserChoice",
      };
    }
  });
}

module.exports = register;
