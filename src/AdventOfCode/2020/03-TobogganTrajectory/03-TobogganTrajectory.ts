import { multiplyNumbers } from "../utils/arrayUtils";
const countCharsInString = (input: string, char: string): number {
    return input.split(char).length - 1
}

export const tobogganTrajectory = (map: string[][], down = 1, right = 3): any => {
    let j = 0;
    let tobogganPath = "";
    for (let i = 0; i < map.length; i = i + down) {
        tobogganPath += map[i][j]
        j += right;
        j = j % map[i].length
    }
    return countCharsInString(tobogganPath, "#");
}

export const multiplePaths = (map: string[][]) => {
    const puzzleMultiplePathInput = [[1, 1], [1, 3], [1, 5], [1, 7], [2, 1]]
    const paths = puzzleMultiplePathInput.map(val => tobogganTrajectory(map, ...val))
    return multiplyNumbers(...paths)
}