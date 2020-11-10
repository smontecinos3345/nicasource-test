function register(voxaApp) {
  voxaApp.onIntent("HelpIntent", () => {
    return {
      flow: "yield",
      reply: "Help",
      to: "getIfStartPlaying",
    };
  });
}

module.exports = register;
