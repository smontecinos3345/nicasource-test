function userWins(voxaEvent) {
  return voxaEvent.model.userWins;
}

function alexaWins(voxaEvent) {
  return voxaEvent.model.alexaWins;
}

function maxWins(voxaEvent) {
  return voxaEvent.model.wins;
}

module.exports = {
  userWins,
  alexaWins,
  maxWins,
};
