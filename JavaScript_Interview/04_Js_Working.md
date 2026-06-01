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