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
