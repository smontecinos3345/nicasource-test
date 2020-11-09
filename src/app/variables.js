function userWins(voxaEvent) {
  return voxaEvent.model.userWins;
}

function alexaWins(voxaEvent) {
  return voxaEvent.model.alexaWins;
}

module.exports = {
  userWins,
  alexaWins,
};
