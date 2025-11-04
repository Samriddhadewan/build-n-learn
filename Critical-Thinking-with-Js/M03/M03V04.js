// Array implementation
class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(item) {
    this.items.push(item);
  }
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.shift();
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }
  print() {
    console.log(this.items.join(" -> "));
  }
}

const queue = new Queue()
queue.enqueue(22)
queue.enqueue(44)
queue.enqueue(66)
queue.print()

queue.dequeue()
queue.print()
console.log(queue.peek())