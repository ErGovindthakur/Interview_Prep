## 1. What is JavaScript and its common uses?

- JavaScript is a high-level, interpreted programming language mainly used to make web pages interactive and dynamic.

### Js Common Uses.

5️⃣ Build full applications

- Web apps (React, Angular, Vue)

- Mobile apps (React Native)

- Desktop apps (Electron)

## 2. What are Template Literals in JavaScript?

- Template literals are a modern way to create strings in JavaScript using backticks (` `) instead of quotes (' ").

### They allow us to:

- Insert variables easily via String Interpolation

```js
let firstName = "Govind";
let lastName = "Thakur";
let status = "Millionaire";
console.log(`${firstName} ${lastName} is a ${status}`);
```

- Write multi-line strings

```js
let message = `
Hello Govind,
Welcome to JavaScript learning.
Happy Coding!
`;

console.log(message);
```

- Write cleaner and readable code

```js
let age = 20;

console.log(`You are ${age >= 18 ? "Adult" : "Minor"}`);
```

## 3. What is Hoisting in JavaScript?

- Hoisting is JavaScript’s behavior of moving declarations to the top of their scope during the memory creation phase before code execution.

#### Note

- 👉 Only declarations are hoisted
- 👉 Initialization is NOT hoisted

#### Key Points to Remember

- var → hoisted (undefined)

```js
console.log(a); // undefined
var a = 10;

// Let's understand how it's internally works
let a; // declaration
console.log(a); // undefined
a = 10;
```

- let / const → hoisted (TDZ)

```js
console.log(a); // ReferenceError (Due to Temporal Dead Zone)
let a = 10;
```

- Function declarations → fully hoisted

```js
greet(); // Works

function greet() {
  console.log("Hello Govind");
}
```

- Function expressions → NOT hoisted

```js
sayHi(); // ❌ TypeError

var sayHi = function () {
  console.log("Hi");
};
```

### 4. What is TDZ?
* The Temporal Dead Zone is the period from the start of a block until a <b>let</b> or <b>const</b> variable is initialized, during which accessing it throws a ReferenceError.
> Example
```js
// TDZ starts
console.log(a); // Reference Error
let x = 5;
console.log(a); // works perfectly due to end of TDZ
// TDZ ends

/*Same Thing Applying "const" also */
```

## 5. Difference between let, var, and const.
* var is function-scoped and unsafe, let is block-scoped and mutable, and const is block-scoped and immutable in reference.

```js
var a = 10;
var a = 20; // allowed
a = 30;     // allowed

let b = 10;
// let b = 20; ❌ error
b = 30;      // allowed

const c = 10;
// c = 20; ❌ error

// Important Note about const (Interview Trap ⚠️)

const user = { name: "Govind" };
user.name = "Thakur"; // ✅ allowed

👉 Object reference cannot change, but properties can.
```

| Feature                      | `var`                            | `let`             | `const`           |
| ---------------------------- | -------------------------------- | ----------------- | ----------------- |
| **Scope**                    | Function scope                   | Block scope `{}`  | Block scope `{}`  |
| **Hoisting**                 | Yes (initialized as `undefined`) | Yes (TDZ applies) | Yes (TDZ applies) |
| **Temporal Dead Zone (TDZ)** | ❌ No                             | ✅ Yes             | ✅ Yes             |
| **Re-declaration**           | ✅ Allowed                        | ❌ Not allowed     | ❌ Not allowed     |
| **Re-assignment**            | ✅ Allowed                        | ✅ Allowed         | ❌ Not allowed     |
| **Initialization required**  | ❌ No                             | ❌ No              | ✅ Yes             |
| **Adds to global object**    | ✅ Yes (window)                   | ❌ No              | ❌ No              |
| **Preferred usage**          | ❌ Avoid                          | ✅ Yes             | ✅ Yes (default)   |


## 6. Data types in JavaScript.
```js
/*
========================================
JavaScript Data Types (Single Code Base)
========================================

JavaScript has TWO categories of data types:
1. Primitive Data Types
2. Non-Primitive (Reference) Data Types
*/

/* ================================
   1. PRIMITIVE DATA TYPES
   ================================ */

/*
1️⃣ Number
- Used for integers and floating-point numbers
*/
let age = 25;            // integer number
let price = 99.99;      // decimal number

/*
2️⃣ String
- Used for text
- Can be written in single, double quotes or template literals
*/
let name = "Govind";
let city = 'Delhi';
let message = `Welcome ${name}`;

/*
3️⃣ Boolean
- Represents true or false
*/
let isLoggedIn = true;
let hasPermission = false;

/*
4️⃣ Undefined
- Variable declared but not assigned a value
*/
let result;
console.log(result); // undefined

/*
5️⃣ Null
- Represents intentional absence of value
*/
let data = null;

/*
6️⃣ BigInt
- Used to store very large numbers
- End with 'n'
*/
let bigNumber = 123456789012345678901234567890n;

/*
7️⃣ Symbol
- Used to create unique identifiers
*/
let id = Symbol("userId");

/* ================================
   2. NON-PRIMITIVE (REFERENCE) TYPES
   ================================ */

/*
8️⃣ Object
- Collection of key-value pairs
*/
let user = {
  name: "Govind",
  age: 22,
  isDeveloper: true
};

/*
9️⃣ Array
- Ordered list of values
*/
let skills = ["HTML", "CSS", "JavaScript"];

/*
🔟 Function
- Block of reusable code
*/
function greet() {
  return "Hello JavaScript";
}

/* ================================
   TYPE CHECKING USING typeof
   ================================ */

console.log(typeof age);        // number
console.log(typeof name);       // string
console.log(typeof isLoggedIn); // boolean
console.log(typeof result);     // undefined
console.log(typeof data);       // object (JavaScript bug)
console.log(typeof bigNumber);  // bigint
console.log(typeof id);         // symbol
console.log(typeof user);       // object
console.log(typeof skills);     // object
console.log(typeof greet);      // function

/*
========================================
IMPORTANT INTERVIEW NOTES
========================================
- JavaScript has 7 primitive data types
- Objects, arrays, and functions are reference types
- typeof null === "object" (known JS bug)
- Functions are objects but typeof returns "function"
========================================
*/
```

## 7. What is an Array ?
 * An array is a data structure that stores multiple values in a single variable and allows access using index positions starting from zero.

 > Note => Array in Js is a special type of Object data type.

 ```js
 // 1. Creating an array
 let fruits = ["Apple", "Banana", "Mango"];

// 2. Accessing an array elem
console.log(fruits[0]);

// 3. Modifying an array elem
fruits[1] = "Orange";
console.log(fruits); // ["Apple", "Orange", "Mango"]

// 4. Array length
console.log(fruits.length); // 3

// 5. Loop Through an array
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
 ```

#### Some Common and most asked Js inbuilt array methods

```js
/*
===========================================================
Most Asked JavaScript Array Inbuilt Methods (Interview Ready)
Single Code Base with Clear Explanations in Comments
===========================================================
*/

let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "mango"];

/* =========================================================
1️⃣ push() → Add element at the END of array
- Modifies original array
- Returns new length
========================================================= */
fruits.push("orange");
console.log(fruits); // ["apple","banana","mango","orange"]

/* =========================================================
2️⃣ pop() → Remove element from the END
- Modifies original array
- Returns removed element
========================================================= */
let removedFruit = fruits.pop();
console.log(removedFruit); // orange
console.log(fruits);       // ["apple","banana","mango"]

/* =========================================================
3️⃣ unshift() → Add element at the START
- Modifies original array
========================================================= */
fruits.unshift("kiwi");
console.log(fruits); // ["kiwi","apple","banana","mango"]

/* =========================================================
4️⃣ shift() → Remove element from the START
- Modifies original array
========================================================= */
fruits.shift();
console.log(fruits); // ["apple","banana","mango"]

/* =========================================================
5️⃣ map() → Transform each element
- Returns NEW array
- Does NOT modify original array
========================================================= */
let doubledNumbers = numbers.map((num) => {
  return num * 2;
});
console.log(doubledNumbers); // [2,4,6,8,10]

/* =========================================================
6️⃣ filter() → Filter elements based on condition
- Returns NEW array
========================================================= */
let evenNumbers = numbers.filter((num) => {
  return num % 2 === 0;
});
console.log(evenNumbers); // [2,4]

/* =========================================================
7️⃣ reduce() → Reduce array to single value
- Used for sum, max, count, etc.
========================================================= */
let sum = numbers.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(sum); // 15

/* =========================================================
8️⃣ find() → Returns FIRST matching element
========================================================= */
let found = numbers.find((num) => {
  return num > 3;
});
console.log(found); // 4

/* =========================================================
9️⃣ includes() → Check if value exists
- Returns true / false
========================================================= */
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("grapes")); // false

/* =========================================================
🔟 indexOf() → Returns index of element
- Returns -1 if not found
========================================================= */
console.log(fruits.indexOf("mango")); // 2

/* =========================================================
1️⃣1️⃣ slice() → Extract part of array
- Does NOT modify original array
========================================================= */
let sliced = fruits.slice(0, 2);
console.log(sliced); // ["apple","banana"]

/* =========================================================
1️⃣2️⃣ splice() → Add / Remove elements
- Modifies original array
========================================================= */
fruits.splice(1, 1, "grapes");
console.log(fruits); // ["apple","grapes","mango"]

/* =========================================================
1️⃣3️⃣ sort() → Sort array
- Converts elements to strings by default
========================================================= */
let nums = [10, 2, 30, 4];
nums.sort((a, b) => a - b); // ascending
console.log(nums); // [2,4,10,30]

/* =========================================================
1️⃣4️⃣ forEach() → Loop through array
- Does NOT return anything
========================================================= */
fruits.forEach((fruit) => {
  console.log(fruit);
});

/* =========================================================
INTERVIEW QUICK NOTES ⭐
===========================================================
- map, filter, reduce → return NEW array/value
- push, pop, shift, unshift, splice → modify original array
- forEach → returns undefined
- slice ≠ splice (very common interview trap)
===========================================================
*/
```
## 8. Difference between == and ===.
* <b> == </b>compares values with type coercion, while <d>===</b> compares both value and type without type conversion.

```js 
console.log(5 == "5");    // true  (string converted to number)
console.log(5 === "5");  // false (number ≠ string)
```

## 9. Purpose of the isNaN function.
* isNaN() checks whether a value is not a number, but it performs type coercion; Number.isNaN() is safer and preferred.

> true → if the value is NOT a valid number

> false → if the value can be treated as a number

```js
Number.isNaN("abc"); // false
Number.isNaN(NaN);   // true
Number.isNaN("123"); // false

````