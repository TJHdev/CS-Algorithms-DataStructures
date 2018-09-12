
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
  set(index, val) {
    if (index < 0 || index >= this.length) return false
    let node = this.head;
    for(let i = 0; i < index - 1; i++) {
      node = node.next
    }
    node.val = val;
    return true
  }
}

