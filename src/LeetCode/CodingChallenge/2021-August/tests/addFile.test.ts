import { addStrings } from "../addFile";

it('test', () => {
    let num1 = "11";
    let num2 = "123";
    let result = addStrings(num1, num2);
    let output = "134"
    expect(result).toEqual(output);
});