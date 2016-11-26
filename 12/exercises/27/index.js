/*
Refactor the following code to use default function arguments.  Be sure to remove any unused code after you refactor it.
 */
//  CODE START
function sum(a = 0, b = 0) {
  return a + b;
}
//  CODE END
console.log(sum(2, 3));
console.log(sum(5));
console.log(sum(undefined, 7));
console.log(sum());
