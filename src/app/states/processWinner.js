const { getReferee } = require("../gamerules");

function register(voxaApp) {
  const referee = getReferee("user", "alexa");

  voxaApp.onState("processWinner", voxaEvent => {
    const { userChoice, alexaChoice } = voxaEvent.model;
    let reply = "TiedResult";

    const winner = referee.getWinner(userChoice, alexaChoice);

    if (winner == "user") {
      voxaEvent.model.userWins += 1;
      reply = "UserWins";
    } else if (winner == "alexa") {
      voxaEvent.model.alexaWins += 1;
      reply = "AlexaWins";
    } else {
      reply = "TiedResult";
    }
    return {
      flow: "continue",
      reply,
      to: "askUserChoice",
    };
  });
}

module.exports = register;
