# Create Phone Number

## Catagory: Rank up

## Description

Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example

```js
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // => returns "(123) 456-7890"
```

The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!

Example:

```js
function createPhoneNumber(numbers) {}
```

### Steps

First I want to use a regular expression to grab the first free numbers in an array. Since .match() doesn't work on an array it'll have to be joined first.

printing both variables to the console confirms the results I want.

```js
function createPhoneNumber(numbers) {
  arr1 = numbers.join("");
  re = new RegExp(`^.{${3}}`, "g");
  console.log(arr1);
  console.log(re);
}
```

.match() returns an array so .join() is going to be used to make the first 3 digits into a full number that can be assigned to a variable

```js
function createPhoneNumber(numbers) {
  arr1 = numbers.join("");
  re = new RegExp(`^.{${3}}`, "g");
  console.log(arr1);
  console.log(re);
  firstThree = arr1.match(re).join("");
}
```

Since the numbers arguement will always have an index of 9 (10 numbers) .slice() will be used on the already joined array to collect the second set of numbers then the remainder
important to rembmer .slice(firstArg, secondArg) with start after the index on the first arguement and end on the second.

```js
function createPhoneNumber(numbers) {
  arr1 = numbers.join("");
  re = new RegExp(`^.{${3}}`, "g");
  console.log(arr1);
  console.log(re);
  firstSet = arr1.match(re).join("");
  secondSet = arr1.slice(3, 6);
  console.log(secondSet);
  thirdSet = arr1.slice(6, 10);
  console.log(thirdSet);
}
```

Now that tests been done, they have to be returned in the format requested which can be done via string interpolation.

```js
function createPhoneNumber(numbers) {
  arr1 = numbers.join("");
  re = new RegExp(`^.{${3}}`, "g");
  //   console.log(arr1)
  //   console.log(re)
  firstSet = arr1.match(re).join("");
  secondSet = arr1.slice(3, 6);
  //   console.log(secondSet)
  thirdSet = arr1.slice(6, 10);
  //   console.log(thirdSet)
  return `(${firstSet}) ${secondSet}-${thirdSet}`;
}
```
