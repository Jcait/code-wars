function solution(str, ending) {
  //   console.log(str)
  //   console.log(ending)
  let check;
  if (ending.includes("(")) {
    check = new RegExp(`\\(${ending})$`, "g");
  } else if (ending.includes(")")) {
    check = new RegExp(`(${ending}\\)$`, "g");
  } else {
    check = new RegExp(`(${ending})$`, "g");
  }

  if (str.match(check)) {
    return true;
  } else {
    return false;
  }
}
