# Convert number to reversed array of digits

## Catagory: Fundamentals

## Description

Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

### Initial Code

```
function digitize(n) {
  //code here
}
```

### Step 1

Taking the solution one step at a time, first I want to split the numbers up. So they'll be converted into a string

```
function digitize(n) {
  n.toString()
}
```

### Step 2

Now that it's a string, we want to split the new string of numbers up separately and add them to a variable.

```
function digitize(n) {
  arr = n.toString().split("")

}
```

### Step 3

.split() with the spererator as ("") will return any string as a full array. Now that the array is split, we can reverse the numbers.
But we'll need to convert the strings back into numbers, which can be done by looping through the array with the map array function.

```
function digitize(n) {
  arr = n.toString().split(" ")
  mapArr = arr.map(x => parseInt(x))
}
```

### Step 4

Finally, the returned array has to be reversed, which is easily obtainable if reverse() is used.

```
function digitize(n) {
  arr = n.toString().split(" ")
  mapArr = arr.map(x => parseInt(x))
  ans = mapArr.reverse()
}
```

### Solution:

```
function digitize(n) {
  arr = n.toString().split("")
  mapArr = arr.map(x => parseInt(x))
  ans = mapArr.reverse()
  return ans
}
```

I'd made the mistake of having the separator for.split(" ") instead of.split(""). This meant the whole number was assigned to one array index rather than each digit separately.

The above solution could also be presented as below, which is the same work just with fewer variables.

```
function digitize(n) {
return n.toString().split("").map(x => parseInt(x)).reverse()
}
```
