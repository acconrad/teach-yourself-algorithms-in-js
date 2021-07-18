/**
 * A LinkedList data structure.
 *
 * @since 0.1.0
 */

export interface Node<T> {
  public val: T;
  public next: Node<T> | null;
}

export class LinkedList {
  private head: Node<any> | null;
  private tail: Node<any> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(item: any): LinkedList {
    let node: Node<any> = {val: item, next: null};
    if (!this.head) {
      this.head = node;
    }
    if (this.tail) {
      this.tail.next = node;
    }
    this.tail = node;
    return this;
  }

  prepend(item: any): LinkedList {
    let node: Node<any> = {val: item, next: null};
    if (!this.tail) {
      this.tail = node;
    }
    if (this.head) {
      node.next = this.head;
    }
    this.head = node;
    return this;
  }

  remove(item: Node<any>): Node<any> {
    if (this.head.val === item.val) {
      return this.removeHead();
    }
    if (this.tail.val === item.val) {
      return this.removeTail();
    }
    item.val = item.next.val;
    item.next = item.next.next;
    return;
  }

  removeHead(): Node<any> {
    if (this.head) {
      const h = this.head;
      this.head = this.head.next;
      return h;
    }
    throw new Error();
  }

  removeTail(): Node<any> {
    if (this.tail) {
      const t = this.tail;
      let temp = this.head;
      while (temp.next !== t) {
        temp = temp.next;
      }
      this.tail = temp;
      return t;
    }
    throw new Error();
  }

  find(item: any): Node<any> {
    let temp = this.head;
    while (temp.val !== item) {
      temp = temp.next;
    }
    return temp;
  }
}

interface DoubleNode<T> {
  val: T;
  next: DoubleNode<T> | null;
  prev: DoubleNode<T> | null;
}

export class DoublyLinkedList {
  private head: DoubleNode<any> | null;
  private tail: DoubleNode<any> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(item: any): DoublyLinkedList {
    let node: DoubleNode<any> = { val: item, next: null, prev: null };
    if (!this.head) {
      this.head = node;
    }
    if (this.tail) {
      this.tail.next = node;
    }
    this.tail = node;
    return this;
  }

  prepend(item: any): DoublyLinkedList {
    let node: DoubleNode<any> = { val: item, next: null, prev: null };
    if (!this.tail) {
      this.tail = node;
    }
    if (this.head) {
      node.next = this.head;
    }
    this.head = node;
    return this;
  }

  remove(item: DoubleNode<any>): DoubleNode<any> {
    if (this.head.val === item.val) {
      return this.removeHead();
    }
    if (this.tail.val === item.val) {
      return this.removeTail();
    }
    item.prev.next = item.next;
    return;
  }

  removeHead(): DoubleNode<any> {
    if (this.head) {
      const h = this.head;
      this.head = this.head.next;
      return h;
    }
    throw new Error();
  }

  removeTail(): DoubleNode<any> {
    if (this.tail) {
      const t = this.tail;
      this.tail = this.tail.prev;
      return t;
    }
    throw new Error();
  }

  find(item: any): DoubleNode<any> {
    let temp = this.head;
    while (temp.val !== item) {
      temp = temp.next;
    }
    return temp;
  }
}
