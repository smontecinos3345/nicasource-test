const { randomArrayElement } = require("../random");
const { CHOICES } = require("../constants");

const getAlexasChoice = randomArrayElement(CHOICES);

function register(voxaApp) {
  voxaApp.onState("askUserChoice", voxaEvent => {
    const userWon =
      parseInt(voxaEvent.model.userWins) >= parseInt(voxaEvent.model.wins);
    const alexaWon =
      parseInt(voxaEvent.model.alexaWins) >= parseInt(voxaEvent.model.wins);

    if (userWon) {
      return {
        flow: "continue",
        reply: "UserWinsTheGame",
        to: "askIfStartANewGame",
      };
    }

    if (alexaWon) {
      return {
        flow: "continue",
        reply: "AlexaWinsTheGame",
        to: "askIfStartANewGame",
      };
    }

    voxaEvent.model.userChoice = undefined;
    voxaEvent.model.alexaChoice = getAlexasChoice();

    return {
      flow: "yield",
      reply: "AskUserChoice",
      to: "getUserChoice",
    };
  });

   // eslint-disable-next-line consistent-return
   voxaApp.onState("getUserChoice", voxaEvent => {
    if (voxaEvent.intent.name === "RockIntent") {
      voxaEvent.model.userChoice = "rock";
    } else if (voxaEvent.intent.name === "PaperIntent") {
      voxaEvent.model.userChoice = "paper";
    } else if (voxaEvent.intent.name === "ScissorsIntent") {
      voxaEvent.model.userChoice = "scissors";
    }

    if (voxaEvent.model.userChoice) {
      return {
        flow: "continue",
        to: "processWinner",
      };
    }
  });
}

module.exports = register;
