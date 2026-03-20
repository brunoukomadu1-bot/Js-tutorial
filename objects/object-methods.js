1; Object.keys()
// What it does:
// Returns an array of an object's property names (keys).

// Example:
const user1 = { name: "John", age: 25 };

console.log(Object.keys(user1));
// ["name", "age"]

2; Object.values()
// What it does:
// Returns an array of an object's property names (keys).

// Example:
const user2 = { name: "John", age: 25 };

console.log(Object.values(user2));
// ["John", 25]


3; Object.entries()
// What it does:
// Returns an array of key-value pairs.

// Example:
const user3 = { name: "John", age: 25 };

console.log(Object.entries(user3));
// [["name", "John"], ["age", 25]]


4; Object.fromEntries()
// What it does:
// Transforms an array of key-value pairs back into an object.

// Example:

const entries = [["name", "John"], ["age", 25]];

const obj1 = Object.fromEntries(entries);
console.log(obj1);
// { name: "John", age: 25 }


5; Object.assign()
// What it does:
// Copies properties from one or more objects into a target object.

// Example:
const target = { a: 1 };
const source = { b: 2 };

const result = Object.assign(target, source);
console.log(result);
// { a: 1, b: 2 }


6; Object.freeze()
// What it does:
// Prevents modification (no adding, deleting, or changing properties).

// Example:
const obj = { name: "John" };

Object.freeze(obj);
obj.name = "Doe";

console.log(obj.name);
// "John" (unchanged)


7; Object.seal()
// What it does:
// Prevents adding/removing properties, but allows modification of existing ones.

// Example:
const obj = { name: "John" };

8; Object.freeze(obj);
obj.name = "Doe";

console.log(obj.name);
// "John" (unchanged)


9; Object.hasOwn()
// What it does:
// Checks if an object has a specific property (not from prototype).

// Example:
const user = { name: "John" };

console.log(Object.hasOwn(user, "name"));
// true

10; Object.create()

// What it does:
// Creates a new object with a specified prototype.

// Example:
const person = {
  greet() {
    return "Hello";
  }
};

const user4 = Object.create(person);
console.log(user4.greet());
// "Hello"


11; Object.getPrototypeOf()

// What it does:
// Returns the prototype of an object.

// Example:
const obj = {};

console.log(Object.getPrototypeOf(obj) === Object.prototype);
// true


12; Object.setPrototypeOf()

// What it does:
// Sets the prototype of an object.

// Example:
const animal = {
  speak() {
    return "Sound";
  }
};

const dog = {};
Object.setPrototypeOf(dog, animal);

console.log(dog.speak());
// "Sound"


13; Object.defineProperty()

// What it does:
// Adds or modifies a property with fine control (e.g., writable, enumerable).

// Example:
const obj = {};

Object.defineProperty(obj, "name", {
  value: "John",
  writable: false
});

obj.name = "Doe"; // won't change

console.log(obj.name);
// "John"


14; Object.defineProperties()

// What it does:
// Defines multiple properties at once.

// Example:

const obj = {};

Object.defineProperties(obj, {
  name: { value: "John", writable: true },
  age: { value: 25, writable: false }
});

console.log(obj);
// { name: "John", age: 25 }

15; Object.is()
// What it does:
// Compares two values (like === but more precise for edge cases).

// Example:

console.log(Object.is(NaN, NaN));
// true

console.log(Object.is(0, -0));
// false

16; Object.getOwnPropertyNames()

// What it does:
// Returns all property names (including non-enumerable ones).

// Example:

const obj = Object.create({}, {
  hidden: { value: 42, enumerable: false }
});

console.log(Object.getOwnPropertyNames(obj));
// ["hidden"]


17; Object.getOwnPropertyDescriptor()

// What it does:
// Returns details about a property (value, writable, enumerable, configurable).

// Example:

const obj = { name: "John" };

console.log(Object.getOwnPropertyDescriptor(obj, "name"));
/*
{
  value: "John",
  writable: true,
  enumerable: true,
  configurable: true
}
*/