const launchInent = require("./launchIntent");

const maxWinsInter = require('./maxWinsInter');
const userChoiceInter = require('./userChoiceInter');
const processWinner = require("./processWinner");
const newGameInter = require('./newGameInter');
const cancelIntent = require('./cancelntent');
const tellScore = require('./tellScore');

function register(voxaApp) {
  launchInent(voxaApp);
  maxWinsInter(voxaApp);
  userChoiceInter(voxaApp);
  processWinner(voxaApp);
  newGameInter(voxaApp);
  cancelIntent(voxaApp);
  tellScore(voxaApp);
}

module.exports = register;
