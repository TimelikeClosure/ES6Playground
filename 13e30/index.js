/*
Refactor the following to use the spread operator.
 */
//  CODE START
function join(array1, array2) {
  return [...array1, ...array2];
}
//  CODE END
console.log(join([3, 5, 7, 4], [9, 4, 2, 6, 4, 6, 4]));
