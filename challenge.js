class Node {
  constructor(value, next_node = null) {
    this.value = value;
    this.next_node = next_node;
  }
}

class LinkedList {
  // setup head and tail
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(number) {
    // your code here
    const newNode = new Node(number);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  get(index) {
    // your code here
    if (index < 0) {
      return null;
    }

    let currentNode = this.head;
    let currentIndex = 0;
    while (currentNode !== null && currentIndex < index) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    return currentNode !== null ? currentNode.value : null;
  }
}

const list = new LinkedList();

list.add(3);
list.add(5);
console.log(list.get(1));
// => 5

module.exports = LinkedList;
