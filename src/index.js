module.exports = function check(str, bracketsConfig) {
  let brackets = [];
  let strArr = str.split("");
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (
        strArr[i] == bracketsConfig[j][1] &&
        brackets[brackets.length - 1] == bracketsConfig[j][0]
      ) {
        brackets.pop();
      } else if (strArr[i] == bracketsConfig[j][0]) {
        brackets.push(strArr[i]);
      }
    }
  }
  if (str.length % 2 != 0) {
    return false;
  } else if (brackets.length == 0) {
    return true;
  } else {
    return false;
  }
};
