const inorderTraversal = (root) => {
  let stack = [];
  if (!root || root.length === 0 || root[0] === null || root[0] === undefined) {
    return stack;
  }

  const tree = arrayToBinaryTree(root);

  const traverse = (node) => {
    if (node) {
      // post order traversal must be start from root
      traverse(node.left);
      traverse(node.right);
      stack.push(node.value);
    } else {
      return;
      // if !node return immediately
    }
  };
  traverse(tree);
  return stack;
};

const createNode = (value, left = null, right = null) => ({
  value,
  left,
  right,
});

const arrayToBinaryTree = (root) => {
  if (!root || root.length === 0 || root[0] === null) {
    return null;
  }

  const tree = createNode(root[0]);
  const queue = [tree];
  let i = 1;

  while (i < root.length) {
    const current = queue.shift();

    const leftValue = root[i++];
    if (leftValue !== null && leftValue !== undefined) {
      current.left = createNode(leftValue);
      queue.push(current.left);
    }

    const rightValue = root[i++];
    if (rightValue !== null && rightValue !== undefined) {
      current.right = createNode(rightValue);
      queue.push(current.right);
    }
  }

  return tree;
};

inorderTraversal([1, null, 2, 3]);
inorderTraversal([]);
inorderTraversal([1]);
