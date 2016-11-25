class Car {
    constructor({title}) {
        this.title = title;
    }

    drive() {
        return 'vroom';
    }
}

const car = new Car({title: 'Toyota'});
console.log(car);
console.log(car.drive());

class Toyota extends Car {
    constructor(options) {
        super(options); // Car.constructor(options)
        this.color = options.color;
    }

    honk() {
        return 'beep';
    }
}

// function Toyota(options) {
//     options.type = "Toyota";
//     Car.call(this, options);
//     this.color = options.color;
// }
// Toyota.prototype.__proto__ = Car.prototype;
// // Or the lines below, because being convoluted is fun
// // Toyota.prototype = Object.create(Car.prototype);
// // Toyota.prototype.constructor = Toyota;
// Toyota.prototype.honk = function () { 
//     return 'beep';
// };

const toyota = new Toyota({color: 'red', title: 'Daily Driver'});
console.log(toyota);
console.log(toyota.honk());
console.log(toyota.drive());
