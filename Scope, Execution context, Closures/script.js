/* scope hai ke app apne created variables and functions ko kaha tak use kr sakte ho */

/* TYPES:
 1. functional scope
 2. global scope
 3. block scope 
*/

/* 1. function scope - function ke andar hi use ho skti hai
2. global scope - poore code mai kahi bhi use ho skti hai.
3. block scope - {} braces mai hi use ho skti hai  */

/* ye code humein error dega, kio ke a ko humne block scope bna dia hai, or aus ko sirf block ke andr hi access kr skte hain.  */
// function check() {
//   {
//     let a = 10;
//   }
//   console.log(a);
// }

// check();

/* Execution Context: memory creation & execution phase */

/* Execution Context: Js sabse pehle jaise hi apka function dekhta hai, sabse pehle js bnata hai execution context... Ye ek process jo ki 2 different phases mein chalta hai.

1. memory phase 
2. execution phase */

// function first() {
//     console.log("Inside first function: Start");
//     second();
//     console.log("Inside first function: End");
// }

// function second() {
//     console.log("Inside second function");
// }

// // Global code execution begins
// console.log("Global Context: Start");
// first();
// console.log("Global Context: End");

/* Lexical Scoping -  Function apne variables sirf wahan se access kar sakta hai jahan wo likha gaya ho. */

// function abcd() {
//   let a = 12;

//   function efgh() {
//     console.log(a);
//   }
// }

// abcd();

/* Closures - Closure tab banta hai jab koi inner function apne outer function ke variables ko “yaad” rakhta hai, even jab outer function finish ho chuka ho.  */

/* Example: 1  */
// function outer(){
//     let count = 0

//     function inner(){
//         count++
//         console.log(count);
//     }

//     return inner
// }

// let counter = outer()
// counter()
// counter()

/* Example: 2  */

// function abcd(){
//     let num = 12

//     return function(){
//         console.log(num);
//     }
// }

/* Example: 3 - Har outer function call apni closure memory banata hai, jo independent hoti hai.*/

function outer() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

let fnc = outer();
fnc();
fnc();
fnc();
fnc();

let fnc2 = outer();
fnc2();
fnc2();
fnc2();
