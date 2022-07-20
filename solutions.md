## SOLUTIONS
### Solution 1
```js
function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}
```
### The Longer Version Explained
- Starting at the last character of the string passed to the function, you build a new string `reversedStr` from `str`.
- During each iteration of the `for` loop, `reversedStr` gets concatenated with itself and the current character.
- Finally, you return the final value of `reversedStr`.
