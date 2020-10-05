module.exports = function check(str, bracketsConfig) {
  let stack = [];

/*   const openBracket = ['(', '{', '[', '|'];
  const closeBracket = [')', '}', ']', '|']; */

  let openBracket = [];
  let closeBracket = [];
// configurate the bracket pairs
  for (let i = 0; i < bracketsConfig.length; i++){
    let currentArr = bracketsConfig[i];
    openBracket.push(currentArr[0]);
    closeBracket.push(currentArr[1]);
  }

// for brackets whose open bracket matches close bracket
  for (let i = 0; i < str.length; i++){
    if (openBracket.includes(str[i]) && closeBracket.includes(str[i])){
      if (!stack.includes(str[i])){
        stack.push(str[i]);
      } else if (stack.pop() === str[i]) {
        continue;
      } else {
        return false;
      }
    // for brackets that don't match  
    } else {
      if (openBracket.includes(str[i])){
        stack.push(str[i]);
      } else {
        if (openBracket.indexOf(stack.pop()) === closeBracket.indexOf(str[i])){
          continue;
        } else {
          return false;
        }
      }
    }
    
  }

  return stack.length === 0 ? true : false;
}
