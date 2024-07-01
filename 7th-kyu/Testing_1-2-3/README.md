# Testing 1-2-3

## Catagory: Fundamentals, Arrays

## Description:

Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

```js
[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
```

### Initial Code
```js
var number=function(array){
console.log(array.length)
}
```

### Steps

Since the Array passed to the function doesnt have a pre-determined length, a loop is going to be needed. To achieve whats needed .map() can let us loop through without writing the entire loop conditional out and the number will always +1 to the index of the array called. 

```js 
var number=function(array){
  return array.map((arr, index) =>  `${index + 1}: ${arr}`)
}
```

