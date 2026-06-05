### Interview Answer (Short Version)

* Whenever JavaScript runs a program, it creates a Global Execution Context. The execution context has two phases: Memory Creation Phase and Code Execution Phase. In the memory phase, variables are allocated memory and functions are stored completely. In the execution phase, code runs line by line. Whenever a function is invoked, JavaScript creates a new Function Execution Context, which also goes through memory creation and execution phases. After the function finishes execution, its execution context is removed from the Call Stack.

#### Common Interview Questions

* Q1. What is an Execution Context?

> An environment where JavaScript code is evaluated and executed.

* Q2. How many types of Execution Context are there?

> Global Execution Context
Function Execution Context
Eval Execution Context (rarely used)

* Q3. What is the Call Stack?

> A stack that manages execution contexts and tracks function calls.

* Q4. What is the Temporal Dead Zone (TDZ)?

> The time between memory allocation and initialization of let and const variables.

* Q5. Why are functions callable before their declaration?

> Because function declarations are fully stored in memory during the creation phase (hoisting).

# Browser Storage & Redux - Interview Notes

## 1. Local Storage vs Session Storage

### Local Storage

* Stores data permanently until manually removed.
* Data remains even after closing the browser.
* Capacity: ~5-10 MB.

```javascript
localStorage.setItem("name", "Govind");
```

**Use Cases:**

* Theme preference
* Language settings
* Remember user choices

### Session Storage

* Stores data only for the current browser tab/session.
* Data is cleared when the tab is closed.

```javascript
sessionStorage.setItem("name", "Govind");
```

**Use Cases:**

* Multi-step forms
* Temporary session data

### Interview One-Liner

> Local Storage persists data even after the browser is closed, while Session Storage keeps data only until the current tab is open.

---

## 2. What are Cookies?

Cookies are small pieces of data stored by the browser and automatically sent to the server with every request.

```javascript
document.cookie = "username=Govind";
```

**Use Cases:**

* Authentication
* Session management
* User tracking

### Cookie vs Session Storage

| Feature         | Cookie         | Session Storage   |
| --------------- | -------------- | ----------------- |
| Sent to Server  | ✅ Yes          | ❌ No              |
| Storage Size    | ~4KB           | ~5MB              |
| Auto Expires    | Can expire     | Ends with tab     |
| Mainly Used For | Auth, Sessions | Temporary UI Data |

### Interview One-Liner

> Cookies are automatically sent to the server with each request, while Session Storage stays only in the browser and is not sent to the server.

---

## 3. Why Redux When We Have Local Storage?

### Local Storage

* Stores data permanently in the browser.
* Does not automatically update the UI.

### Redux

* Manages application state in memory.
* Instantly updates all components when state changes.

### Example

#### Local Storage

```javascript
localStorage.setItem("cart", JSON.stringify(cart));
```

Stores data but UI won't automatically update everywhere.

#### Redux

```javascript
dispatch(addToCart(product));
```

Every component using the cart gets updated instantly.

### Interview Answer

> Local Storage is used for persistent data storage, whereas Redux is used for state management. Redux helps share and update data across components in real time, while Local Storage is mainly used to persist data between page refreshes.

---

## 10-Second Interview Summary

> Local Storage stores data permanently, Session Storage stores data for a single tab session, and Cookies store small data that is automatically sent to the server. Redux is different because it manages application state and updates the UI in real time, while Local Storage is only for persistence.


## 4. Callback Functions in Javascript

### What
* A callback function is simply a function passed as an argument to another function, which is executed later.

```js
function greet(name, callback){ // greet() is a higher order function
     return callback(name);
};

function sayHello(name){ // sayHello() is a callback function
     return `Hello, ${name}`;
};
console.log(greet(sayHello, "Govind")); // arguments order matter
```

### Why are callbacks used?
* Callbacks help JavaScript handle async operations without blocking the main thread.

### What is Callback hell ?
* Deeply nested callbacks that make code difficult to read and maintain.


### Difference between synchronous and asynchronous callbacks?

1. Synchronous Callback (Runs Immediately)
```js
arr.forEach(callback=>processedData)
```

2. Asynchronous Callback (Runs Later)
```js
setTimeout(callback,100)
```

## 15-Second Interview Answer

* "A callback function is a function passed as an argument to another function and executed later. JavaScript uses callbacks heavily for asynchronous tasks like API calls, timers, and file operations. While callbacks are useful, excessive nesting leads to callback hell, which is why modern JavaScript uses Promises and async/await." 🚀