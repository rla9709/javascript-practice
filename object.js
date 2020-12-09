'use strict';
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };

// 1. Literals and properties
const obj1 = {}; //'object literal' syntax
const obj2 = new Object(); //'object constructor' syntax'

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const kristal = { name: 'kristal', age: 24 };
print(kristal);

// with JavaScript magic (dynamically typed language)
// can add properties later
kristal.hasJob = true;
console.log(kristal.hasJob);

delete kristal.hasJob;
console.log(kristal.hasJob);

// 2.Computed properties
// key should be always string
console.log(kristal.name); //그 키에 해당하는 값을 받아오고 싶을때 사용
console.log(kristal['name']); // 어떤값을 받아와야하는지 모를때 사용
kristal['hasJob'] = true;
console.log(kristal.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(kristal, 'name');
printValue(kristal, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('kristal', 30);
console.log(person4);

// 4. Constructor function
function Person(name, age) {
  //   this = {};
  this.name = name;
  this.age = age;
  //   return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in kristal);
console.log('age' in kristal);
console.log('random' in kristal);
console.log(kristal.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (let key in kristal) {
  console.log(key);
}

// for (value of lterable)
const array = [1, 2, 4, 5];
for (let value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obk3...])
const user = { name: 'keristal', age: '24' };
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
