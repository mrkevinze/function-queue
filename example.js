'use strict';

const FunctionQueue = require('./function-queue');

const add = (a, b) => a + b;

const functionQueue = new FunctionQueue();
functionQueue.enqueue(add, 1, 2);
functionQueue.enqueue(add, 1, 3);

console.log(functionQueue.size());    // 2
console.log(functionQueue.dequeue()); // 3
console.log(functionQueue.dequeue()); // 4
console.log(functionQueue.size());    // 0
