/*
Use the 'reduce' helper to find the sum of all the distances traveled.  Assign the result to the variable 'totalDistance'
 */
//  CODE START
var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce(function(acc, trip){
    return acc + trip.distance;
}, 0);
//  CODE END
console.log(totalDistance);
