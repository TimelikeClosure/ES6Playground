/*
Refactor the following code to use default function arguments.  Be sure to remove any unused code after you refactor it.
 */
//  CODE START
function addOffset(style = {}) {
  style.offset = '10px';
  
  return style;
}
//  CODE END
console.log(addOffset({ "font-size": "23px"}));
console.log(addOffset());
