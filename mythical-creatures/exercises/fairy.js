class Fairy {
  constructor(name, clothingInfo) {
    this.name = name;
    this.dust = 10;
    this.clothes = {dresses: [`Iris`]};
    this.disposition = `Good natured`;
    this.humanWards = [];
  }
  receiveBelief() {
    this.dust++;
  }
  believe() {
    this.dust += this.dust;
  }
  makeDresses(clothingInfo) {
    for (var i = 0; i < clothingInfo.length; i++) {
    this.clothes.dresses.push(clothingInfo[i]);
   }
  }
  becomeProvoked() {
    this.disposition = `Vengeful`;
  }
  replaceInfant(newInfant) {
    if(this.disposition === `Vengeful`) {
      newInfant.disposition = `Malicious`;
    }
      this.humanWards.push(newInfant);
    if(this.humanWards.length >= 3) {
      this.disposition = `Good natured`;
    }
      return newInfant;
  }
};


module.exports = Fairy;
