var names = [
    "Alexandria",
    "Mattherw",
    "Joe"
];

function lengthTest(string) {
    return string.length > 4;
}

console.log(names.every(lengthTest));
console.log(names.some(lengthTest));
