/*
Implement a 'pluck' function.  Pluck should accept an array and a string representing a property name and return an  array containing that property from each object.
*/

// CODE START
function pluck(array, property) {
    return array.map(function(child){
        return child[property];
    });
}
// CODE END

var paints = [{ color: 'red' }, { color: 'blue' }, { color: 'yellow' }];
console.log(pluck(paints, 'color'));
