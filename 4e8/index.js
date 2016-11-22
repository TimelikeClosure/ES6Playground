/*
This is a hard one!  Create a function called 'reject'.  Reject should work in the opposite way of 'filter' - if a function returns 'true', the item should *not* be included in the new array.  Hint: you can reuse filter.
*/
//  CODE START
function reject(array, iteratorFunction) {
  return array.filter(function(element){
      return !iteratorFunction(element);
  });
}
//  CODE END
