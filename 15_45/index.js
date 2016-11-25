function Car(options) {
    this.title = options.title;
}
Car.prototype.drive = function () {
    return 'vroom';
}

function Toyota(options) {
    options.type = "Toyota";
    Car.call(this, options);
    this.color = options.color;
}
Toyota.prototype.__proto__ = Car.prototype;
Toyota.prototype.honk = function () { 
    return 'beep';
};

const toyota = new Toyota({color: 'red', title: 'Daily Driver'});
console.log(toyota);
console.log(toyota.honk());
console.log(toyota.drive());
