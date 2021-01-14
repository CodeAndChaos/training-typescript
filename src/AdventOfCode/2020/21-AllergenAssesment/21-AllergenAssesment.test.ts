import { readDemoData, readPuzzleData } from "../utils/readFiles"
import { parseInputString, prepareList } from "./21-AllergenAssesment"

it('processes an entry', async () => {
    const data = await readDemoData(__dirname)
    expect(parseInputString(data[0])).toEqual({
        lang: [
            "mxmxvkd",
            "kfcds",
            "sqjhc",
            "nhms",
        ], eng: [
            "dairy",
            "fish",
        ]
    })
    expect(prepareList(data)).toEqual(5)
})

it('finds the solution', async () => {
    const data = await readPuzzleData(__dirname)
    expect(prepareList(data)).toEqual(198)
})