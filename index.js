const idioms = require("./idioms/index.json");

module.exports = function randomIdiom() {
  return idioms[Math.floor(Math.random() * idioms.length)];
};
