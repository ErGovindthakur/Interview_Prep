# Level-3 (Advanced)

## 1. Explain the event loop in JavaScript.

* The event loop is a mechanism that allows JavaScript to perform non-blocking, asynchronous operations even though JavaScript is single-threaded.

> OR
* The event loop enables JavaScript to handle asynchronous operations by prioritizing microtasks over macrotasks and executing callbacks when the call stack is empty.

### 🔹 Why do we need the Event Loop?

> Because JavaScript:

* Has only one call stack

* Would freeze the UI if long tasks blocked it

> The event loop ensures:

* Non-blocking behavior

* Smooth UI

* Async tasks don’t stop synchronous code

### 🔹 When does the Event Loop work?

* Every time the call stack becomes empty

* It decides what runs next

### 🔹 Where does the Event Loop work?

> In the JavaScript runtime environment

1. Browser

2. Node.js

> ⚠️ The event loop is not part of JavaScript language, it’s part of the runtime.

### 🔹 How the Event Loop Works (Step-by-Step)

> JavaScript runtime has:

1.Call Stack

* Executes synchronous code (LIFO)

2.Web APIs / Node APIs

* Handles async tasks

* setTimeout, fetch, DOM events

3.Callback Queues

* Microtask Queue (HIGH priority) 
>eg  Promise.then/Promise.catch/finally

* Macrotask Queue (LOW priority)
> eg setTimeout,setInterval

4.Event Loop

* Moves tasks from queues → call stack

```js
// 🔹 Execution Order Example (INTERVIEW FAVORITE 🔥)

console.log("Start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

// output order
/*
Start (callstack)
End (callstack)
Promise (microtask)
setTimeout (macrotask)
*/
```

#### what are Web API.
* Web APIs are browser-provided asynchronous interfaces that allow JavaScript to handle tasks like "timers", "HTTP requests", and "DOM events" without blocking the main thread.

* 👉 fetch → Web API → microtask
* 👉 setTimeout → Web API → macrotask

## 2. Difference between promises and async/await. 

> Note -> ⚠️ First, the most important truth (many candidates miss this):
async/await is NOT a replacement for Promises — it is built ON TOP of Promises.

* Promises represent asynchronous results, while async/await provides a cleaner syntax to consume promises in a synchronous-looking manner.

### 🔹 Core Difference (One Look Summary)

| Feature        | Promises             | async / await        |
| -------------- | -------------------- | -------------------- |
| What it is     | Asynchronous object  | Syntax over promises |
| Introduced in  | ES6                  | ES8                  |
| Syntax style   | Chaining (`.then()`) | Synchronous-like     |
| Readability    | Medium               | High                 |
| Error handling | `.catch()`           | `try...catch`        |
| Debugging      | Harder               | Easier               |
| Return value   | Promise              | Promise (always)     |
| Blocking       | ❌ Non-blocking       | ❌ Non-blocking       |


#### 🔹 Code Comparison (Same Logic)

#### ❌ Using Promises
```js
fetchUser()
  .then(user => {
    return fetchOrders(user.id);
  })
  .then(orders => {
    console.log(orders);
  })
  .catch(error => {
    console.log(error);
  });
```

#### ✅ Using async/await

```js
async function getOrders() {
  try {
    const user = await fetchUser();
    const orders = await fetchOrders(user.id);
    console.log(orders);
  } catch (error) {
    console.log(error);
  }
}
/*
✔ Cleaner
✔ Easier to read
✔ Easier to debug
*/
```

### 🧠 Golden Rule (MEMORIZE THIS)

* Promises are the foundation, async/await is the syntax sugar.

## 3. Purpose of the reduce method in arrays

* reduce() is used to iterate over an array and accumulate its values into a single result such as a number, object, or array.

#### 🧠 Golden Rule (MEMORIZE)

* If the output is NOT an array of same length → think reduce()

### 🔹 Basic Syntax (Understand This Clearly)
```js
array.reduce((accumulator, currentValue, index, array) => {
  return updatedAccumulator;
}, initialValue);

/*
Parameters:

accumulator → result so far

currentValue → current element

initialValue → starting value (VERY IMPORTANT 🔥)
*/
```

```js
//🔹 Basic Example: Sum of Numbers

const nums = [1, 2, 3, 4];

const sum = nums.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(sum); // 10
```
