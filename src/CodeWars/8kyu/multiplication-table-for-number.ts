
export const multiplicationTableForNumber = (number: number): string => {
    const table = [];
    for(let i = 1; i<11; i++) {
        table.push(`${i} * ${number} = ${number * i}`);
    }
    return table.join('\n');
}