/*
Another really hard one!  Write a function called 'unique' that will remove all the duplicate values from an array.

For example, given the following array:
var numbers = [1, 1, 2, 3, 4, 4];
Your function should return
[1, 2, 3, 4]
Hint: Use the 'reduce' and 'find' helpers. 
 */
//  CODE START
function unique(array) {
  return array.reduce(function(acc, element){
      if (!acc.find(function(accElement){
          return accElement === element;
      })){
          acc.push(element);
      }
      return acc;
  }, []);
}
//  CODE END
var numbers = [1, 1, 2, 3, 4, 4];
console.log(unique(numbers));
