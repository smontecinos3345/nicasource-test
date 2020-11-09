function register(voxaApp) {
  voxaApp.onIntent("CancelIntent", () => {
    return {
      flow: "terminate",
      reply: "Bye",
    };
  });

  voxaApp.onIntent("StopIntent", () => {
    return {
      flow: "terminate",
      reply: "Bye",
    };
  });
}

module.exports = register;
