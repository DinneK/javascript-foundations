var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor() {
    this.statues = [];
  }
  gazeAtVictim(victim) {
    var aStatue = new Statue(victim.name);
      this.name.push(victim.name);

  }
};



module.exports = Medusa;
