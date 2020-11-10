const { basicRules: rules } = require("./constants");

function userWins(voxaEvent) {
  return voxaEvent.model.userWins;
}

function alexaWins(voxaEvent) {
  return voxaEvent.model.alexaWins;
}

function maxWins(voxaEvent) {
  return voxaEvent.model.wins;
}

function basicRules() {
  return (
    rules.slice(0, rules.length - 1).join(", ") +
    `, and  ${rules[rules.length - 1]}`
  );
}

module.exports = {
  userWins,
  alexaWins,
  maxWins,
  basicRules,
};
