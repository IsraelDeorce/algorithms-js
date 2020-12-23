function Queue() {
    this.elements = [];
}

// adds an element to the queue
Queue.prototype.enqueue = function (e) {
    this.elements.push(e);
}

// removes an element from the front of the queue
Queue.prototype.dequeue = function () {
    return this.elements.shift();
}

// gets the element at the front of the queue without removing it
Queue.prototype.peek = function () {
    return !this.isEmpty() ? this.elements[0] : undefined;
}

Queue.prototype.length = function() {
    return this.elements.length;
}

Queue.prototype.print = function() {
    this.elements.forEach(e => console.log(e));
}

module.exports = Queue;