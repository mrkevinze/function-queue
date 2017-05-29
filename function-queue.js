'use strict';

function FunctionQueue() {
  this.queue = [];
  this.size = () => this.queue.length;
  this.enqueue = (fn, ...args) => this.queue.push(() => fn.apply(this, args));
  this.dequeue = () => (this.queue.shift())();
}

module.exports = FunctionQueue;
