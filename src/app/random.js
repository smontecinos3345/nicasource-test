/**
 *
 * @param {number} min
 * @param {number} max
 * @returns a function than returns an integer between [min, max] (closed)
 */
const randomIntBeween = (min, max) => {
  const delta = max - min + 1;
  return () => {
    return Math.floor(Math.random() * delta) + min;
  };
};

/**
 * @param {Array} arr containing the options (must have at least one element)
 * @returns a function that returns a randomly selected element from the array
 */
const randomArrayElement = (arr = []) => {
  if (arr.length < 1) {
    throw new Error("array must have at least one elment");
  }
  const randomIndex = randomIntBeween(0, arr.length - 1);
  return () => {
    return arr[randomIndex()];
  };
};

module.exports = {
  randomIntBeween,
  randomArrayElement,
};
