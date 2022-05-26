var Skier = require('./Skier');

class Lift {
  constructor(limit) {
  this.inService = true
  this.limit = limit
  this.skiers = []
  this.safetyBar = 'up'
  }
  admitSkier(skier, ticket) {
  var skier = new Skier(skier)
  if(ticket === false) {
    return `Sorry, ${skier.name}. You need a lift ticket!`
  }
  if(this.skiers.length < this.limit) {
    this.skiers.push(skier);
  }
  return `Sorry, ${skier.name}. Please wait for the next lift!`;
}
  startLift(skier) {
    var newSkier = this.limit - this.skiers.length;
    if(this.skiers.length >= this.limit) {
      this.safetyBar = 'down';
    }
    else if(newSkier === 1) {
        return `We still need 1 more skier!`;
      } else if (newSkier === 2) {

        return `We still need 2 more skiers!`;
      }

  }
}

module.exports = Lift;
