
export const processAnswerArray = (input: string[]): any => {
    const groups = input.map(val => val === '' ? "\n" : val).join('').split('\n');
    const countAnswers = groups.map(val => new Set(val.split("")).size)
    return countAnswers.reduce((acc, val) => acc + val)
}

export const processAnswerArray2 = (input: string[]) => {
    const groups:string[][] = [];
    let index = 0;
    input.forEach((val, i) => {
        if (val !== '') {
            groups[index] = [...(groups[index] ?? []), val]
        } else {
            index++;
        }
    })
    const remapped = groups.map((val) => {
        let mappedString: {[x:string]: number} = {}
        val.map(str => {
            str.split("").forEach(char => mappedString[char] = (mappedString[char] || 0) + 1 )
        })
        let count = Object.values(mappedString).filter(counter => counter === val.length).length
        return count
    })
    return remapped.reduce((acc, val) => acc + val)
  
}