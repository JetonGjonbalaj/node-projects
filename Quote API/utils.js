const getRandomElement = arr => {
  if (!Array.isArray(arr)) throw new Error('Expected an array');
  return arr[Math.floor(Math.random() * arr.length)];
}

const hasParameters = obj => {
  return Object.keys(obj).length;
}

module.exports = {
  getRandomElement,
  hasParameters
};
