const { getReferee } = require("../../src/services/gamerules");
const assert = require("assert");
describe("gameRules", function() {
  describe("#getReferee", function() {
    const referee = getReferee("user", "alexa");
    it("says user wins as they chose rock and alexa chose scissors", () => {
      assert.equal(referee.getWinner("rock", "scissors"), "user");
    });
    it("says alexa wins as she chose rock and the user chose scissors", () => {
      assert.equal(referee.getWinner("scissors", "rock"), "alexa");
    });

    it("returns null as there is no winner", () => {
      assert.equal(referee.getWinner("rock", "rock"), null);
    });
  });
});
