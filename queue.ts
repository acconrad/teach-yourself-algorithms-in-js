/**
 * A queue implementation.
 */

interface Node<T> {
  public val: T;
  public next: Node<T> | null;
}

export class Queue<Node<T>> {
  private first: Node<T> | null;
  private last: Node<T> | null;

  constructor() {
    this.first = null;
    this.last = null;
  }

  remove(): Node<T> {
    if (!this.first) throw new Error();
    const temp = this.first;
    this.first = this.first.next;
    if (this.first === null) {
      this.last = null;
    }
    return temp;
  }

  add(item: T): Queue<T> {
    const node: Node<T> = { val: item, next: this.last };
    this.last = node;
    if (this.first === null) {
      this.first = node;
    }
    return this;
  }

  peek(): T {
    return this.first.val;
  }

  isEmpty(): boolean {
    return this.first === null;
  }
}
