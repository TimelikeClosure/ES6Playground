/*
Use the 'reduce' helper to create an object that tallies the number of sitting and standing desks.  The object returned should have the form '{ sitting: 3, standing: 2 }'.  The initial value has been provided to you.
Hint: Don't forget to return the accumulator object (the first argument to the iterator function)
 */
//  CODE START
var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function(acc, desk) {
    switch(desk.type){
        case 'sitting':
            acc.sitting++;
            break;
        case 'standing':
            acc.standing++;
            break;
    }
    return acc;
}, { sitting: 0, standing: 0 });
//  CODE END
console.log(deskTypes);
