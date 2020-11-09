export function duplicateCount(text: string): number {
    const valueMap: { [x: string]: number } = {}
    text.toLowerCase().split("").forEach(val => {
        if (valueMap[val]) {
            valueMap[val]++;
        } else {
            valueMap[val] = 1;
        }
    })
    return Object.values(valueMap).filter(val => val !== 1).length

}