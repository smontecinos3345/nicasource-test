function register(voxaApp) {
  voxaApp.onIntent("LaunchIntent", () => {
    return {
      flow: "continue",
      reply: "Welcome",
      to: "askHowManyWins",
    };
  });
}

module.exports = register;
