
const confirmationFactory = (target) => {
  return (voxaEvent) => {
    if (voxaEvent.intent.name === "YesIntent") {
      return {
        flow: "continue",
        to: target,
      };
    } else if (voxaEvent.intent.name === "NoIntent") {
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
