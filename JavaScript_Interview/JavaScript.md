## 1. What is JavaScript and its common uses?
*  JavaScript is a high-level, interpreted programming language mainly used to make web pages interactive and dynamic.

### Js Common Uses.
5️⃣ Build full applications

* Web apps (React, Angular, Vue)

* Mobile apps (React Native)

* Desktop apps (Electron)

## 2. What are Template Literals in JavaScript?


* Template literals are a modern way to create strings in JavaScript using backticks (` `) instead of quotes (' ").

### They allow us to:

* Insert variables easily via String Interpolation
```js
let firstName = "Govind";
let lastName = "Thakur";
let status = "Millionaire";
console.log(`${firstName} ${lastName} is a ${status}`);
```
* Write multi-line strings
```js
let message = `
Hello Govind,
Welcome to JavaScript learning.
Happy Coding!
`;

console.log(message);
```
* Write cleaner and readable code
```js
let age = 20;

console.log(`You are ${age >= 18 ? "Adult" : "Minor"}`);
```