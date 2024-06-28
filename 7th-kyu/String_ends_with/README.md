# String ends with?

## Catagory: Fundamentals

## Description

Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

```js
solution("abc", "bc"); // returns true
solution("abc", "d"); // returns false
```

### Inital Code

```js
function solution(str, ending) {
  // TODO: complete
}
```

### Steps

The first thing that comes to mind that I havent tied to see if the second argument can be passed as a Regex variable to identify the first,

```js
function solution(str, ending) {
  const check = new RegExp(`(${ending})$`, "g");
  console.log(check);
}
```

What we want is the regex of /(var)$/g, RegEx is another rabbit hole to go down but to put it simply this will allow us to match the str to the ending using .match

one key note is the new RegExp constructor takes strings as it's parameters that's why string interpolation is needed.

Next a conditional is made using .match, if the ending matches it returns an array which fires the True value,

```js
function solution(str, ending){
  const check = new RegExp(`(${ending})$`, "g")
  if(str.match(check) {
     return true
     } else {
    return false
  })
}
```

Cleaning up an errant bracket the below code has passed all the tests

```js
function solution(str, ending) {
  const check = new RegExp(`(${ending})$`, "g");
  if (str.match(check)) {
    return true;
  } else {
    return false;
  }
}
```

Or So i beleived, one of the tests entered after checking was Str = "8-`)` and ending = "8-`(` and since the Regex. Regex doesnt play nice with parentheses so I've had to add another conditional that checks if the ending contains either and adjust the RegExp as such

```js
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
```

## Thoughts

I don't use regular expressions enough but I will definitely remember the solution from this challenge and look into how else they can be implemented. and I feel I have a learnt quite a bit from this exercise. I haven't many solutions with RegExp that I can build off, but the simple one below is another eye opener and a reminder of JS Methods

```js
function solution(str, ending) {
  return str.endsWith(ending);
}
```
