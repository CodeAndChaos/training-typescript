export const processBinarySymbol = (min: number, max: number, symbol: "0" | "1") => {
    const newVal = (((max + 1) - min) / 2)
    if (symbol === "0") {
        return { min, max: min + newVal - 1 }
    } else {
        return { min: min + newVal, max }
    }
}

export const processBinaryString = (str: string, max = 127) => {
    let result = { min: 0, max }
    str.split("").forEach(val => {

        result = processBinarySymbol(result.min, result.max, val as "0" | "1")
    })

    return result.min;
}

export const processRow = (str: string) => {
    str = str.replaceAll("F", "0").replaceAll("B", "1")
    return processBinaryString(str, 127)
}

export const processColumn = (str: string) => {
    str = str.replaceAll("R", "1").replaceAll("L", "0")
    return processBinaryString(str, 7)
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