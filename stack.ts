/**
 * A stack implementation.
 */

interface Node<T> {
  public val: T;
  public next: Node<T> | null;
}

export class Stack<Node<T>> {
  private top: Node<T> | null;

  constructor() {
    this.top = null;
  }

  pop(): Node<T> {
    if (!this.top) throw new Error();
    const temp = this.top;
    this.top = this.top.next;
    return temp;
  }

  push(item: T): Stack<T> {
    const node: Node<T> = {val: item, next: this.top};
    this.top = node;
    return this;
  }

  peek(): T {
    return this.top.val;
  }

  isEmpty(): boolean {
    return this.top === null;
  }
}
