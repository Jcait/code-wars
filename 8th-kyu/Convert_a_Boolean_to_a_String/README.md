# Convert a Boolean to a String

## Catagory: Fundamentals

## Description:

Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.

### Initial Code

```js
function booleanToString(b) {
  //your code here
}
```

### Steps

To begin with, we add an if statement to the function to check what the value of b is.

```js
function booleanToString(b){
  if b === true {
    return "true"
  }
}

```

The above code checks if 'b' equals the boolean true and returns the string "true," but it currently won't return "false."

```js
function booleanToString(b){
  if b === true {
    return "true"
  } else {
    return "false"
  }
}
```

The above code will return "false" if b = anything else other than true. Since true and false are the only inputs applied to b received, there isn't a need to be more specific with an else if conditional.

### Solution:

```js
function booleanToString(b) {
  if (b === true) {
    return "true";
  } else {
    return "false";
  }
}
```

Addendum: Always make sure your if() and else if() conditions are wrapped in brackets.

```js
function booleanToString(b) {
  return b.toString();
}
```

This solution is brilliant and is a reminder to think outside the box at times..
