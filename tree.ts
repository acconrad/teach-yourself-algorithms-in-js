/**
 * A tree implementation.
 */

interface Node<T> {
  public val: T;
  public children: Node<T>[] | null;
}

export class Tree<Node<T>> {
  private root: Node<T> | null;

  constructor() {
    this.root = null;
  }
}

interface BinaryNode<T> {
  public val: T;
  public left: BinaryNode<T> | null;
  public right: BinaryNode<T> | null;
}

export class BinaryTree<BinaryNode<T>> {
  private root: BinaryNode<T> | null;

  constructor() {
    this.root = null;
  }

  traverseInOrder(node: BinaryNode<T>): void {
    this.traverseInOrder(node.left);
    this._visit(node);
    this.traverseInOrder(node.right);
  }

  traversePreOrder(node: BinaryNode<T>): void {
    this._visit(node);
    this.traversePreOrder(node.left);
    this.traversePreOrder(node.right);
  }

  traversePostOrder(node: BinaryNode<T>): void {
    this.traversePostOrder(node.left);
    this.traversePostOrder(node.right);
    this._visit(node);
  }

  private _visit(node: BinaryNode<T>) {
    console.log(`VISITED NODE: ${node.val}`);
  }
}

export class MinHeap extends BinaryTree<BinaryNode<T>> {
  constructor() {
    super();
  }

  insert(item: T): void {
    const temp: BinaryNode<T> = {val: item, left: null, right: null};
    let ancestry: BinaryNode<T>[] = [this.root];
    let r = this.root;
    // find the rightmost element
    while (r.right !== null) {
      r = r.right;
      ancestry.push(r);
    }
    // insert to the rightmost location
    if (r.left === null) {
      r.left = temp;
    } else {
      r.right = temp;
    }
    // fix tree swapping with ancestry until we land at the right spot
    let current = r;
    while (ancestry.length) {
      let parent = ancestry.pop();
      if (temp.val < parent.val) {
        current.val = parent.val;
        parent.val = temp.val;
      }
      current = parent;
    }
  }

  extractMin(): BinaryNode<T> {
    let ancestry: BinaryNode<T>[] = [this.root];
    let r = this.root;
    let rightmost;
    // find the bottommost, rightmost element

  }
}
