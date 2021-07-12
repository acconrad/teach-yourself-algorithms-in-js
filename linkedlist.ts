/**
 * A LinkedList data structure.
 *
 * @since 0.1.0
 */

interface Node<T> {
  public val: T;
  public next: Node<T> | null;
}

export class LinkedList<Node<T>> {
  private head: Node<T> | null;
  private tail: Node<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(item: T): LinkedList<Node<T>> {
    let node: Node<T> = {val: item, next: null};
    if (!this.head) {
      this.head = node;
    }
    if (this.tail) {
      this.tail.next = node;
    }
    this.tail = node;
    return this;
  }

  prepend(item: T): LinkedList<Node<T>> {
    let node: Node<T> = {val: item, next: null};
    if (!this.tail) {
      this.tail = node;
    }
    if (this.head) {
      node.next = this.head;
    }
    this.head = node;
    return this;
  }

  remove(item: T): void {
    if (this.head.val === item) {
      return this.removeHead();
    }
    if (this.tail.val === item) {
      return this.removeTail();
    }
    item.val = item.next.val;
    item.next = item.next.next;
    return;
  }

  removeHead(): Node<T> {
    if (this.head) {
      const h = this.head;
      this.head = this.head.next;
      return h;
    }
    throw new Error();
  }

  removeTail(): Node<T> {
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

  find(item: T): Node<T> {
    let temp = this.head;
    while (temp.val !== item) {
      temp = temp.next;
    }
    return temp;
  }
}

interface DoubleNode<T> {
  public val: T;
  public next: DoubleNode<T> | null;
  public prev: DoubleNode<T> | null;
}

export class DoublyLinkedList<DoubleNode<T>> {
  private head: DoubleNode<T> | null;
  private tail: DoubleNode<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(item: T): DoublyLinkedList<Node<T>> {
    let node: Node<T> = { val: item, next: null };
    if (!this.head) {
      this.head = node;
    }
    if (this.tail) {
      this.tail.next = node;
    }
    this.tail = node;
    return this;
  }

  prepend(item: T): DoublyLinkedList<Node<T>> {
    let node: Node<T> = { val: item, next: null };
    if (!this.tail) {
      this.tail = node;
    }
    if (this.head) {
      node.next = this.head;
    }
    this.head = node;
    return this;
  }

  remove(item: T): void {
    if (this.head.val === item) {
      return this.removeHead();
    }
    if (this.tail.val === item) {
      return this.removeTail();
    }
    item.val = item.next.val;
    item.next = item.next.next;
    return;
  }

  removeHead(): DoubleNode<T> {
    if (this.head) {
      const h = this.head;
      this.head = this.head.next;
      return h;
    }
    throw new Error();
  }

  removeTail(): DoubleNode<T> {
    if (this.tail) {
      const t = this.tail;
      this.tail = this.tail.prev;
      return t;
    }
    throw new Error();
  }

  find(item: T): DoubleNode<T> {
    let temp = this.head;
    while (temp.val !== item) {
      temp = temp.next;
    }
    return temp;
  }
}
