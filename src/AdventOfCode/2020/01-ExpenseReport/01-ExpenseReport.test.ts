import { findExpenseReportError, findExpenseReportError2, findSumOfThreeNumbersEquals, findSumOfTwoNumbersEquals, readPuzzleInput } from "./01-ExpenseReport";
const testNumbers = [1721, 979, 366, 299, 675, 1456];
it('works for test input', () => {
    expect(findSumOfTwoNumbersEquals(testNumbers, 2020)).toEqual([1721, 299])
    expect(findExpenseReportError(testNumbers)).toEqual(514579)
})

it('reads file Input', async () => {
    const input = await readPuzzleInput();
    expect(input.length).toEqual(200);
})

it('finds the solution', async () => {
    const input = await readPuzzleInput()
    expect(findExpenseReportError(input)).toEqual(840324)
})

it("works for 3 inputs", () => {
    expect(findSumOfThreeNumbersEquals(testNumbers, 2020)).toEqual([366, 675, 979])
    expect(findExpenseReportError2(testNumbers)).toEqual(241861950)
})

it('finds the solution part 2', async () => {
    const input = await readPuzzleInput()
    expect(findExpenseReportError2(input)).toEqual(170098110)
})