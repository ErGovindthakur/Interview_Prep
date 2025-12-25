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