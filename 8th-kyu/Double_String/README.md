# Double String

## Catagory: Fundamentals, Arrays

## Description

Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):

```js
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "

```

### Initial Code

```js
function doubleChar(str) {
  // Your code here
}
```

### Steps

In the example, each string character and space is doubled, (and implied by the catagory, an array will be needed.)

```js
function doubleChar(str) {
  let array = str.split("");
}
```

After splitting the string into an array it has to be looped with each letter being duplicated which can be achieved with .map()

```js
function doubleChar(str) {
  let array = str.split("");
  array2 = array.map((x) => {
    return `${x}${x}`;
  });
}
```

and afterwards the new array will need to be .join() to be returned as

```js
function doubleChar(str) {
  let array = str.split("");
  array2 = array.map((x) => {
    return `${x}${x}`;
  });

  return array2.join("");
}
```

### Refactor

```js
function doubleChar(str) {
  return str
    .split("")
    .map((x) => `${x}${x}`)
    .join("");
}
```
