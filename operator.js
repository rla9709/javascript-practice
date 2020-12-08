// 1. String concatenation
console.log("my" + "cat");
console.log("1" + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //subtract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 2); //remainder
console.log(2 ** 3); //exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6.Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the frist falsy value
console.log(`and: ${value1 && value2 && check()}`);

//  often used to compress long if-statement
//  nullableObject && nullableObject.something

function check() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log("🕳🕳");
  }
  return true;
}

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = "5";
const numverFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numverFive);
console.log(stringFive != numverFive);

// === strict equality, no type conversion
console.log(stringFive === numverFive);
console.log(stringFive !== numverFive);

// object equality by reference
const kristal1 = { name: "kristal" };
const kristal2 = { name: "kristal" };
const kristal3 = kristal1;
console.log(kristal1 == kristal2);
console.log(kristal1 === kristal2);
console.log(kristal1 === kristal3);

// equality - puzzler
console.log(0 == false);
console.log(0 === false);
console.log("" == false);
console.log("" === false);
console.log(null == undefined);
console.log(null === undefined);

// 8. Conditional operators: if
// if, else if, else

const name = "kristal";

if (name === "kristal") {
  console.log("welcome " + name + "!");
} else if (name === "coder") {
  console.log("You are amazing coder");
} else {
  console.log("Unknown");
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === "kristal" ? "yes" : "no");

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = "IE";
switch (browser) {
  case "IE":
    console.log("go away!");
    break;
  case "Chrome":
    console.log("love you!");
    break;
  case "Firefox":
    console.log("love you!");
    break;
  default:
    console.log("same all!");
    break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
  console.log(`do while : ${i}`);
  i--;
} while (1 > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`inline variable for : ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}


// PRACTICETIME!!!

// Q1. iterate from 0 to 10 and print only even numbers
// (use continue)

for(let i = 0; i < 11; i++) {
    if (i % 2 !==0) {
        continue;
    }
    console.log(`q1. ${i}`);
}

// Q2. iterate form 0 to 10 and print numbers until reaching 8 (use break)

for(let i = 0; i < 11; i++); {
    if (i >8){
        break;
    }
    console.log(`q2 ${i}`);
}
 
