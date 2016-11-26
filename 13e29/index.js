/*
Refactor the following function to use the rest operator.  Remember, an argument using the rest operator does *not* need to be called 'rest'.
 */
//  CODE START
function product(...numbers) {
    return numbers.reduce((acc, number) => acc * number, 1);
}
//  CODE END
console.log(product(6, 4, 89, 2, 8));
