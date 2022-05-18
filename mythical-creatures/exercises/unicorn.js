class Unicorn {
    constructor(name, color) {
      this.name = name;
      if (color === undefined) {
        this.color = 'white';
      } else {
      this.color = color;
    }
  }
  isWhite() {
    console.log(this.color);
    if(this.color !== 'white') {
      return false;
    }
  }
  says(message) {
    return `**;* ${message} *;**`;
  }
  //behavior
}

module.exports = Unicorn;

// 1. read the test
// 2. ask yourself if its going to fail and why
// 3. run the test
// 4. make it pass
