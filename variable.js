"use strict";

// 2. Variable, rw(read/write)
// let (added in ES6)
let globalName = "global name";
{
  let name = "ellie";
  console.log(name);
  name = "Hello";
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);



// 3.Constants, r(read only)
// use const whenever possible.
// only use let if Variable needs to change

const daysInweek= 7;
const maxNumber= 5;

// Note!!
// Immutable data types: primitive types, frozen objects (i.3. object.freeze())
// Mutable data types: all objects by defualt are mutable in JS
// favor immutable data type always for a few reasons!
// security
// thread safety
// reduce human mistakes

// 4.Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

// number
const count = 17;
const size = 17.1;
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// string
const char = "c";
const brendan = "brendan";
const greeting = "hello" + brendan;
console.log(`value: ${greeting},type: ${typeof greeting}`);
const helloBob = `h1 ${brendan}`;
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// Boolean
const canRead = true;
const test = 3 < 1;

let text = "KIM";
console.log(`value: ${text}, type: ${typeof text}`);
text = "2";
console.log(`value: ${text}, type: ${typeof text}`);
text = "5" + 2;
console.log(`value: ${text}, type: ${typeof text}`);
text = "3" / "1";
console.log(`value: ${text}, type: ${typeof text}`);
