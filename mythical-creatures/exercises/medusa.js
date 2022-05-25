var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name
    this.statues = [];
  }
  gazeAtVictim(victim) {
    var statue = new Statue(victim.name);
    if(this.statues.length < 3) {
      this.statues.push(statue);
    } else {
    var newPerson = new Person(this.statues[0].name, 'relieved')
    this.statues.push(statue);
    this.statues.shift();
    return newPerson;
  }
  }
};



module.exports = Medusa;
