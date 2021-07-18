/**
 * A tree implementation.
 */

interface Node<T> {
  val: T;
  children: Node<T>[] | null;
}

export class Tree {
  private root: Node<any> | null;

  constructor() {
    this.root = null;
  }
}

type TERMINAL = '*';
interface TerminalNode {
  val: TERMINAL;
  children: null;
}

interface TrieNode {
  val: string;
  children: TrieNode | TerminalNode;
}
export class Trie {
  private root: TrieNode;

  constructor() {
    this.root = {val: '', children: null};
  }
}

interface BinaryNode<T> {
  val: T;
  left: BinaryNode<T> | null;
  right: BinaryNode<T> | null;
}

export class BinaryTree {
  private root: BinaryNode<any> | null;

  constructor() {
    this.root = null;
  }

  traverseInOrder(node: BinaryNode<any>): void {
    this.traverseInOrder(node.left);
    this._visit(node);
    this.traverseInOrder(node.right);
  }

  traversePreOrder(node: BinaryNode<any>): void {
    this._visit(node);
    this.traversePreOrder(node.left);
    this.traversePreOrder(node.right);
  }

  traversePostOrder(node: BinaryNode<any>): void {
    this.traversePostOrder(node.left);
    this.traversePostOrder(node.right);
    this._visit(node);
  }

  dfs(root: BinaryNode<any>, target: any): BinaryNode<any> {
    if (root.val === target) return root;
    let left = this.dfs(root.left, target);
    if (left !== null) return left;
    let right = this.dfs(root.right, target);
    return right;
  }

  private _visit(node: BinaryNode<any>) {
    console.log(`VISITED NODE: ${node.val}`);
  }
}
