const idioms = require("./idioms/index.json");

const randomIdiom = () => {
  return idioms[Math.floor(Math.random() * idioms.length)];
};

module.exports = randomIdiom();
