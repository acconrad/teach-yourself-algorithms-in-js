/**
 * A queue implementation.
 */

interface Node<T> {
  val: T;
  next: Node<T> | null;
}

export class Queue {
  private first: Node<any> | null;
  private last: Node<any> | null;

  constructor() {
    this.first = null;
    this.last = null;
  }

  remove(): Node<any> {
    if (!this.first) throw new Error();
    const temp = this.first;
    this.first = this.first.next;
    if (this.first === null) {
      this.last = null;
    }
    return temp;
  }

  add(item: any): Queue {
    const node: Node<any> = { val: item, next: this.last };
    this.last = node;
    if (this.first === null) {
      this.first = node;
    }
    return this;
  }

  peek(): any {
    return this.first.val;
  }

  isEmpty(): boolean {
    return this.first === null;
  }
}
