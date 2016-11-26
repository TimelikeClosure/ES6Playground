var numbers = [10, 20, 30];
var sum = 0;

for (var i = 0; i < numbers.length; i++){
    sum += numbers[i];
}

console.log(sum);

var total = numbers.reduce(function (subtotal, number) {
    return subtotal + number;
}, 0);

console.log(total);
