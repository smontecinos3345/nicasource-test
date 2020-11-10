
const confirmationFactory = (targetYes, transitionOnNo = null) => {
  return (voxaEvent) => {
    if (voxaEvent.intent.name === "YesIntent") {
      return {
        flow: "continue",
        to: targetYes,
      };
    } else if (voxaEvent.intent.name === "NoIntent") {
      if (transitionOnNo != null) {
        return transitionOnNo;
      }
      return {
        flow: "terminate",
        reply: "Bye",
      };
    }
  };
};

module.exports = {
  confirmationFactory,
};
