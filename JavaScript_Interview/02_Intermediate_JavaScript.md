
# Level-2 (Intermediate)

## 1. Purpose of the map method in JavaScript.

- map() is used to transform array elements and return a new array of the same length without mutating the original array.

### 🧠 Golden Rule (Memorize This)

> If you want to return transformed data → use map()

> If you just want to loop → use forEach()

```js
const users = [
  { name: "Govind", role: "dev" },
  { name: "Amit", role: "tester" },
];

const names = users.map((user) => user.name);

console.log(names); // it will give array of names "['Govind', 'Amit']"

// +++++ Most asked interview questions over map

// 1. Trap 1: map() vs forEach()
const result = nums.map((n) => n * 2);
const result2 = nums.forEach((n) => n * 2);

console.log(result); // [2,4,6,8]
console.log(result2); // undefined ❌
// 👉 map() returns data, forEach() does not.

// 2. Trap 2: Forgetting return in map()
const output = nums.map((n) => {
  n * 2;
});

console.log(output); // [undefined, undefined, undefined, undefined]

// 3. Trap 3: map() always returns same length
const data = [1, 2, 3];

const res = data.map((n) => {
  if (n > 1) return n;
});

console.log(res); // [undefined, 2, 3]
/*
👉 map() does NOT filter
👉 Use filter() instead
*/

// 4. Trap 4: Mutating objects inside map()
const users = [{ age: 20 }, { age: 30 }];

const updated = users.map((u) => {
  u.age += 1;
  return u;
});
// ⚠️ This mutates original objects!

// safer
const updated = users.map((u) => ({
  ...u,
  age: u.age + 1,
}));

// 5. Trap 5: Using map() just for looping ❌
nums.map((n) => console.log(n)); // bad practice

// use (forEach)
nums.forEach((n) => console.log(n));

// 6. Trap 6: Async with map()
const result = urls.map(async (url) => {
  return await fetch(url);
});

console.log(result); // array of promises ❌

// correct way
const data = await Promise.all(urls.map((url) => fetch(url)));
```

## 2. 🔹 What is Event Propagation?

- When an event (like click) happens on an element, it travels through the DOM.
  This traveling process is called event propagation.

#### There are two phases:

- Event Bubbling (bottom → top)
- Event Capturing (top -> bottom)

🔹 Event Bubbling (Most Common)
📌 Meaning

Event bubbling means:

The event starts from the target element and then moves upward to its parent, grandparent, and so on.

```js
// html code
<div id="parent">
  <button id="child">Click Me</button>
</div>

// handled by js code
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});

// output
Child clicked
Parent clicked

// Default behavior is bubbling
```

#### 🔹 Event Capturing (Trick Question ⚠️)

📌 Meaning

Event capturing means:

The event starts from the outermost parent and travels down to the target element.

```js
document.getElementById("parent").addEventListener(
  "click",
  () => {
    console.log("Parent clicked");
  },
  true // capture phase enabled
);

document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});

// output
Parent clicked
Child clicked
```

#### 🧠 Golden Rule (Remember This)

By default, JavaScript uses event bubbling.

### ✅ Event Delegation (VERY IMPORTANT 🔥)
#### 🔹 What is Event Delegation?

Event delegation is a technique where:

* Instead of adding an event listener to multiple child elements, we add one event listener to their parent and handle events using event bubbling.

#### 🔹 Why Do We Need Event Delegation?

> Without delegation ❌:

* Too many event listeners

* Poor performance

* Hard to manage dynamic elements

> With delegation ✅:

* Better performance

* Cleaner code

* Works for dynamically added elements

```js
// without Even Delegation
<ul>
  <li>Apple</li>
  <li>Banana</li>
  <li>Mango</li>
</ul>

document.querySelectorAll("li").forEach(item => {
  item.addEventListener("click", () => {
    console.log(item.innerText);
  });
});
// ❌ If new <li> is added → event won’t work

// With Event delegation
document.querySelector("ul").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log(e.target.innerText);
  }
});
```

### ✅ stopPropagation() vs preventDefault()

#### 🧠 Golden Rules (Memorize This)

* Delegation = Parent + Bubbling

* stopPropagation() → stops event flow

* preventDefault() → stops browser behavior

* You can use both together

#### 🎯 Final Interview Summary ⭐

* <b>Event delegation improves performance by handling events at a parent level, while "stopPropagation()" controls event flow and "preventDefault()" blocks default browser behavior.</b>

## 3. What are higher-order functions? Provide an example.

* A higher-order function is a function that takes another function as an argument or returns a function, enabling functional programming patterns in JavaScript.

```js
//🔹 Example 1: Function as Argument (Most Common)

let greet = (name) => {
    return "Hello " + name;
};

let processUser = (callback,name) => {
    return callback(name); // greet("Govind");
};

let greetUser = processUser(greet,"Govind");
console.log(greetUser);
// Output: Hello Govind

/*
Note
✔ processUser is a higher-order function
✔ greet is a callback function
*/

// 🔹 Example 2: Function Returning Another Function
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10

// Note -: ✔ multiplier is a higher-order function


// 🔹 Built-in Higher-Order Functions (VERY IMPORTANT 🔥)

//These are most asked in interviews:
const nums = [1, 2, 3, 4];

nums.map(n => n * 2);      // map → HOF
nums.filter(n => n > 2);  // filter → HOF
nums.reduce((a, b) => a + b, 0); // reduce → HOF
nums.forEach((num)=>{console.log(num+1)});
```
#### 🔹 Why Use Higher-Order Functions?

* Code reusability

