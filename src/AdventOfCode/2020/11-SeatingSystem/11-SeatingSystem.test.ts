import { readDemoData, readPuzzleData } from "../utils/readFiles"
import { changeStateOfBoard, countSeats, createBoard, simulateSeating } from "./11-SeatingSystem"

it("tests", async () => {
    const data = await readDemoData(__dirname)
    const board = createBoard(data)
    expect(countSeats(board)).toEqual(0)
    const newBoard = changeStateOfBoard(board)
    expect(countSeats(newBoard)).toEqual(71)
    expect(simulateSeating(board)).toEqual(37)
})

it("finds a solution", async () => {
    const data = await readPuzzleData(__dirname)
    const board = createBoard(data)
    expect(simulateSeating(board)).toEqual(2093)
})

it("tests", async () => {
    const data = await readDemoData(__dirname)
    const board = createBoard(data)
    expect(countSeats(board)).toEqual(0)
    const newBoard = changeStateOfBoard(board, true)
    expect(countSeats(newBoard)).toEqual(71)
    expect(simulateSeating(board, -1, true)).toEqual(26)
})

it("finds a solution", async () => {
    const data = await readPuzzleData(__dirname)
    const board = createBoard(data)
    expect(simulateSeating(board, -1, true)).toEqual(1862)
})