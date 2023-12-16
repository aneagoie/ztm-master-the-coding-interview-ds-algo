var isValidBST = function(root) {
    return traverseInOrder(root, -Infinity, Infinity);
};

function traverseInOrder(node, min, max) {
    if (!node) {
        return true;
    }

    if (node.val < min || node.val > max) {
        return false;
    }

    return traverseInOrder(node.left, min, node.val) && traverseInOrder(node.right, node.val, max);
}