* Cleaner and readable code

* Functional programming

* Less bugs, more control

## 4. What is an IIFE (Immediately Invoked Function Expression)?
⭐
* An IIFE is a function expression that executes immediately and is used to create a private scope and avoid polluting the global namespace.

🧠 Remember This

IIFE = Function + Immediate execution + Private scope

```js
//🔹 Basic Syntax
(function () {
  console.log("IIFE executed");
})();

// 🔹 Arrow Function IIFE
(() => {
  console.log("Arrow IIFE");
})();
```

#### 🔹 Why Do We Use IIFE?
1️⃣ Avoid Global Scope Pollution

* Variables inside IIFE are private.
```js
(function () {
  let secret = "hidden";
  console.log(secret);
})();

// console.log(secret); ❌ ReferenceError
```

#### 🔹 Common Interview Trap ⚠️

❌ This will NOT work:

```js
function test() {
  console.log("Hi");
}();
```

* ✔ Because function declarations cannot be invoked immediately
* ✔ Only function expressions can


#### 🔹 How JavaScript Understands IIFE?

* Wrapping in () converts function into an expression, not a declaration.

> 🔹 Real-World Use Case
```js
const counter = (function () {
  let count = 0;
  return {
    increment() {
      count++;
      return count;
    }
  };
})();

counter.increment(); // 1
counter.increment(); // 2
```
✔ Uses closure + IIFE
🧠 Remember This

> Note->  ( IIFE = Function + Immediate execution + Private scope )

## 5.  Explain closures in JavaScript.
* Closures allow functions to access variables from their lexical scope even after the outer function has executed, enabling data privacy and function factories.

```js
// 1. Data privacy
function counter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const inc = counter();
inc(); // 1
inc(); // 2

// 2. Function Factory
function multiply(factor) {
  return function (num) {
    return num * factor;
  };
}

const double = multiply(2);
double(5); // 10
```

## 6. How do setTimeout and setInterval work?

* setTimeout executes a function once after a delay, while setInterval executes a function repeatedly at fixed intervals, both managed by the event loop.
* They are part of the Web APIs (browser environment), not core JavaScript.

> 🧠 Golden Rule (Remember This)

Timers don’t block JavaScript — they work asynchronously via the event loop.

```js
// 1. setTimeout(callback,delayMins)
console.log("Start");

setTimeout(() => {
  console.log("Runs after 2 seconds");
}, 2000);

console.log("End");
// output => start > End > Runs after 2 seconds

/*
✔ Executes only once
✔ Delay is in milliseconds
*/

// 2. setInterval(callback, delayInMs);
let count = 1;

setInterval(() => {
  console.log("Count:", count);
  count++;
}, 1000);
/*
✔ Runs every 1 second
✔ Continues until stopped
*/


// 🔹 How to Stop Them (VERY IMPORTANT 🔥)
const timerId = setTimeout(() => {
  console.log("Won't run");
}, 3000);

// clearTimeout(timerId);


const intervalId = setInterval(() => {
  console.log("Running...");
}, 1000);

// clearInterval(intervalId);
```

## 7. Describe promises in JavaScript.

###  What is a Promise?

* A Promise is an object that represents the eventual completion or failure of an asynchronous operation.


#### A promise can be in one of three states:

* Pending → initial state (waiting)

* Fulfilled → operation successful

* Rejected → operation failed

> Once fulfilled or rejected → state cannot change.

```js
// Basic Promise Example
const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Data received");
  } else {
    reject("Something went wrong");
  }
});

// 🔹 Consuming a Promise (then, catch, finally)  

myPromise
  .then(result => {
    console.log(result); // Data received
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log("Promise completed");
  });
```
> 🔹 Why Promises Were Introduced?

* To solve Callback Hell (nested callbacks).
```js
// callback Hell Example
login(user, () => {
  fetchData(() => {
    processData(() => {
      saveData();
    });
  });
});

// cleaner promise example
login(user)
  .then(fetchData)
  .then(processData)
  .then(saveData)
  .catch(console.error);

```
> 🧠 Golden Rule (Remember This)

* Promises move async code from callback hell to readable, chainable logic.

## 8. Use of async and await in JavaScript.

* async/await simplifies promise-based asynchronous code by allowing it to be written in a synchronous style with proper error handling.

#### 🧠 Golden Rule (Remember This)

async makes a function return a promise, and await waits for that promise to settle.

```js
async function getData() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}
```

## 9.  Difference between call, apply, and bind.

### What are call, apply, and bind?

* They are function methods used to:

* Manually set the value of "this" and optionally pass arguments.

```js
const user1 = {
  name: "Govind"
};

function greet(city, country) {
  console.log(`Hi, I'm ${this.name} from ${city}, ${country}`);
}

// 1. fn.call(thisArg, arg1, arg2);

/*
✔ Calls the function immediately
✔ Arguments passed one by one
*/
greet.call(user1, "Delhi", "India");
// Hi, I'm Govind from Delhi, India


// 2. fn.apply(thisArg, [arg1, arg2]);
/*
✔ Same as call()
✔ Arguments passed as an array
*/
greet.apply(user1, ["Mumbai", "India"]);
// Hi, I'm Govind from Mumbai, India


// 3. const newFn = fn.bind(thisArg, arg1, arg2);
/*
✔ Returns a new function
✔ Can be called later
*/
const boundGreet = greet.bind(user1, "Bangalore", "India");
boundGreet();
// Hi, I'm Govind from Bangalore, India

```
> 🧠 Golden Rule (MEMORIZE)

* call/apply = invoke now
* bind = invoke later