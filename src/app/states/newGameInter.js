function register(voxaApp) {

  // eslint-disable-next-line consistent-return
  voxaApp.onState("askIfStartANewGame", () => {
    return {
      flow: "yield",
      reply: "AskIfStartANewGame",
      to: "shouldStartANewGame",
    };
  });

  // eslint-disable-next-line consistent-return
  voxaApp.onState("shouldStartANewGame", voxaEvent => {
    if (voxaEvent.intent.name === "YesIntent") {
      return {
        flow: "continue",
        reply: "RestartGame",
        to: "askHowManyWins",
      };
    }

    if (voxaEvent.intent.name === "NoIntent") {
      return {
        flow: "terminate",
        reply: "Bye",
      };
    }
  });
}

module.exports = register;
