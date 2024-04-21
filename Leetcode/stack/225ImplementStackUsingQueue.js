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
  } // preStack의 크기가 0보다 크다면 postStack에 저장해서 preStack을 빈배열로 초기화
  this.preStack.push(x); // 길이가 0일때 preStack에 저장해서 나중에 들어온값이 이전에 들어온값 뒤에 위치할수있게함
  while (this.postStack.length > 0) {
    this.preStack.push(this.postStack.pop());
  } // 이전에 저장했던 postStack에서 값을 다시 push를 통해서 가장 끝에 위치시킴

  // 먼저 담긴 값이 가장 뒤에 위치해있도록 조절
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
