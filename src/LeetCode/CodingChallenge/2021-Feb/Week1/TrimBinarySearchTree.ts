export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

export function trimBST(root: TreeNode | null, low: number, high: number): TreeNode | null {
    if (root === null) {
        return null;
    }

    let left = null;
    if (root.left && root.left?.val >= low) {
        left = trimBST(root?.left, low, high)
        if (root.left.val >= high) {
            return left;
        }
    }
    let right = null;
    if (root.right && root.right.val <= high) {
        right = trimBST(root.right, low, high)
        if (root.right.val <= low) {
            return right;
        }
    }
    if (low <= root.val && root.val <= high) {
        return new TreeNode(root.val, left, right)
    } else {
        return trimBST(root.left, low, high) || trimBST(root.right, low, high)
    }
    return null
};