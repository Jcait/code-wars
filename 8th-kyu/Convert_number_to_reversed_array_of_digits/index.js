// Single Line answer

function digitize(n) {
  return n
    .toString()
    .split("")
    .map((x) => parseInt(x))
    .reverse();
}

// Multi line answer

function digitize(n) {
  arr = n.toString().split("");
  mapArr = arr.map((x) => parseInt(x));
  ans = mapArr.reverse();
  return ans;
}
