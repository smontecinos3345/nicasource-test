const confirmationFactory = (targetYes, transitionOnNo = null) => {
  // eslint-disable-next-line consistent-return
  return voxaEvent => {
    if (voxaEvent.intent.name === "YesIntent") {
      if (typeof targetYes !== "string") {
        return targetYes;
      }

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
