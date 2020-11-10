const { confirmationFactory } = require("../../services/confirmation");

function askIfDiscardCurrentGame() {
  return {
    flow: "yield",
    reply: "AskIfDiscardGame",
    to: "getIfDiscardGame",
  };
}

const getIfDiscardGame = confirmationFactory("askHowManyWins", {
  flow: "yield",
  reply: "AskIfResumeGame",
  to: "getIfResumeGame",
});

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


  //requirement two.

  voxaApp.onIntent("NewGameIntent", askIfDiscardCurrentGame);
  voxaApp.onState("getIfDiscardGame", getIfDiscardGame);

}

module.exports = register;
