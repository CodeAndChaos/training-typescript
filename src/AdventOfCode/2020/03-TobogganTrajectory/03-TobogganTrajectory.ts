import { multiplyNumbers } from "../../utils/arrayUtils";

export const tobogganTrajectory = (map: string[][], down = 1, right = 3): number => {
    let j = 0;
    let treeCount = 0;
    for (let i = 0; i < map.length; i = i + down) {
        if (map[i][j] === "#"){
            treeCount++;
        }
        
        j += right;
        j = j % map[i].length
    }
    
    return treeCount;
}

export const multiplePaths = (map: string[][]) => {
    const puzzleMultiplePathInput = [[1, 1], [1, 3], [1, 5], [1, 7], [2, 1]]
    const paths = puzzleMultiplePathInput.map(val => tobogganTrajectory(map, ...val))
    return multiplyNumbers(...paths)
}