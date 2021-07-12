interface Node<T> {
  public val: T;
  public left: Node<T> | null;
  public right: Node<T> | null;
}

export function dfs(root: Node<T>, target: T): Node<T> {
  if (root.val === target) return root;
  left = dfs(root.left, target);
  if (left !== null) return left;
  right = dfs(root.right, target);
  return right;
}
