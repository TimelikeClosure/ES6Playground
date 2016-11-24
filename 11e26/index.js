/*
Refactor to use enhanced literal notation
 */
//  CODE START
const color = 'red';

const Car = {
  color,
  drive() {
    return 'Vroom!';
  },
  getColor() {
    return this.color;
  }
};
//  CODE END
console.log(Car.drive());
console.log(Car.getColor());
