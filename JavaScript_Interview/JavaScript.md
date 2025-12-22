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