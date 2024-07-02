# Does my number look big in this?

## Catagory: Rank up

## Description

A [Narcissistic Number](https://en.wikipedia.org/wiki/Narcissistic_number) (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcissistic:

```js
1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
```

and 1652 (4 digits), which isn't:

```js
1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
```

The Challenge:

Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.

This may be True and False in your language, e.g. PHP.

Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

### Initial Code

```js
function narcissistic(value) {
  // Code me to return true or false
}
```

### Steps

First thing is to grab the values number of digits and turn it into an array so it can be iterated on.

```js
function narcissistic(value) {
  // Code me to return true or false
  //   value digits
  let digits = value.toString().length;
  //   array of value
  let num = value.toString().split("");
  console.log(digits);
  console.log(num);
}
```

Now the array can be looped over using .map() along with some math

```js
function narcissistic(value) {
  // Code me to return true or false
  //   value digits
  let digits = value.toString().length;
  //   array of value
  let num = value.toString().split("");
  num2 = num.map((x) => x ** digits);
  //   console.log(value)
  //   console.log(num)
  //   console.log(digits)
  //   console.log(num2)
}
```

the new array num2 can be summed up using reduce and we can then return the comparison between it and the initial value which will return true or false

```js
function narcissistic(value) {
  // Code me to return true or false
  //   value digits
  let digits = value.toString().length;
  //   array of value
  let num = value.toString().split("");
  num2 = num.map((x) => x ** digits);
  //   console.log(value)
  //   console.log(num)
  //   console.log(digits)
  //   console.log(num2)
  let sum = num2.reduce((acc, cur) => acc + cur);
  console.log(sum);
  return value == sum;
}
```

### Refactor

Sum and num2 can be removed entirely, digits and num could also removed and their methods added to the return but I feel that would kill any readability.

```js
function narcissistic(value) {
  // Code me to return true or false
  //   value digits
  let digits = value.toString().length;
  let num = value.toString().split("");

  return value == num.map((x) => x ** digits).reduce((acc, cur) => acc + cur);

  return (
    value ==
    value
      .toString()
      .split("")
      .map((x) => x ** value.toString().length)
      .reduce((acc, cur) => acc + cur)
  );
}
```
