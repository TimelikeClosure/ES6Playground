/*
Now that you have a monster created, create a subclass of the Monster called Snake.  

The Snake should have a 'bite' method.  The only argument to this method is another instance of a Snake.
The instance of Snake that is passed in should have their health deducated by 10
 */
//  CODE START
class Monster {
  constructor(options) {
    this.health = 100;
    this.name = options.name;
  }
}

class Snake extends Monster {
  constructor(options){
      super(options);
  }
  bite(target) {
      target.health -= 10;
      return `${this.name} bites down hard on ${target.name}`;
  }
}
//  CODE END
const snake1 = new Snake({ name: 'Slitherin' });
const snake2 = new Snake({ name: 'Frequent Flier' });
console.log(snake1);
console.log(snake2)

console.log(snake1.bite(snake2));

console.log(snake1);
console.log(snake2);
