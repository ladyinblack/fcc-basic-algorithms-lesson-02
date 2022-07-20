// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Reverse a String</h1>`;

/** TODO:
 * Reverse the provided string.
 * You may need to turn the string into an array before you can reverse it.
 * Your result must be a string.
 
 function reverseString(str) {
   return str;
 }
 
 reverseString("hello");
 */

function reverseString(str) {
  str = str.split('').reverse().join('');
  return str;
}

console.log(reverseString('hello'));
console.log(reverseString('Howdy'));
console.log(reverseString('Greetings from Earth'));
