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

  addAt(index, item) {
    if (index === 0) {
      const newNode = new Node(item);
      newNode.next = this.head;
      this.head = newNode;
      if (this.tail === null) {
        this.tail = newNode;
      }
    } else {
      const prevNode = this.get_node(index - 1);
      if (prevNode !== null) {
        const newNode = new Node(item);
        newNode.next = prevNode.next;
        prevNode.next = newNode;
        if (newNode.next === null) {
          this.tail = newNode;
        }
      }
    }
  }

  remove(index) {
    if (index === 0) {
      if (this.head !== null) {
        this.head = this.head.next;
        if (this.head === null) {
          this.tail = null;
        }
      }
    } else {
      const prevNode = this.get_node(index - 1);
      if (prevNode !== null && prevNode.next !== null) {
        prevNode.next = prevNode.next.next;
        if (prevNode.next === null) {
          this.tail = prevNode;
        }
      }
    }
  }

  get(index) {
    const node = this.get_node(index);
    return node !== null ? node.value : null;
  }

  get_node(index) {
    if (index < 0) {
      return null;
    }

    let currentNode = this.head;
    let currentIndex = 0;
    while (currentNode !== null && currentIndex < index) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    return currentNode;
  }
}

const list = new LinkedList();

list.add(3);
list.add(5);
list.addAt(1, 11);
list.addAt(0, 13);

console.log(list.get(2));
// => 11

console.log(list.get(3));
// => 5

module.exports = LinkedList;
