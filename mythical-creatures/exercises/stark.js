var Direwolf = require('./direwolf');

class Stark {
  constructor(info) {
    this.name = info.name;
    this.location = info.area || `Winterfell`;
    this.safe = false;
  }
  sayHouseWords() {
    if(this.safe) {
      return 'The North Remembers';
    }
    return 'Winter is Coming';
  }
  callDirewolf(name, home) {
    var direwolf = new Direwolf(name, this.location);
    direwolf.protect(this);
    return direwolf;
  }
}


module.exports = Stark;
