# Function Queue

A simple function queue that enables you to

1. Enqueue a function and its arguments
2. Dequeue a function to execute it
3. Obtain the size of the queue

## Usage

```
const FunctionQueue = require('./function-queue');

const functionQueue = new FunctionQueue();
functionQueue.enqueue(yourFunction, <commaSeparatedArgs>);
const result = functionQueue.dequeue();
console.log(functionQueue.size());
```

There are more examples in [example.js](example.js).

## Implementation

The function queue is written in JavaScript ES6. It does not rely on timeouts and has no module dependencies.

If you are developing for the browser, you probably need to use [babel](https://babeljs.io/) to transpile the code in order to support previous versions of JavaScript.

In addition, the queue relies on [rest parameters](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/rest_parameters). You may want to check for browser compatibility before using it.
