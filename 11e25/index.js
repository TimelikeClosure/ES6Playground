/*
Refactor to use enhanced literal notation
 */
//  CODE START
const canvasDimensions = function(width, initialHeight) {
  const height = initialHeight * 9 /16;
  return { 
    width, 
    height 
  };
}
//  CODE END
console.log(canvasDimensions(12, 17));
