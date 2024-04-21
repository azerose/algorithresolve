var MyQueue = function () {
  this.preStack = [];
  this.postStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  while (this.preStack.length > 0) {
    this.postStack.push(this.preStack.pop());
  }
  this.preStack.push(x);
  while (this.postStack.length > 0) {
    this.preStack.push(this.postStack.pop());
  }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  return this.preStack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.preStack[this.preStack.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.preStack.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
