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
## 4. Debouncing vs Throttling (ADVANCED • VERY IMPORTANT 🔥)
* These two are used to control how frequently a function executes, especially for performance optimization.

### 🔹 WHY do we need them?

####  Some events fire too many times:

* scroll

* resize

* keyup

* mousemove

> ❌ Without control → performance issues

> ✅ With control → smooth apps

### 🔹 What is Debouncing?
* Debouncing ensures that a function is executed only after a specified delay once the event stops firing.

👉 “Wait until the user is done”

#### 🧠 Real-life analogy

* 📱 Typing in search box
→ API call should happen after user stops typing

```js
// Debouncing Example
function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// Usage
function search(query) {
  console.log("Searching for:", query);
}

const debouncedSearch = debounce(search, 500);

/*
✔ Function runs once after delay
✔ Previous calls are cancelled
*/
```

### 🔹 What is Throttling?
* Throttling ensures a function is executed at most once in a given time interval, no matter how many times the event fires.

👉 “Run at regular intervals”

#### 🧠 Real-life analogy

* 🖱 Scrolling
→ Update scroll position every 200ms, not continuously

```js
// Throttling Example
function throttle(fn, limit) {
  let flag = true;

  return function (...args) {
    if (flag) {
      fn.apply(this, args);
      flag = false;

      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
}

// Usage
function onScroll() {
  console.log("Scrolling...");
}

const throttledScroll = throttle(onScroll, 1000);
// ✔ Executes at fixed intervals
```

### 🔹 Key Difference Table (INTERVIEW MUST ⭐)
| Feature        | Debouncing        | Throttling             |
| -------------- | ----------------- | ---------------------- |
| Execution      | After event stops | At regular intervals   |
| Best for       | Search input      | Scroll / resize        |
| Calls          | Last call only    | First call in interval |
| Delay behavior | Reset timer       | Ignore extra calls     |


## 5. Explain currying in JavaScript. 
* Currying is the process of converting a function with multiple parameters into nested functions that take one parameter at a time.

```js
// 1. Normal function
function add(a, b, c) {
  return a + b + c;
}

add(1, 2, 3); // 6

//2. curried version
function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

add(1)(2)(3); // 6
/*
✔ Each function takes one argument
✔ Uses closures to remember previous values
*/

// 3. arrow curried version
const multiply = a => b => c => a * b * c;

multiply(2)(3)(4); // 24
```

#### 🔹 Why Does Currying Work?

> Because of closures:

* Inner functions remember values of outer functions

* Values are stored until the final function executes

#### 🔹 When to Use Currying?

* When you want reusable logic

* When building configurable functions

* When working with functional patterns

#### 🔹 When NOT to Use It?

* Simple functions

* When readability suffers

* When team is not familiar

#### 🧠 Golden Rule (MEMORIZE)

* Currying = One argument at a time + Closures

## 6. What is a generator function and its usage?  

* A generator function is a special type of function that can pause its execution and resume later, returning multiple values one at a time instead of all at once.

* 👉 Defined using function*
* 👉 Uses the yield keyword
* 👉 Returns a generator object (an iterator)

```js
// Example of generator function

function* count() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = count();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }

/*
Note -> 
🧠 Key Points

yield pauses execution

next() resumes execution

done: true means generator is finished
*/
```
#### 🔹 When to Use Generators?

* Lazy data generation

* Custom iterators

* Controlled execution

* Memory-efficient loops

#### 🔹 When NOT to Use?

* Simple logic

* When async/await is clearer

* If team is unfamiliar

#### 🧠 Golden Rule (MEMORIZE)

* Generators = Pause + Resume + Yield values on demand

