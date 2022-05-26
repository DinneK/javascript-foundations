class Centaur {
  constructor(name, breed) {
    this.name = name;
    this.breed = `Palomino`;
    this.cranky = false;
    this.standing = true;
    this.shootRun = 0;
    this.layingDown = false;
  }
  shootBow() {
    this.shootRun++
    if(this.shootRun >= 3 || this.layingDown === true) {
      this.cranky = true;
      return 'NO!'
    }
      return `Twang!!!`;
  }
  run() {
    this.shootRun++
    if(this.shootRun >= 3 || this.layingDown === true) {
      this.cranky = true;
      return `NO!`
    }
    return `Clop clop clop clop!!!`
  }
  sleep() {
    if(this.layingDown === true) {
      this.cranky = false;
      this.shootRun = 0;
      return `ZZZZ`;
    } else {
    return `NO!`;
   }
  }
  layDown() {
      this.standing = false;
      this.layingDown = true;
  }
  standUp() {
      this.standing = true;
      this.layingDown = false;
  }
  drinkPotion() {
    this.cranky = false;
    if(this.layingDown === true) {
      return 'Not while I\'m laying down!';
    }
  }

};


module.exports = Centaur;
