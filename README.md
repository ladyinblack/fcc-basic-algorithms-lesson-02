# js-4jwtus

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/js-4jwtus)

### [Reverse a String](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/reverse-a-string)


## HINTS
We need to take the string and reverse it, so if it originally reads `hello`, it will now read `olleh`.  You can solve this challenge by creating a new string (initializing it to a blank string `""`) and then iterating the string starting from the last character through the first character and the concatenating each character to the new string.  After iterating through all the characters in the string, you return the new string.

### The Shorter Version Explained (AS ABOVE)
- Our goal is to take the input, `str`, and return it in reverse.  Our first step is to split the string by characters using `split('')`.  Notice that we don't leave anything in between the single quotes, this tells the function to split the string by each character.
- Using the `split()` function will turn our string into an array of characters, keep that in mind as we move forward.
- Next we chain the `reverse()` function, which takes our array of characters and reverses them.
- Finally, we chain `join('')` to put our characters back together into a string.  Notice once again that we left no spaces in the argument for join, this makes sure that the array of characters is joined back together by each character.

### REFERENCE LINKS
- [`str.split()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
- [`arr.reverse()`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
- [`arr.join()`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
