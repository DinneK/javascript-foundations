class Hobbit {
  constructor(hobbitName) {
      this.name = hobbitName.name;
      this.age = 0;
      this.adult = null;
      this.old = false;
      this.hasRing = false;
  }
  celebrateBirthday() {
    this.age++;
    if (this.age < 32) {
      this.adult = false;
    } else if (this.age > 32 && this.age < 101) {
      this.adult = true;
    } else if (this.age >= 101) {
      this.old = true;
    }
  }
  getRing() {
    if (this.name === 'Frodo') {
      this.hasRing = true;
      return 'Here is the ring!';
    } else {
      return 'You can\'t have it!';
    }
  }
};

var bilbo = new Hobbit('Bilbo');
var mark = new Hobbit('Mark');


module.exports = Hobbit;


// drink() {
//    if (this.ouncesDrank < 50) {
//     this.ouncesDrank = this.ouncesDrank + 10;
//   }
//     this.thirsty = false
//     return 'I\'m too full to drink anymore!'
// }
// };
