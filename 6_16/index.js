var computers = [
    { name: 'Apple', ram: 24 },
    { name: 'Compaq', ram: 4 },
    { name: 'Acer', ram: 32 }
];

var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

for (var i = 0; i < computers.length; i++){
    if (computers[i].ram < 16) {
        allComputersCanRunProgram = false;
    } else {
        onlySomeComputersCanRunProgram = true;
    }
}

console.log("allComputersCanRunProgram: " + allComputersCanRunProgram);
console.log("onlySomeComputersCanRunProgram: " + onlySomeComputersCanRunProgram);

function enoughRam(computer) {
    return computer.ram >= 16;
}

var all = computers.every(enoughRam);
var some = computers.some(enoughRam);

console.log("all: " + all);
console.log("some: " + some);
