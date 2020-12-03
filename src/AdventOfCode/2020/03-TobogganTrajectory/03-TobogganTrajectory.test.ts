import { resolve } from "path";
import { readDataArrayFromFile } from "../utils/readFiles";
import { multiplePaths, tobogganTrajectory } from "./03-TobogganTrajectory";

const demoMap = () => {
    const inputMap = `..##.......
    #...#...#..
    .#....#..#.
    ..#.#...#.#
    .#...##..#.
    ..#.##.....
    .#.#.#....#
    .#........#
    #.##...#...
    #...##....#
    .#..#...#.#`
    return inputMap.split("\n").map(val => val.split(""))
}

const puzzleMap = async () => {
    const inputFilePath = resolve(__dirname, 'puzzleInput.txt')
    const inputArr = await readDataArrayFromFile(inputFilePath)
    return inputArr.map(val => val.split(""))
}

it("finds example path", () => {
   
    expect(tobogganTrajectory(demoMap())).toEqual(7);
})

it("finds the solution", async () => {  
    expect(tobogganTrajectory(await puzzleMap())).toEqual(162);
})

it("finds example path part 2", () => {
    expect(multiplePaths(demoMap())).toEqual(336)
}) 


it("finds the solution part 2", async () => {  
    expect(multiplePaths(await puzzleMap())).toEqual(3064612320);
})