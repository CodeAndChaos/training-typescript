import { TreeNode, trimBST } from "./TrimBinarySearchTree"
it("test1", () => {
    const root = new TreeNode(1, new TreeNode(0), new TreeNode(2))
    const low = 1
    const high = 2
    const output = new TreeNode(1, null, new TreeNode(2))
    const val = trimBST(root, low, high)
    expect(val).toEqual(output)
})

it("test2", () => {
    const root = new TreeNode(3, new TreeNode(0, null, new TreeNode(2, new TreeNode(1), null)), new TreeNode(4, null, null))
    const low = 1
    const high = 3
    const output = new TreeNode(3, new TreeNode(2, new TreeNode(1), null), null)
    expect(trimBST(root, low, high)).toEqual(output)
})
it("test3", () => {
    const root = new TreeNode(1)
    const low = 1
    const high = 2
    const output = new TreeNode(1)
    expect(trimBST(root, low, high)).toEqual(output)
})

it("test4", () => {
    const root = new TreeNode(1, null, new TreeNode(2))
    const low = 1
    const high = 3
    const output = new TreeNode(1, null, new TreeNode(2))
    expect(trimBST(root, low, high)).toEqual(output)
})

it("test5", () => {
    const root = new TreeNode(1, null, new TreeNode(2))
    const low = 2
    const high = 4
    const output = new TreeNode(2)
    expect(trimBST(root, low, high)).toEqual(output)
})