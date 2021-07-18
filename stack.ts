/**
 * A stack implementation.
 */

interface Node<T> {
  val: T;
  next: Node<T> | null;
}

export class Stack {
  private top: Node<any> | null;

  constructor() {
    this.top = null;
  }

  pop(): Node<any> {
    if (!this.top) throw new Error();
    const temp = this.top;
    this.top = this.top.next;
    return temp;
  }

  push(item: any): Stack {
    const node: Node<any> = {val: item, next: this.top};
    this.top = node;
    return this;
  }

  peek(): any {
    return this.top.val;
  }

  isEmpty(): boolean {
    return this.top === null;
  }
}
