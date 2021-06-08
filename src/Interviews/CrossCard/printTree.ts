export interface Tree {
    val: number;
    left?: Tree;
    right?: Tree;
}

/**
 * Print out all values of the tree, but skip every second level of the tree
 * 
 * @param tree 
 * @returns 
 */
export const printTree = (tree: Tree) => {
    const BASE_LEVEL = 0;
    return printLeaf(tree, BASE_LEVEL)
    
}

const printLeaf = (tree: Tree, level:  number): number[] => {
    let output: number[] = []
    
    if (tree.left){
        output = [...output, ...printLeaf(tree.left, level +1)]
    } 

    if (level % 2 === 0) {
        output = [...output, tree.val]
    }

    if (tree.right) {
        output = [...output, ...printLeaf(tree.right, level +1)]
    }

    return output;
}   