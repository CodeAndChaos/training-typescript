export const processRow = (str: string) => {
    str = str.replaceAll("F", "0").replaceAll("B", "1")
    return parseInt(str, 2)
}

export const processColumn = (str: string) => {
    str = str.replaceAll("R", "1").replaceAll("L", "0")
    return parseInt(str, 2)
}

const prepareString = (str: string): string => {
    
}


export const processBoardingString = (str: string) => {
    const row = processRow(str.substr(0, str.length - 3))
    const column = processColumn(str.substr(str.length - 3, str.length))
    return {
        row,
        column,
        id: row * 8 + column
    }
}