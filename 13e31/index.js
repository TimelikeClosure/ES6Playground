/*
Refactor the following to use the only the rest operator
 */
//  CODE START
function unshift(array, ...moreStuff) {
  return [...moreStuff, ...array];
}
//  CODE END
console.log(unshift([5, 4, 65, 4, 6], 6, 1, 8, 3, 4));
