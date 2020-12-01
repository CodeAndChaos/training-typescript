import { findExpenseReportError, findSumOfTwoNumbersEquals, readPuzzleInput } from "./01-ExpenseReport";

it('works for test input', () => {
    const testNumbers = [1721, 979, 366, 299, 675, 1456];
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
