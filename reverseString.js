// Complete the solution so that it reverses the string passed into it.

function solution(str){
  // pass in our string
  let result = "";

  // iterate the string backwards
  for(let i = str.length - 1; i >= 0; i--){

    // append current character to our string holder
    result += str[i]
  }

  // as we finish iterating and appending backwards we return it
  return result
}
