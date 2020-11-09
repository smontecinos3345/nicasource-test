const { confirmationFactory } = require('../../services/confirmation');

function tellScore(voxaEvent) {
  const { userWins, alexaWins } = voxaEvent.model;
  if (typeof userWins === 'undefined' && typeof alexaWins === 'undefined') {
    return {
      flow: "continue",
      reply: "NoScore",
      to: "askIfStartPlaying",
    };
  }

  return {
    flow: "continue",
    reply: "TellScore",
    to: "askIfResumeGame",
  };
}

function askIfResumeGame() {
  return {
    flow: "yield",
    reply: "AskIfResumeGame",
    to: "getIfResumeGame",
  };
}

function askIfStartPlaying() {
  return {
    flow: "yield",
    reply: "AskIfStartPlaying",
    to: "getIfStartPlaying",
  }
}

const getIfStartPlaying = confirmationFactory('askHowManyWins');
const getIfResumeGame = confirmationFactory('askUserChoice');

function register(voxaApp) {
  voxaApp.onIntent("TellScore", tellScore);
  voxaApp.onState("askIfStartPlaying", askIfStartPlaying);
  voxaApp.onState("getIfStartPlaying", getIfStartPlaying);
  voxaApp.onState('askIfResumeGame', askIfResumeGame);
  voxaApp.onState('getIfResumeGame', getIfResumeGame);
}

module.exports = register;
